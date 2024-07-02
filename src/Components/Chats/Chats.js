import "./Chats.css";
import { Link } from "react-router-dom";
import { getConnections, unreadMsg } from "./Api";
import Input from "../Input/Input";
import { useEffect, useState, useRef } from "react";
import { updateAgentAttributes } from "../../Pages/SignIn/Api";

//Chats
function Chats() {
  const [myChats, setChats] = useState([]);
  const [msgNotRead, setMsgNotRead] = useState([]);

  useEffect(() => {
    getConnections().then((data) => {
      setChats(data);
    });

    unreadMsg().then((data) => {
      setMsgNotRead(data);
    });
  }, []);

  let displayChats = null;
  try {
    displayChats = myChats.map((item, index) => (
      <Link
        onClick={() => {
          window.sessionStorage.setItem("currentChat", item.email);
          // mark all msg as read
          let unread = msgNotRead[index].msgList;
          for (let msg of unread) {
            let chatId = msg.id;
            updateAgentAttributes(item.email, {
              type: "MessagesRead",
              content: chatId,
            });
          }
        }}
        id={item.email}
        key={item.email}
        to={"/pages/home2/chats/chat"}
      >
        <div className="chats_chat">
          <div className="chat_first">
            <main className="chat_profile">
              <img loading="lazy" alt="profile" src={item.profileImage} />
            </main>
            <main className="chat_content">
              <h3>
                {item.name} {item.surname}
              </h3>
              <p>
                {msgNotRead[index].msgList.length > 0
                  ? msgNotRead[index].msgList[0].message
                  : ""}{" "}
              </p>
            </main>
          </div>
          <div className="chat_additionals">
            {msgNotRead[index].msgList.length > 0 ? (
              <aside>
                <span className="alert_msg">
                  {" "}
                  {msgNotRead[index].msgList.length}{" "}
                </span>
              </aside>
            ) : (
              ""
            )}

            <aside>
              <p>{item.status}</p>
            </aside>
          </div>
        </div>
      </Link>
    ));
  } catch (err) {
    console.log(err);
  }

  let chatsRef = useRef();

  function toggleChats(e) {
    let chatsElement = chatsRef.current;
    if (myChats.length > 0) {
      let InputTxt = e.target.value.toUpperCase();
      let chatsList = chatsElement.children;
      for (let i = 0; i < chatsList.length; i++) {
        const userName = chatsList[i]
          .querySelector("h3")
          .textContent.toUpperCase();

        if (userName.indexOf(InputTxt) !== -1) {
          chatsList[i].style.display = "grid";
        } else {
          chatsList[i].style.display = "none";
        }
      }
    }
  }

  return (
    <div className="chats_wrapper">
      <header>
        <div>
          <h1>Chats</h1>
        </div>
        <div>
          <Input toggleInput={toggleChats} />
        </div>
      </header>

      <main ref={chatsRef} className="my_chats">
        {myChats ? displayChats : " "}
      </main>
    </div>
  );
}

export default Chats;
