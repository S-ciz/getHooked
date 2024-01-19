import "./ChatBubble.css";
//icons
import { FaCheckDouble } from "react-icons/fa";

const Left = ({ time, check_type, text, imageArr }) => {
  const diplayImageArr = imageArr.map((image) => (
    <img alt="source" src={image} />
  ));
  
  return (
    <div className="bubble_left_wrapper">
      <section className="chat_bubble_left">
        <section className="msg_content">
          <div className="attachments">
            {imageArr.length > 0 ? diplayImageArr : " "}
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
