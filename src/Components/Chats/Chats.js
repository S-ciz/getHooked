import "./Chats.css";
import { Link } from "react-router-dom";
import { getConnections } from "./Api";
import Input from "../Input/Input";
import { useEffect, useState, useRef } from "react";

//Chats
function Chats() {
  const [myChats, setChats] = useState([]);

  useEffect(() => {
    getConnections().then((data) => {
      setChats(data);
    });
  }, []);

  let displayChats = null;
  try {
    displayChats = myChats.map((item) => (
      <Link
        onClick={() => {
          window.sessionStorage.setItem("currentChat", item.email);
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
              <p>This is the last message from me amigo...</p>
            </main>
          </div>

          <div className="chat_additionals">
            <aside>
              <span className="alert_msg"> 3</span>
            </aside>
            <aside>
              <p>2 days ago</p>
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
        {myChats.length > 0 ? displayChats : ""}
      </main>
    </div>
  );
}

export default Chats;
