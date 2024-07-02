import "./Live.css"
import VidCard from "../VidCard/VidCard"

//icons
import {BiMovie} from "react-icons/bi"
//demo video 
import demoVid from "../../Resources/bag.mp4"
import poster from "../../Resources/boxorigin.jpeg"
const Live = () => {
  return (
    <div className="live_wrapper">
        <section className="live"> 
        <h1> <BiMovie size={30}/> Live   </h1>

          <main> 
            <video poster={poster} controls> 
              <source type="video/mp4" src={demoVid}/>
            </video>
          </main>

          <main className="up_next"> 
          <h1>Up Next </h1>
             <div> 
             <VidCard/>
            <VidCard/>
            <VidCard/>
            <VidCard/>
             </div>
          </main>

    
        </section>
    </div>
  )
}

export default Live
