import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
