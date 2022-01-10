import React from 'react';
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
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={userLoggedIn ? <Navigate replace to='/boat-task'/> : <Navigate replace to='/login'/>} />
          <Route path="/boat-task" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/jobs/" element={<JobsPosted />} />
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
