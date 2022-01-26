import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Layout //
// import Header from '../../Pages/LandingPage/Header/Header'
import Footer from '../../Pages/LandingPage/footer/Footer'
// import Slider from '../../Pages/LandingPage/section/Slider'
// import Match from '../../Pages/LandingPage/MatchContainer/Match'
import LandingPage from '../../Pages/LandingPage/LandingPage';

function App() {
  return (
    <Fragment>
      <Router>
        <LandingPage />
        <Routes>
          {/* <Route exact path='/Draft_King' element={<h1>Draft_King</h1>} />
          <Route exact path='/FAN_BALL' element={<h1>FAN_BALL</h1>} />
          <Route exact path='/Fan_Duel' element={<h1>Fan_Duel</h1>} />
          <Route exact path='/Fantasy_Draft' element={<h1>Fantasy_Draft</h1>} />
          <Route exact path='/Yahoo' element={<h1>Yahoo</h1>} />
          <Route exact path='/Draft_Kings_captains_Mode' element={<h1>Draft_Kings_captains_Mode</h1>} />
          <Route exact path='/FanDuel_single_Game' element={<h1>FanDuel_single_Game</h1>} />
          <Route exact path='/Drafting_Tiers' element={<h1>Drafting_Tiers</h1>} /> */}

          {/* 404 Page */}
          {/* <Route path='*' element={<h1>404</h1>} /> */}
        </Routes>
      </Router>
      {/* @todo - router */}
      {/* @todo - footer */}
    </Fragment>
  )
}

export default App
