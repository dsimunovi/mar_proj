import React,{useState,useEffect} from 'react' 
import './App.css'
import Layout from './components/Layout'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Prijava from './components/Login'
import Registracija from './components/Registration'





const App = () => { 

  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Prijava/>}></Route>
        <Route path='/sign-in' element={<Prijava/>}></Route>
        <Route path='/sign-up' element={<Registracija/>}></Route>
        <Route path='/home' element={<Layout/>}></Route>
      </Routes>
    </Router>
  )} 
      

export default App;
