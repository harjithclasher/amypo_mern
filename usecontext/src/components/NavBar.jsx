import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
    const {login , logout , user} = useContext(AuthContext)
  return (
    <div><p>
        welcome {user}</p></div>
  )   
}

export default NavBar