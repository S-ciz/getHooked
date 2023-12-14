import "./Chat.css";
import ChatBubble from "../ChatBubble/ChatBubble";
import { Link } from "react-router-dom";

//images
import DP from "../../Resources/profile.jpg";
//icons
import {
  FaCheck,
  FaCheckDouble,
  FaArrowLeft,
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
} from "react-icons/fa";

const Chat = () => {
  //hard coded messges
  const myChat_id = "993343";
  const chatMessages = [
    {
      id: 0,
      sender_id: "33423",
      receiver_id: "993343",
      message: "Hi stan, how do you do?",
      time_stamp: "12:05",
      read: false,
      delivered: true,
    },
    {
      id: 1,
      sender_id: "993343",
      receiver_id: "33423",
      message: "Sup fam, I am good and yourself? it's been forever coach!",
      time_stamp: "13:05",
      read: false,
    },
    {
      id: 2,
      sender_id: "993343",
      receiver_id: "33423",
      message: "when does the gym open",
      time_stamp: "14:05",
      read: false,
    },
    {
      id: 3,
      sender_id: "33423",
      receiver_id: "993343",
      message: "It opens next year in jan, I hope you are well prepared",
      time_stamp: "14:45",
      read: false,
    },
    {
      id: 4,
      sender_id: "993343",
      receiver_id: "33423",
      message: "I will be!!!!",
      time_stamp: "14:55",
      read: false,
    },
  ];
  
  //this returns the chat_bubble class 
  function formatMessage(messageSenderID) {
    return messageSenderID === myChat_id
      ? "chat_bubble chat_bubble_right"
      : "chat_bubble chat_bubble_left";
  }
  
  function getCheck(IsMessageRead) {
    return IsMessageRead === true ? (
      <FaCheckDouble size={12} />
    ) : (
      <FaCheck size={12} />
    );
  }

  const myMessages = chatMessages.map((mychat) => (
    <ChatBubble
      key={mychat.id}
      time={mychat.time_stamp}
      check_type={getCheck(mychat.delivered)}
      bubble_class_name={formatMessage(mychat.sender_id)}
      text={mychat.message}
    />
  ));
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

      <main className="chat_field">{myMessages}</main>

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
