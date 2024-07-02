import "./ChatBubble.css";

import { Link } from "react-router-dom";
//icons
import { FaCheckDouble } from "react-icons/fa";

const Left = ({ time, check_type, text, imageArr }) => {
  const diplayImages = imageArr.map((image) => (
    <Link to="/pages/home2/chats/chat/graphics"> <img alt="source" src={image} /> </Link>
  ));
  
  return (
    <div className="bubble_left_wrapper">
      <section className="chat_bubble_left">
        <section className="msg_content">
          <div className="attachments">
            {imageArr.length > 0 ? diplayImages : " "}
          </div>
          <div>
            <p>{text}</p>
          </div>
          <div className="chat_additions">
            <aside> {/* empty for stying purpose */} </aside>
            <aside>
              <span>{time}</span>
              <span> {check_type} </span>
            </aside>
          </div>
        </section>
      </section>
      <section> {/* for styling purpose */} </section>
    </div>
  );
};

Left.defaultProps = {
  time: "22:30",
  check_type: <FaCheckDouble size={12} />,
  text: "message sent in on the left is indeed perfect on it's very own",
  imageArr: [],
};

export default Left;
