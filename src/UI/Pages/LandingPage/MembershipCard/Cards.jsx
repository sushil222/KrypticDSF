import React from "react";
import './Cards.css';




const Cards = () => {
    return(
        <>
            <div className="container">
                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h2>01</h2>
                      <h3>Silver</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h2>02</h2>
                      <h3>Gold</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h2>03</h2>
                      <h3>Platinum</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Cards;