import React from "react";
import './Match.css'
const Match = () => {
  return ( 
      <>
      <div className="match__item">

          <div className="img_under">
              <div className="item__one"></div>
          </div>
          <div className="first_text">
              <h6>NEW ENGLAND</h6>
              <h2>ROMANS</h2>
          </div>
          <div className="item__two">
              <span>L</span>
              <span>I</span>
              <span>V</span>
              <span>E</span>
              <div className="timer">
                  <div className="viewport_one"></div>
                  <span>10</span>
                  <span>:</span>
                  <span>15</span>
                  <div className="viewport_two"></div>
              </div>
          </div>
          <div className="second_text">
                <h6>TEXAS</h6>
                <h2>TITANS</h2>
          </div>
          <div className="img_under_two" >
          <div className="item__three"></div>
          </div>

      </div>
      </>
  )
}

export default Match;