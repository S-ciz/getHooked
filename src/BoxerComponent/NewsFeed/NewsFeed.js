import "./NewsFeed.css";

//icons
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

//images
import Visual from "../../Resources/cal.jpg";
import Gym from "../../Resources/dum.jpg";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <div className="news_card">
        <header className="feed_header">
          <div className="feed_logo">
            <span>
              {" "}
              <img
                alt="logo"
                loading="lazy"
                style={{ width: "30px", height: "30px", borderRadius: "100%" }}
                src={Gym}
              />{" "}
            </span>
            <h5>
              {" "}
              <span className="active"> GetHooked</span> Magazine{" "}
            </h5>
          </div>

          <div className="feed_time"> 12 September 2023 </div>
        </header>

        <main className="feed_content">
          <p>
            {" "}
            InsightAmateurBoxing is a cutting-edge online platform passionately
            dedicated to amateur boxing enthusiasts, trainers, and gyms. Our
            mission is to empower the amateur boxing community by providing a
            seamless and innovative platform that fosters connections,
            facilitates skill development, and promotes a sense of unity among
            aspiring boxers and{" "}
          </p>

          <div className="feed_visual">
            <img loading="lazy" alt="feed_visual" src={Gym} />
          </div>
        </main>

        <aside className="feed_aside">
          <div>
            <FaThumbsUp color="var(--blue)" size={18} />
            <p>123</p>
          </div>
          <div>
            <FaComment size={18} />
            <p>123</p>
          </div>
        </aside>
      </div>
      <div className="news_card">
        <header className="feed_header">
          <div className="feed_logo">
            <span>
              {" "}
              <img
                alt="logo"
                loading="lazy"
                style={{ width: "30px", height: "30px", borderRadius: "100%" }}
                src={Visual}
              />{" "}
            </span>
            <h5>
              {" "}
              <span className="active"> GetHooked</span> Magazine{" "}
            </h5>
          </div>

          <div className="feed_time"> 12 September 2023 </div>
        </header>

        <main className="feed_content">
          <p>
            {" "}
            InsightAmateurBoxing is a cutting-edge online platform passionately
            dedicated to amateur boxing enthusiasts, trainers, and gyms. Our
            mission is to empower the amateur boxing community by providing a
            seamless and innovative platform that fosters connections,
            facilitates skill development, and promotes a sense of unity among
            aspiring boxers and{" "}
          </p>

          <div className="feed_visual">
            <img alt="feed_visual" src={Visual} />
          </div>
        </main>

        <aside className="feed_aside">
          <div>
            <FaThumbsUp color="var(--blue)" size={20} />
            <p>12</p>
          </div>
          <div>
            <FaComment size={20} />
            <p>22</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsFeed;
