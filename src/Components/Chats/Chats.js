import "./Chats.css";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

//images

import DP from "../../Resources/profile.jpg";
function Chats() {
  return (
    <div className="chats_wrapper">
      <header>
        <div>
          <h1>Chats</h1>
        </div>
        <div >
        <Input/>
        </div>
      </header>

      <Link to={"/pages/home2/chats/chat"}>
        <div className="chats_chat">
          <div className="chat_first">
            <main className="chat_profile">
              <img loading="lazy" alt="profile" src={DP} />
            </main>

            <main className="chat_content">
              <h3>Paul Jackson</h3>
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
      <Link to={"/pages/home2/chats/chat"}>
        <div className="chats_chat">
          <div className="chat_first">
            <main className="chat_profile">
              <img loading="lazy" alt="profile" src={DP} />
            </main>

            <main className="chat_content">
              <h3>Paul Jackson</h3>
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
      <Link to={"/pages/home2/chats/chat"}>
        <div className="chats_chat">
          <div className="chat_first">
            <main className="chat_profile">
              <img alt="profile" src={DP} />
            </main>

            <main className="chat_content">
              <h3>Paul Jackson</h3>
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
      <Link to={"/pages/home2/chats/chat"}>
        <div className="chats_chat">
          <div className="chat_first">
            <main className="chat_profile">
              <img loading="lazy" alt="profile" src={DP} />
            </main>

            <main className="chat_content">
              <h3>Paul Jackson</h3>
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
    </div>
  );
}

export default Chats;
