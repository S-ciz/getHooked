import "./Sidenav.css";

import { Link } from "react-router-dom";

//icons
import { FaCalendar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

//images
import Profile from "../../Resources/shadowbox.jpg";

const Sidenav = () => {
  return (
    <nav className="sidenav">
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
        <li>
          <Link to={"/pages/home2/search"}>
            <FaSearch color="white" size={35} /> Search{" "}
          </Link>
        </li>
        <li>
          <Link to={"/pages/home2/notification"}>
            <FaBell color="yellow" size={40} /> Notifications (12) {" "}
          </Link>
        </li>

        <li>
          <Link to={"/pages/home2/calendar"}>
            <FaCalendar color="teal" size={40} /> Calendar{" "}
          </Link>
        </li>
        <li>
          <Link to={"/pages/home2/chats"}>
            <FaComment color="var(--blue)" size={40} /> Chats{" "}
          </Link>
        </li>
        <li>
          <Link to={"/pages/home2/newsfeed"}>
            <FaNewspaper color="purple" size={40} /> NewsFeed (2) {" "}
          </Link>
        </li>
        <li>
          <Link to={"/pages/home2/live"}>
            <FaStream color="brown" size={40} /> Live{" "}
          </Link>
        </li>
        <li>
          <Link to={"/pages/sign_in"}>
            <FaSignOutAlt color="grey" size={40} /> Sign out{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
