import "./Sidenav.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

//icons
import {
  FaCalendar,
  FaComment,
  FaNewspaper,
  FaStream,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaCog
} from "react-icons/fa";

//images
import Profile from "../../Resources/shadowbox.jpg";

const Sidenav = () => {
  let navbarRef = useRef();
  function toggleNavbar() {
    let navbarElement = navbarRef.current;
    if (window.innerWidth < 900) {
      navbarElement.style.display = "none";
    } else {
      navbarElement.style.display = "grid";
    }
  }
  return (
    <nav ref={navbarRef} id="main_side_nav" className="sidenav">
      <div className="image">
        <img alt="profile" src={Profile} />
        <span style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <h5>
            {" "}
            The Punisher
            <br />
            (red boxer)
          </h5>
          <p style={{ background: "red" }}> </p>
        </span>
      </div>

      <ul>
        <li onClick={toggleNavbar}>
          <Link to={"/pages/home2/search"}>
            <FaSearch color="white" size={35} /> Search{" "}
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to={"/pages/home2/notification"}>
            <FaBell color="yellow" size={40} /> Notifications (12){" "}
          </Link>
        </li>

        <li onClick={toggleNavbar}>
          <Link to={"/pages/home2/calendar"}>
            <FaCalendar color="teal" size={40} /> Calendar{" "}
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to={"/pages/home2/chats"}>
            <FaComment color="var(--blue)" size={40} /> Chats{" "}
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to={"/pages/home2/newsfeed"}>
            <FaNewspaper color="purple" size={40} /> NewsFeed (2){" "}
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to={"/pages/home2/live"}>
            <FaStream color="brown" size={40} /> Live{" "}
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to={"/pages/sign_in"}>
            <FaCog color="var(--grey_secondary)" size={40} /> Settings{" "}
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to={"/pages/sign_in"}>
            <FaSignOutAlt color="grey" size={40} /> Sign out{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
