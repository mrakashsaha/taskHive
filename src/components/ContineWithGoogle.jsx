import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../hook/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const ContineWithGoogle = () => {
    const { contineWithGoogle, setLoading } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        contineWithGoogle()
            .then((result) => {
                const user = result.user;
                const isSignup = parseInt(user?.metadata?.createdAt) === parseInt(user?.metadata?.lastLoginAt);

                if (user) {
                    if (isSignup) {
                        const userInfo = {
                            displayName: user?.displayName,
                            email: user?.email,
                            photoURL: user?.photoURL,
                            role: "worker",
                        }

                        axiosPublic.put("/users", userInfo)
                            .then(res => {
                                if (res?.data?.upsertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Congratulations!",
                                        text: "You have recived 10 Coins for joining as Worker.",
                                    });
                                }
                            })
                            .catch(error => {
                                console.log(error);
                                setLoading(false);
                            })
                    }


                    navigate("/")
                }

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Continue with Google was Failed!",
                });
            });

    }
    return (
        <div className='py-4'>
            <button onClick={handleGoogleLogin} className='btn w-full'><FaGoogle></FaGoogle>Continue With Google</button>
        </div>
    );
};

export default ContineWithGoogle;