import "./Home2.css";

//icons
import { FaBars } from "react-icons/fa";

import Sidenav from "../../Components/Sidenav/Sidenav";
import { Outlet } from "react-router-dom";

const Home2 = () => {
  function toggleNavbar() {
    let navbarElement = document.querySelector("nav#main_side_nav");
    navbarElement.style.display = "grid";
  }
  return (
    <div className="home2">
      <div className="homeSideNav">
        <Sidenav />
      </div>
      <div className="outlet">
        <div className="outlet_menu">
          <span className="toggle_bar">
            {" "}
            <FaBars onClick={toggleNavbar} size={30} />{" "}
          </span>
          <span> {/* for styling purpose*/} </span>
        </div>
        <Outlet />
      </div>
      <div className="magazine">
        <ul>
          <li>Suggested coaches</li>
          <li>Makeup</li>
          <li>Popular Hits</li>
          <li>Hillbrow Community</li>
          <li>Nelspruit Event</li>
          <li>Upcomming matches</li>
        </ul>
      </div>
    </div>
  );
};

export default Home2;
