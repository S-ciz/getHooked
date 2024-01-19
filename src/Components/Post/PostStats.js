import { FaImage, FaVideo, FaCamera, FaUserFriends } from "react-icons/fa";
import "./Post.css";

//icons

const PostStats = ({ posts, agent }) => {
  const postCount = posts;
  const images = posts.filter((item) => item.cateogory !== "video");
  const videos = posts.filter((item) => item.cateogory === "video");

  return (
    <header className="post_stats">
      <ul>
        <li>
          <FaCamera size={20} /> {postCount ? postCount.length : 0}
        </li>
        <li>
          <FaImage size={20} />
          {images ? images.length : 0}
        </li>
        <li>
          <FaVideo size={20} /> {videos ? videos.length : 0}
        </li>
        <li>
          <FaUserFriends size={20} />{" "}
          {agent.Connections ? agent.Connections.length : 0}
        </li>
      </ul>
    </header>
  );
};

export default PostStats;
