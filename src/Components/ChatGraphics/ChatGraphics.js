import "./ChatGraphics.css"
import img1 from "../../Resources/agent.jpg"
import img2 from "../../Resources/box.jpg"
import img3 from "../../Resources/boxorigin.jpeg"
import img4 from "../../Resources/dum.jpg"

//icons
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom"

const ChatGraphics = ()=>{
return (
   <div className="chat_graphics"> 
    <header className="cg_header"> 
        <span> {/* for styling */} </span>
        <span className="removeCG"> <Link to="/pages/home2/chats/chat/"><FaTimes color="var(--white)" size={40}/> </Link> </span>
    </header>  

    <main className="cg_graphics"> 
       <section className="cg_card">
        <img alt='cg_graphic' src= {img1}/>
       </section>

       <section className="cg_cards"> 
        
        <span> <img alt="card" src= {img2}/></span>
        <span> <img  alt="card" src= {img1}/></span>
        <span> <img  alt="card" src= {img3}/></span>
        <span> <img  alt="card" src= {img4}/></span>
        <span> <img  alt="card" src= {img2}/></span>
        <span> <img  alt="card" src= {img1}/></span>
        <span> <img  alt="card" src= {img3}/></span>
        <span> <img  alt="card" src= {img4}/></span>

       </section>
    </main>

   </div>
)

}


export default ChatGraphics;