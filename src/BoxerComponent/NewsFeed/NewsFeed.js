import "./NewsFeed.css";

//icons
import { FaComment } from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
//images
import Visual from "../../Resources/cal.jpg";
import Gym from "../../Resources/community.jpg";
import { useState } from "react";

const NewsFeed = ({ Post }) => {
  const [like, setLike] = useState(true);

  function LikePost() {
    like ? setLike(false) : setLike(!like);
  }

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
            <span onClick={LikePost}>
              {like ? (
                <AiOutlineLike color="var(--grey_tertiary)" size={20} />
              ) : (
                <AiFillLike color="var(--blue)" size = {20} />
              )}
            </span>
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
