import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./PostItem.css";
//images
import NewsFeed from "../../BoxerComponent/NewsFeed/NewsFeed";
import Dropdown from "../Dropdown/Dropdown";
import Card from "./Card";
import Input from "../Input/Input";

const PostItem = () => {
  //getPostFromLocalStorage
  function getPostFromSession() {
    let post = JSON.parse(window.sessionStorage.getItem("post"));
    if (post !== null) {
      return post;
    }
  }

  //get comments
  function getComments() {
    let commentsList = JSON.parse(
      window.sessionStorage.getItem("post")
    ).commentsArr;

    let myCommentsformated = null;
    if (commentsList.length > 0) {
      let displayComments = commentsList.map((item) => (
        <Card text={item.comment} src={item.src} key={item.id} />
      ));
      myCommentsformated = (
        <Dropdown title={"Comments"} list={displayComments} />
      );
    }

    return myCommentsformated;
  }

  return (
    <div className="post_item_wrapper">
      <section className="post_item">
        <header>
          <Link to={"/pages/home2/search/search_item"}>
           <span> <FaArrowLeft color="var(--grey_primary)" fontSize={20} /> Profile </span> 
          </Link>
        </header> 
        <main className="post_main">
        <div className="comment_input">
          <Input placeholder="Write your comment..." />
        </div>
        <div className="newsfeed_post">
          <NewsFeed Post={getPostFromSession()} />
        </div>

        {getComments() !== null ? getComments() : " "}
        <br />
        <br />

        </main>
      </section>
    </div>
  );
};

export default PostItem;
