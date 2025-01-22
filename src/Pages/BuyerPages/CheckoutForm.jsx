import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import useUserInfo from '../../hook/useUserInfo';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment';

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { userInfo, refetch} = useUserInfo();
    const { paymentAmount, setPaymentAmount, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!paymentAmount) {
            navigate("/dashboard/purchaseCoin");
            return;
        }

        axiosSecure.post("/create-payment-intent", { fee: paymentAmount })
            .then(res => {
                setClientSecret(res.data.clientSecret);

            })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
            });
        }

        // Confirm card Payment
        const { paymentIntent, error: paymentIntentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: userInfo?.displayName || "Anonymous",
                    email: userInfo?.email || "anonymous@email.com",
                }
            }
        })

        if (paymentIntentError) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${paymentIntentError?.message}`,
            });

        }
        if (paymentIntent?.status == "succeeded") {

            const paymentInfo = {
                transactionId: paymentIntent?.id,
                amount: paymentAmount,
                email: userInfo?.email,
                displayName: userInfo?.displayName,
                date: moment().toISOString(),
            }


            const res = await axiosSecure.post("/payment", paymentInfo);
            if (res?.data?.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Thank You!",
                    text: "Your Payment has been Received.",
                });

                refetch();

            }

            else {
                Swal.fire({
                    icon: "success",
                    title: "Opps...",
                    text: "Somthing went wrong!",
                });
            }
            
        }

    }


    return (
        <div className='max-w-xl mx-auto card-body bg-base-100 rounded-md'>
            <h2 className='py-4'>You will be charged: {paymentAmount}$</h2>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn my-6 w-full btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;