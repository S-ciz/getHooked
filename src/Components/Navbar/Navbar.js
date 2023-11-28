import "./Navbar.css";

import {FaBars} from "react-icons/fa"

//images
import LogoFist from "../../Resources/boxorigin.jpeg";
//links
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="navbar_header">
        <div className="navbar_logo">
         <div> <img loading="lazy" className="fist_logo" alt="logo" src={LogoFist} /> </div>
          <div>  <span className="active">Box</span>Origins </div>
        </div>


        <div className="navbar_bars">
           <FaBars size={30}/>
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

      <div className="a_dropdown">
        <h3>this is a dropdown</h3>
      </div>
    </>
  );
};

export default Navbar;
