import { updateAgentAttributes } from "../../../Pages/SignIn/Api"
import "./Abilityform.css"
import { FaTimes } from "react-icons/fa"
import AgentContext from "../../AgentContext"
import { useContext, useRef } from "react"

const Item = ({type, item}) => {

  const itemRef = useRef();
    let {agent} = useContext(AgentContext)
    function removeItem()
    {
         updateAgentAttributes(agent.email, {type, content: item});
         let itemEl = itemRef.current;
         itemEl.style.display = 'none'    
    }
  return (
    <div ref={itemRef} className="item">
        <span> {item} </span>
      <aside  onClick={removeItem}>
        <FaTimes color="var(--grey_tertiary)" />
      </aside>
    </div>
  )
}

export default Item
