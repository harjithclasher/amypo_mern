import React, { useContext } from 'react'
import Alert from 'react-bootstrap/Alert';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
    if(!isLoggedIn){
  return (
    <div>
        <Alert variant='info'>
            Please login to continue
        </Alert>
        <Navigate to="/"/>  
    </div>
  )
}
    return children
}

export default ProtectedRoutes