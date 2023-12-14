import "./Showcase.css"

//images
import Play from "../../Resources/play.png"
const Showcase = () => {
  return (
    <div className='boxer_showcase'>
      
      <div className="vid_showcase"> 
       
      <img alt="play" src= {Play}/>

      </div>

      <div className="content_showcase"> 
        
        <h4 className="sc_intro">Introduction</h4>
        <p> This is some paragraph for the introduction to the  things that hve been taking place in the lives of the fellow boxers. A demo text that can be ignored for now, but later on replaced with some actual content</p>
        <ul>
            <li> <a href="#nix">#PersonalWebsite</a> </li>
            <li> <a href="#nix">#Bio</a> </li>
            <li> <a href="#nix">#Content_Creation</a> </li>
        </ul>

      </div>
    </div>
  )
}

export default Showcase
