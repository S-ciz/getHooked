import "./Showcase.css";

//icons
import { FaUser, FaComment } from "react-icons/fa";

//images for defaultProps
import DP from "../../Resources/agent.jpg"

//class
const Showcase = ({agent}) => {
  return (
    <div className="boxer_showcase">
      <div  className="vid_showcase">
        <img className="showcase_img" loading="lazy" alt="agent" src={agent.profileImage}/>
      </div>
      <div className="content_showcase">
        <h4 className="sc_intro">{agent.name}  <span className="active">{agent.surname} </span> </h4>
        <p>
        {agent.aboutUser}
        </p>
        <div className="buttons">
        <button> <FaUser size={20}/> Connect</button>
        <button><FaComment size={20}/> Message</button>
        </div>
      </div>
    </div>
  );
};

Showcase.defaultProps = 
{
  agent: {
    name: "agentName",
    surname: "agentSurname",
    aboutUser: "about agent",
    profileImage: DP
  }
}
export default Showcase;
