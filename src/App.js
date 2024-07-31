import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Addcustomer from './components/Addcustomer';
import LoginDetails from './components/Epin';
import Login from './components/Login';
import Otp from "./components/Otp";
import Epin from "./components/Epin2"
const App = () => {
  return (
    <Router>
            
            
                <Routes>
                  
                    <Route path="/login-details" element={<LoginDetails />} />
                  
                    <Route path="/otp" element={<Addcustomer />} />
                    <Route path="/epin" element={<Epin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Otp />} />
                </Routes>
            
        </Router>
  );
};

export default App;

