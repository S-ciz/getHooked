import "./ChatBubble.css"

//icons
import { FaCheckDouble } from "react-icons/fa"

const ChatBubble = ({bubble_class_name, time, check_type, text}) => {
  return (
    <div className="chat_bubble_wrapper"> 
     <div className={bubble_class_name}> 
     <section className="msg_content"> 
       <div> <p>{text}</p> </div>

       <div className="attachments"> 
         {/* for later implementation */}
       </div>
       <div className="chat_additions">
        <aside> {/* empty for stying purpose */} </aside>
         <aside> 
         <span>{time}</span> 
         <span> {check_type} </span> 
         </aside>

       </div>
     </section>
     </div>
    </div>
   
  )
}
ChatBubble.defaultProps = 
{
  bubble_class_name: "chat_bubble chat_bubble_right",
  time: "22:30",
  check_type: <FaCheckDouble size={12}/>,
  text: "message sent"
}



export default ChatBubble
