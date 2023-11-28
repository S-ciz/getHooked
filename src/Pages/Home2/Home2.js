import "./Home2.css";


import Sidenav from "../../Components/Sidenav/Sidenav";
import { Outlet } from "react-router-dom";

const Home2 = () => {
  return (
    <div className="home2">
      <div>
     <Sidenav/>
      </div>
      <div className="outlet">
        <Outlet />{" "}
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
