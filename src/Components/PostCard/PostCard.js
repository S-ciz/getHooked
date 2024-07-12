import React from 'react'
import "./PostCard.css"

//icons

import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import img1 from "../../Resources/agent.jpg"
const PostCard = ({title, src}) => {
  return (
    <div className='postCard'>
      
      <section className='postCard_img'> 
        <div><img src={src[0]} alt='postcardimg'/> </div>
        <div className='content'> <h5>{title}</h5> <p>12:30 feb 2020</p> </div>
      </section>
      <section className='postCard_editors'>
        <span><AiOutlineEdit size="20" color="var(--blue)"/> </span>
        <span> <AiOutlineDelete size="20" color = "red"/> </span>
      </section>
    </div>
  )
}

PostCard.defaultProps = {
  title: "title"
}

export default PostCard
