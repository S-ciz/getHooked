import "./Sidenav.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUserCredentials } from "./Api";
import { updateAgentOnlineStatus } from "../../Pages/SignIn/Api";

//images
import AlternativeImage from "../../Resources/user.png";
//icons
import {
  FaCalendar,
  FaComment,
  FaNewspaper,
  FaStream,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaCog,
} from "react-icons/fa";

//images
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
  //get agent credential
  const [agentName, setAgentName] = useState("")
  const [agentSurname, setAgentSurname] = useState("")
  const [profileImg, setProfileImg] = useState("")
  useEffect(()=>{
     getUserCredentials()
     .then((data)=>{
    setAgentName(data.name);
    setAgentSurname(data.surname);
    setProfileImg(data.profileImage);
     })
  }, [])

  function signOut()
  {
     updateAgentOnlineStatus("offline")
  }

  return (
    <nav ref={navbarRef} id="main_side_nav" className="sidenav">
      <div className="image">
        <img loading="lazy" alt="profile" src={profileImg} />
        <span style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <h5>
            {agentName} {agentSurname}
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
          <Link to={"/pages/home2/newsfeeds"}>
            <FaNewspaper color="purple" size={40} /> NewsFeeds (2){" "}
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
          <Link onClick={signOut} to={"/pages/sign_in"}>
            <FaSignOutAlt color="grey" size={40} /> Sign out{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
