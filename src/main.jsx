import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain={"dev-60jsex85ksb5600w.us.auth0.com"}
    clientId={"gRLwo3Sim2Rvr4yAsyfdEXhExSFvRoEU"}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    </Auth0Provider>
    </BrowserRouter>
    
    
    
    
    
  </React.StrictMode>,
)
