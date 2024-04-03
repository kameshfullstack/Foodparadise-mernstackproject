import "./App.css";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Header from "./Components/Header";
import Restaurant from "./Components/Restaurant";
 
import Login from "./Components/Login";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import RegistrationForm from "./Components/Register";
import About from "./Components/About";
import Errorpage from "./Components/Errorpage";
 
 
 

 
function App() {

  const [isLoggedIn,setIsLoggedIn]=useState()

  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem("token"))
  },[])

  //token present - isLoggedIn - true
  //token not present - isLoggedIn - False

  return (
    <>
    <Router>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route index path="/" Component={Home}/>
        <Route path="/home" Component={Home}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/Register" Component={RegistrationForm}/>
        <Route path="/About" Component={About}/>
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/foods" Component={Restaurant}/>
        
        
        <Route path="*" Component={Errorpage} />
      </Routes>
    </Router>
    </>
  );
  }

export default App;
