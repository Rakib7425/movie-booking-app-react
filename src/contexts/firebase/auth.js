import React, { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signOut as authSignOut } from 'firebase/auth'
import { auth } from './firebase'

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true,
})

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const clear = () => {
        setAuthUser(null);
        setIsLoading(false);
        return;
    }

    const authStateChanged = (user) => {
        setIsLoading(true);

        if (!user) {
            clear();
            return;
        }
        setAuthUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
        })
    };

    const signOut = () => {
        authSignOut(auth).then(() => clear())
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged)
        return () => unsubscribe()

        // eslint-disable-next-line
    }, [])

    return {
        authUser,
        isLoading,
        setAuthUser,
        signOut,
    }
};

export const AuthUserProvider = ({ children }) => {
    const auth = useFirebaseAuth();

    return (
        <AuthUserContext.Provider value={auth}>
            {children}
        </AuthUserContext.Provider>
    );

}

export const useAuth = () => {
    useContext(AuthUserContext)
};
