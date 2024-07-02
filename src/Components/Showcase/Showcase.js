import VidCard from "../VidCard/VidCard";
import "./Showcase.css";

//images

import box1 from "../../Resources/faces.jpg";
import box2 from "../../Resources/spar2.jpg";
import box3 from "../../Resources/lift.jpg";

const Showcase = () => {
  return (
    <main className="showcase">
      <div className="showcase_content">
        {/**  background image goes here */}
      </div>

      <div className="content_aside">
        <h1>
          Get<span className="active">Hooked:</span>
        </h1>
        <h2>
          {" "}
          Where Boxing <span className="active">Prospects </span>
          Meet <span className="active">Experts</span>!{" "}
        </h2>
        <a className="btn_ring" href="#ring">
          {" "}
          Step into the ring!{" "}
        </a>
      </div>

      <aside className="vidcards">
        <div>
          {" "}
          <VidCard src={box1} />{" "}
        </div>
        <div>
          {" "}
          <VidCard src={box2} />{" "}
        </div>
        <div>
          {" "}
          <VidCard src={box3} />{" "}
        </div>
      </aside>
    </main>
  );
};

export default Showcase;
