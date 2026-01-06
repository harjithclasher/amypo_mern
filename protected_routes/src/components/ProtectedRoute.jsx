import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({chilwndren}) => {
    const {user} = useContext(AuthContext)
    if(!user)
        return <Navigate to ='/login'/>
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute