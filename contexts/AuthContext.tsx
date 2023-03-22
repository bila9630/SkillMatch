import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebaseClient';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthContextProvider = (props: any) => {
    const [currentUser, setCurrentUser] = useState(null)
    // YOU NEED LOADING OTHERWISE IT WON'T WORK!!!!
    // Loading is there so you navigate to the page after the user is loaded
    // Otherwise currentUser is null and you won't be redirect to the homepage
    const [loading, setLoading] = useState(true)

    function login(email: any, password: any) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setCurrentUser(user)
                console.log(user)
                // window.setTimeout(1)
            } else {
                setCurrentUser(null)
            }
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    const value: any = { currentUser, login, logout }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider