import React from "react";
import './Slider.css'
import logoImg from "../../../../images/logo.png";
const Slider = () => {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <img src={logoImg}></img>
          <h3>Game </h3>
           <h3 className="changer">is on!</h3>
          {/* <button>Join us</button> */}
        </div>


        <div className="img_left"></div>
        <div className="sliderInner_img"> </div>
        <div className="img_right"></div>


      </div>
    </>
  )
}

export default Slider;