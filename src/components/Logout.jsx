import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';

function Logout() {
  const { isAuthenticated, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    logout({
      returnTo: window.location.origin,
    });
  }

  return <div><Loading/></div>;
}

export default Logout;
