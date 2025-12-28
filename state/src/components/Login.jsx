import React, { useState } from 'react'

const Login = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const status = ()=>
    {
        setIsLoggedIn(!isLoggedIn)
    }
    
  return (
    <div>
        {isLoggedIn?"welcome user . Login successsfull ": "not logged in"}
        <button onClick={status}>{!isLoggedIn? "login": "logout"}</button>
    </div>
  )
}

export default Login