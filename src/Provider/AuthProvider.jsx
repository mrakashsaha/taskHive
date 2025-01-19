import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false)
            } else {
                console.log('no user found')
                setLoading(false);
            }

            return () => unsubscribe();
        });

    }, [])

    const createAccountWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const saveUserDetails = (name, url) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: url })
    }

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const contineWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutFromAccount = () => {
        setLoading(true);
        return signOut(auth);
    }






    const authInfo = {
        loading,
        setUser,
        user,
        setLoading,
        createAccountWithEmail,
        saveUserDetails,
        signInWithEmail,
        contineWithGoogle,
        signOutFromAccount,

    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;