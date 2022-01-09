import React, { useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import JobsPosted from './components/JobsPosted';
function App() {
  const getToken  = localStorage.getItem("user-loggedIn") 
  const userLoggedIn = getToken ? true : false
  console.log("userLoggedIn",userLoggedIn)
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={userLoggedIn ? <Navigate replace to='/home'/> : <Navigate replace to='/login'/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/recruiters/jobs/:jobId" element={<JobsPosted />} />
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
