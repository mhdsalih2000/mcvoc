import './style/App.css'
import React from 'react'
import Login from './components/Login'
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Logout from './components/Logout';
import PrivateRoute from './services/ProtectedRoute';



function App() {
  


  return (
    <>

<Routes>

<Route path="/" element={
  <PrivateRoute >
  <Home />
  </PrivateRoute>
  } />


 
     
      <Route path="/login" element={<Login />} />

      <Route path="/logout" element={<Logout/>}/>

    </Routes>
    </>
  )
}

export default App
