import "./ChatBubble.css"

const ChatBubble = ({position}) => {
  return (
    <div className={position}>
    <div className="chat_speech"></div>
    <p>this is the message frome me to you....</p>
  </div>
  )
}

ChatBubble.defaultProps = 
{
    position: "chat_bubble_left"
}

export default ChatBubble
