import React, { useRef } from 'react'
import "./PostCard.css"

//icons

import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import img1 from "../../Resources/agent.jpg"
const PostCard = ({title, src, removeCard}) => {

  const cardRef = useRef();


  return (
    <div ref={cardRef} className='postCard'>
      
      <section className='postCard_img'> 
        <div><img src={src[0]} alt='postcardimg'/> </div>
        <div className='content'> <h5>{title}</h5> <p>12:30 feb 2020</p> </div>
      </section>
      <section className='postCard_editors'>
        <span><AiOutlineEdit size="20" color="var(--blue)"/> </span>
        <span onClick={removeCard}> <AiOutlineDelete size="20" color = "red"/> </span>
      </section>
    </div>
  )
}

PostCard.defaultProps = {
  title: " ",
  src: [img1],
  removeCard: ()=>{ console.log('removing card default...')}
}

export default PostCard
