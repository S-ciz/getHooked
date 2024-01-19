import "./NewsFeed.css";

//icons
import { FaComment, FaThumbsUp } from "react-icons/fa";

//images
import Visual from "../../Resources/cal.jpg";
import Gym from "../../Resources/community.jpg";

const NewsFeed = ({ Post }) => {
  return (
    <div className="newsfeed">
      <div className="news_card">
        <header className="feed_header">
          <div className="feed_logo">
            <span>
              <img
                alt="logo"
                loading="lazy"
                style={{ width: "30px", height: "30px", borderRadius: "100%" }}
                src={Gym}
              />
            </span>
            <h5>
              <span className="active"> GetHooked</span> Magazine{" "}
            </h5>
          </div>
          <div className="feed_time"> {Post.timeStamp} </div>
        </header>

        <main className="feed_content">
          <p>{Post.text}</p>
          <div className="feed_visual">
            <img loading="lazy" alt="feed_visual" src={Post.src} />
          </div>
        </main>
        <aside className="feed_aside">
          <div>
            <FaThumbsUp color="var(--blue)" size={18} />
            <p>{Post.likes}</p>
          </div>
          <div>
            <FaComment size={18} />
            <p>{Post.comments}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

NewsFeed.defaultProps = {
  Post: {
    src: Visual,
    timeStamp: "12 September 2022",
    text: "My life is a movie 🤣",
    comments: 34,
    likes: 9,
  },
};

export default NewsFeed;
