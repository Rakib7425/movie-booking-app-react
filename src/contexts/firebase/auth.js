import React, { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signOut as authSignOut } from 'firebase/auth'

const AuthuserContext = createContext({
    autUser: null,
    isLoading: true,
});


const AuthUserProvider = ({ children }) => {
    return (
        <AuthuserContext.Provider value={{}}>
            {children}
        </AuthuserContext.Provider>
    )

};

const useAuth = () => useContext(AuthuserContext);
