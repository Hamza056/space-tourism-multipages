import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import img1 from "../assets/shared/logo.svg";
import img2 from "../assets/shared/icon-hamburger.svg";
import img3 from "../assets/shared/icon-close.svg";
import "./Link.css";
const Navbar = () => {
  const [active, setactive] = useState(false);
  const Openmodel = () => {
    setactive(true);
  };
  const Closebtn = () => {
    setactive(false);
  };
  return (
    <header>
      <div
        className={
          !active
            ? `${classes.header} ${classes.mrg}`
            : `${classes.header} ${classes.mbl}`
        }
      >
        <img src={img1} alt="" />

        <nav>
          <ul>
            <div className={classes.line}></div>
            {active ? <img onClick={Closebtn} src={img3} alt="" /> : null}
            <li>
              <NavLink to="/">
                {" "}
                <b>00</b> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination">
                {" "}
                <b>01</b>Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew">
                {" "}
                <b>02</b>crew
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology">
                {" "}
                <b>03</b>Technology
              </NavLink>
            </li>
          </ul>
          <div onClick={Openmodel} className={classes.hamburg}>
            {!active ? <img src={img2} alt="" /> : null}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
