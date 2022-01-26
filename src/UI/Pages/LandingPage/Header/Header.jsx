import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import games from "./Games.js";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../../../images/LogoOfficial.png'
// styles
import "./Header.css";

const Header = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    setdata(games[0].sites)
  }, [])
  console.log(data)
  return (
    <>
      <div className="headContainer">
      <div className="topLogo">
        <a href="#about"><img src={logo} className="imglogo" /><p>ryptic</p></a>
      </div>
      <div className="mainNav">
        <ul className="name_list">
          {games.map((w) => {
            return (
              <div className="top_bar_link">
                <li
                onClick={() => {
                  console.log(w.sites)
                  setdata(w.sites)
                }}>
                <Link to={`/${w.path}`}>{w.games}</Link>
              </li>
              </div>
            );
          })}


        </ul>
      </div>
      <div className="name_list second_List">
        <li className="rightside">
          <a href="#LogIn">LogIn</a>
        </li>
        <li className="rightside">
          <a href="#Sign">Sign Up</a>
        </li>
      </div>
      </div>
      <div className="divulmain">
        <ul className="uldiv" >
          {
            data?.map((w) => {
              return (
                <li  ><a href="#">{w}</a></li>
              )
            })
          }

        </ul>
      </div>

    </>
  );
};

export default Header;