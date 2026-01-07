import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const  AuthProvider = ({children}) => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const login =(email,pass)=>
    {
        if(email==="sathish@gmail.com" && pass==="1234")
        {
            setIsLoggedIn(true)
            return true
        }
        setIsLoggedIn(false)
        return false

    }
    const logout = () =>
    {
        setIsLoggedIn(false)
    }
  return (
    <AuthContext.Provider value = {{isLoggedIn,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider