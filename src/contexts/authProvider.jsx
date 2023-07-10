import { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [navbarToggle, setNavbarToggle]= useState(false)

    const authInfo = {
        navbarToggle,
        setNavbarToggle
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;
