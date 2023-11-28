import "./Chat.css";
import ChatBubble from "../ChatBubble/ChatBubble";
import { Link } from "react-router-dom";

//images
import DP from "../../Resources/profile.jpg";

//icons

import { FaArrowLeft } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";

const Chat = () => {
  return (
    <div className="single_chat">
      <header>
        <Link to="/pages/home2/chats">
          <FaArrowLeft size={20} />
        </Link>
        <div className="chat_img">
          <img alt="chatimage" src={DP} />
        </div>
        <div className="chat_credential">
          <h4>The Protector </h4>
          <p> online </p>
        </div>
      </header>

      <main className="chat_field">
        <ChatBubble />
        <ChatBubble position={"chat_bubble_right"} />
        <ChatBubble />
        <ChatBubble position={"chat_bubble_right"} />
        <ChatBubble position={"chat_bubble_right"} />
      </main>

      <footer className="chat_message">
        <div className="chat_emoji">
          <FaSmile size={20} color="yellow" />
          <FaPaperclip size={20} color="brown" />
        </div>

        <div className="chat_input">
          <input placeholder="Enter text..." />
        </div>

        <div className="chat_send">
          {/* <span> <FaPaperclip size={20} color="brown"/></span> */}
          <span>
            {" "}
            <FaPaperPlane size={20} color="var(--white)" />{" "}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
