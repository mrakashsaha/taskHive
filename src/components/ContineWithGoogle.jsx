import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const ContineWithGoogle = () => {
    const { contineWithGoogle } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        contineWithGoogle()
            .then((result) => {
                const user = result.user;

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