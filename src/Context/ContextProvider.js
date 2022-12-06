import React, { createContext, useEffect, useState } from 'react';
import app from '../Auth/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Google SignIn 

    const googleAuthProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Github Sign In
    const githubAuthProvider = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Register with email and password implement
    const registerInprovider = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email and password implement

    const loginProvider = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // sign Out implement
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubsCribe();
    }, [])

    const userInfo = { user, loading, googleAuthProvider, githubAuthProvider, registerInprovider, loginProvider, logOut, updateUserProfile }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;