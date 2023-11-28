import "./VidCard.css"

import boxer1 from "../../Resources/agent.jpg"
import playLogo from  "../../Resources/play.png"

const VidCard = ({src})=>{

    return(

        <div className="vid_card"> 
           <h3>Card</h3>
           <img loading="lazy" alt="boxer" className="poster" src={src}/>

           <img alt="play" className="play" src= {playLogo}/>
        </div>
    )
}

VidCard.defaultProps = 
{
    src: boxer1
}

export default VidCard;