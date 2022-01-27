import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from "../../Pages/Login_signup/Login_signup";

// Layout //
// import Header from '../../Pages/LandingPage/Header/Header'
// import Slider from '../../Pages/LandingPage/section/Slider'
// import Match from '../../Pages/LandingPage/MatchContainer/Match'
import LandingPage from '../../Pages/LandingPage/LandingPage';
import Header from '../../Pages/LandingPage/Header/Header';
import Footer from '../../Pages/LandingPage/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
        <Footer/>
      </Router>
      {/* @todo - router */}
      {/* @todo - footer */}
    </>
  )
}

export default App
