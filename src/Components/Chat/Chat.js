import "./Chat.css";
import Left from "../ChatBubble/Left";
import Right from "../ChatBubble/Right";
import {
  getCurrentTime,
  getMessageListForCurrentChat,
  postMessage,
} from "./Api";
import {
  getAgent,
  updateAgentOnlineStatus,
  updateAgentAttributes,
} from "../../Pages/SignIn/Api";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
//emoji picker
import EmojiPicker from "emoji-picker-react";
//images
// import DP from "../../Resources/profile.jpg";
//icons
import {
  FaCheck,
  FaCheckDouble,
  FaArrowLeft,
  FaPaperPlane,
  FaSmile,
  FaImage,
} from "react-icons/fa";

import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

const myChat_id = window.sessionStorage.getItem("agent");
// const currentChat_id = window.sessionStorage.getItem("currentChat");
socket.emit("active", myChat_id);

const Chat = () => {
  const [mychat, setMyChat] = useState({});
  const [chatMessages, setChatMessage] = useState([]);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [currentChat_id] = useState(
    window.sessionStorage.getItem("currentChat")
  );

  socket.on("sendMessage", (objmsg) => {
    setChatMessage([...chatMessages, objmsg]);
  });

  useEffect(() => {
    //set my chat data
    getAgent(currentChat_id).then((data) => {
      setMyChat(data);
    });

    //initial call to load chats
    getMessageListForCurrentChat().then((data) => {
      setChatMessage(data);
    });
  }, []);
  let [inputValue, setInputValue] = useState("");

  function getCheck(IsMessageRead) {
    return IsMessageRead === true ? (
      <FaCheckDouble size={12} />
    ) : (
      <FaCheck size={12} />
    );
  }

  function getMessageType(objMsg) {
    if (objMsg.from === myChat_id) {
      return (
        <Right
          key={objMsg.id}
          time={objMsg.time_stamp}
          imageArr={objMsg.imgArr}
          text={objMsg.message}
          check_type={getCheck(objMsg.delivered)}
        />
      );
    } else {
      return (
        <Left
          key={objMsg.id}
          time={objMsg.time_stamp}
          imageArr={objMsg.imgArr}
          text={objMsg.message}
          check_type={getCheck(objMsg.delivered)}
        />
      );
    }
  }

  const displayMessages = chatMessages.map((mychat) => getMessageType(mychat));
  const imageRef = useRef();

  function displayChatImage(file) {
    const articleElement = imageRef.current;
    const imageElement = document.createElement("img");
    imageElement.src = URL.createObjectURL(file);
    imageElement.className = "fileimage";
    imageElement.alt = "chat_img";
    articleElement.appendChild(imageElement);
  }
  function sendMessage(messageText, imgArr) {
    setEmojiPicker(false);
    let msgObj = {
      id: chatMessages.length + 1,
      from: myChat_id,
      to: currentChat_id,
      message: messageText,
      time_stamp: getCurrentTime(),
      read: false,
      imgArr: imgArr,
    };

    if (
      messageText.trim().length > 0 ||
      imageRef.current.firstElementChild !== null
    ) {
      setChatMessage([...chatMessages, msgObj]);
      postMessage(msgObj);
      socket.emit("sendMessage", msgObj);
    }
  }

  async function listenForFileSelection(e) {
    setEmojiPicker(false);
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      displayChatImage(files[i]);
    }
  }

  function toggleInput(e) {
    setEmojiPicker(false);
    setInputValue(e.target.value);
    //I want to update status functionality to typing
  }

  function getImageArr() {
    let imgArr = [];
    const imageElement = imageRef.current;
    let imgList = imageElement.querySelectorAll("img");
    imgList.forEach((img) => {
      imgArr.push(img.src);
    });
    return imgArr;
  }

  const inputRef = useRef();

  function toggleEmoji(emoji) {
    const inputElement = inputRef.current;
    setInputValue(inputElement.value + emoji.emoji);
  }

  function submitMessage(e) {
    e.preventDefault();
    setEmojiPicker(false);
    sendMessage(inputValue, getImageArr());
    imageRef.current.innerHTML = "";
    setInputValue("");

    //update status functionality back to online
    updateAgentOnlineStatus("online");
  }

  function clearEmojiPicker(e) {
    const emojiWrapper = document.querySelector("aside.emojiPicker");
    const emojibox = emojiWrapper.querySelector(".epr_q53mwh");
    console.log(emojibox);
    if (!emojibox.contains(e.target)) {
      setEmojiPicker(false);
    }
  }

  return (
    <div onClick={clearEmojiPicker} className="single_chat">
      <header>
        <Link to="/pages/home2/chats">
          <FaArrowLeft size={20} />
        </Link>
        <div className="chat_img">
          <img className="chat_img" alt="chatimage" src={mychat.profileImage} />
        </div>
        <div className="chat_credential">
          <h4> {mychat.name + " " + mychat.surname} </h4>
          <p> {mychat.status} </p>
        </div>
      </header>
      <main className="chat_field">
        {chatMessages.length > 0 ? displayMessages : <Right />}
      </main>
      {emojiPicker ? (
        <aside className="emojiPicker">
          <EmojiPicker onEmojiClick={toggleEmoji} />
        </aside>
      ) : (
        " "
      )}
      <article class="article" ref={imageRef}></article>
      <form onSubmit={submitMessage} className="chat_message">
        <div className="chat_emoji">
          <span className="iconEmoji">
            <FaSmile
              onClick={() => setEmojiPicker(!emojiPicker)}
              size={20}
              color="yellow"
            />
          </span>
          <span className="file">
            <FaImage size={20} color="brown" />

            <div className="file_input">
              <form encType="multipart/form-data">
                <input
                  multiple={true}
                  onChange={listenForFileSelection}
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                />
              </form>
            </div>
          </span>
        </div>

        <div className="chat_input">
          <input
            ref={inputRef}
            onInput={toggleInput}
            value={inputValue}
            placeholder="Enter text..."
          />
        </div>

        <div className="chat_send">
          {/* <span> <FaPaperclip size={20} color="brown"/></span> */}
          <span className="arrow">
            <FaPaperPlane
              onClick={submitMessage}
              size={20}
              color="var(--white)"
            />{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Chat;
