import "./Navbar.css";

import { FaBars } from "react-icons/fa";

//images
import LogoFist from "../../Resources/boxorigin.jpeg";
//links
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
const Navbar = () => {
  const modalNav = useRef();

  function toggleNavBar() {
    document.querySelector("body").style.overflow = "hidden";
    modalNav.current.style.display = "grid";
  }

  function removeBar() {
    document.querySelector("body").style.overflow = "scroll";
    modalNav.current.style.display = "none";
  }
  
  return (
    <>
      <header className="navbar_header">
        <div className="navbar_logo">
          <div>
            {" "}
            <img
              loading="lazy"
              className="fist_logo"
              alt="logo"
              src={LogoFist}
            />{" "}
          </div>
          <div>
            {" "}
            <span className="active">Box</span>Origins{" "}
          </div>
        </div>

        <div className="navbar_bars">
          <FaBars onClick={toggleNavBar} size={30} />
        </div>

        <div className="navbar_ul">
          <ul>
            <li>
              {" "}
              <a className="active" href="#home">
                Home
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#com">Boxers</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#coach">Coaches</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#com">Community</a>{" "}
            </li>

            <button className="list_btn">
              <Link to={"/pages/sign_in"}>Sign in </Link>{" "}
            </button>
          </ul>
        </div>
      </header>

      <div ref={modalNav} className="secondary_navbar">
        <div className="container">
          <header>
            <div></div>
            <div style={{cursor: "pointer"}}>
              <FaTimes onClick={removeBar} size={30} />
            </div>
          </header>

          <ul>
            <li>
              {" "}
              <a className="active" href="#home">
                Home
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#com">Boxers</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#coach">Coaches</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#com">Community</a>{" "}
            </li>

            <button className="list_btn">
              <Link to={"/pages/sign_in"}>Sign in </Link>{" "}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
