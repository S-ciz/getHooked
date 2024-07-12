import "./NewsFeed.css";

//icons
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";
//images
import Visual from "../../Resources/cal.jpg";
import Visual2 from "../../Resources/box.jpg";
import Gym from "../../Resources/community.jpg";
import { useState } from "react";

const NewsFeed = ({ Post }) => {
  const [like, setLike] = useState(true);
  let [imgIndex, setImgIndex] = useState(0);

  function increment() {
    let imgArrSize = Post.src.length;

    if (imgIndex < imgArrSize - 1) {
      setImgIndex(imgIndex + 1);
    }
  }

  function decrement() {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  }

  function LikePost() {
    like ? setLike(false) : setLike(!like);
  }

  function displayChevons() {
    if (imgIndex > 0 && imgIndex < Post.src.length - 1) {
      return (
        <>
          <aside className="chevronLeftRight">
            {" "}
            <FaChevronCircleLeft onClick={decrement} color="black" size={20} />
          </aside>
          <aside className="chevronLeftRight">
            {" "}
            <FaChevronCircleRight
              onClick={increment}
              color="black"
              size={20}
            />{" "}
          </aside>
        </>
      );
    }
    if (imgIndex == Post.src.length - 1 && Post.src.length > 1) {
      return (
        <>
          <aside className="chevronLeftRight">
            <FaChevronCircleLeft onClick={decrement} color="black" size={20} />
          </aside>
          <span></span>
        </>
      );
    }

    if(Post.src.length === 1)
    {
      return <></>
    }

    return (
      <>
        <span></span>
        <aside className="chevronLeftRight">
          {" "}
          <FaChevronCircleRight onClick={increment} color="black" size={20} />
        </aside>
      </>
    );
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
            <h5 style={{ color: "white" }}>
              <span className="active"> GetHooked</span> Magazine{" "}
            </h5>
          </div>
          <div className="feed_time"> {Post.timeStamp} </div>
        </header>

        <main className="feed_content">
          <p>{Post.text}</p>
          <div className="feed_visual">
            <img loading="lazy" alt="feed_visual" src={Post.src[imgIndex]} />
            <span className="feed_chevrons">{displayChevons()}</span>
          </div>
        </main>
        <aside className="feed_aside">
          <div>
            <span onClick={LikePost}>
              {like ? (
                <AiOutlineLike color="var(--grey_secondary)" size={20} />
              ) : (
                <AiFillLike color="var(--grey_primary)" size={20} />
              )}
            </span>
            <p>{Post.likes}</p>
          </div>
          <div style={{ cursor: "pointer" }}>
            <AiOutlineComment size={18} />
            <p>{Post.comments}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

NewsFeed.defaultProps = {
  Post: {
    src: [Visual, Visual2, Gym],
    timeStamp: "12 September 2022",
    text: "My life is a movie 🤣",
    comments: 34,
    likes: 9,
  },
};

export default NewsFeed;
