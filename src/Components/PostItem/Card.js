import "./PostItem.css"

//imags
import Image from "../../Resources/box.jpg"
const Card = ({src, text}) => {
  return (
    <div className='post_card'>
      <div className='post_card_img'>
        <img loading='lazy' alt='post_card_img' src={src}/>
         </div>
         <div>
            {text} 
            <br/>
            <span style={{color: "black", fontSize:"12px"}}> 12 Jan 2023, 12:30 </span>
         </div>
      <div> 

      </div>
    </div>
  )
}

Card.defaultProps =
{
    src: Image, 
    text: "default comments"
}

export default Card
