

import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading){
    return <Loading/>
  }

  return (isAuthenticated ? children :<Navigate to= '/login'/>);
};

export default PrivateRoute;