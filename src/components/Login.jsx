import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';

function Login() {
  const { isAuthenticated,loginWithRedirect } = useAuth0();
  if (isAuthenticated){
    <Navigate to='/'/>
}
  if (!isAuthenticated){
    useEffect(() => {
        const timeout = setTimeout(() => {
        loginWithRedirect();
        }, 2000); 
        return () => clearTimeout(timeout); 
    
    }, []);}
    
    return <div><Loading/></div>;
}

export default Login;
