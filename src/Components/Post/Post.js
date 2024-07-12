import "./Post.css";
import { Link } from "react-router-dom";
//images
import demoIMG from "../../Resources/gym.jpg";
//icons
import { FaHeart, FaComment, FaImage, FaVideo } from "react-icons/fa";

//class
const Post = ({ category, src, likes, comments, commentsArr, text, timeStamp }) => {

  console.log(src)
  function storePostToSession()
  {   
     let setDataToObject = { category, src, likes, comments, commentsArr, text, timeStamp }
      window.sessionStorage.setItem("post", JSON.stringify(setDataToObject))
  }

  return (
    <Link onClick={storePostToSession} to="/pages/home2/post_item" > 
    <div  className="post">
      <header>
       { category==="image"?  <FaImage color="var(--grey_primary)" size={15}/> : <FaVideo color="var(--grey_primary"/> }
      </header>
      <div className="post_cover">
       
        <span>
          <FaHeart size={20} />
          <p>{likes}</p>
        </span>
        <span>
          <FaComment size={20} />
          <p>{comments}</p>
        </span>
       
      </div>
      <div className="post_graphic">
        <img src={src[0]} alt="post_graphic" />
      </div>
    </div>
    </Link>
  );
};

Post.defaultProps = {
  category: "image",
  src: [demoIMG],
  likes: 223,
  text: "this is a default text about the post",
  comments: 12,
  timeStamp: "default time",
  commentsArr: []
};

export default Post;
