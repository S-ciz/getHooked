import "./ChatBubble.css";
//icons
import { FaCheckDouble } from "react-icons/fa";

const Right = ({ time, check_type, text, imageArr }) => {
  const diplayImageArr = imageArr.map((image) => (
    <img alt="source" src={image} />
  ));

  return (
    <div className="bubble_right_wrapper">
      <section> {/* for styling purpose */} </section>
      <section className="chat_bubble_right">
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
    </div>
  );
};

Right.defaultProps = {
  time: "22:30",
  check_type: <FaCheckDouble size={12} />,
  text: "The world is full of lonely people afraid of making the first move. Throw the first punch by starting the conversation! 😑",
  imageArr: [],
};

export default Right;
