import "./PostCard.css"
import PostCard from './PostCard'

import Postform from "../Postform/Postform"
import AgentContext from "../AgentContext"
import { useContext } from "react"
const PostCards = () => {

  const {agent, toggleAgent} = useContext(AgentContext);
  return (
    <div className='postCards_wrapper'>
         
         <h2 className="postCards_title">My Posts</h2>
      <div className="postCards"> 

      <section className="post_edit"> 
     <Postform />
     </section>
     <section className="pc_cards"> 
      {agent ? agent.PostsArray.map((item, key)=> (<PostCard key={key} title={item.text} />)) : " "}
     </section>
   

     </div>
    </div>
  )
}

export default PostCards
