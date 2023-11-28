import "./PrimaryCard.css"
import MissionIMG from "../../Resources/mission.png"

const PrimaryCard = ({heading, description, src, color}) => {
  return (
    <div className="primary_card">

        <section className="pc_image">
            <img loading="lazy" alt="mission" src={src}/>
        </section>

        <section className="pc_content"> 
           <h3>{heading}</h3>
           <p>{description}</p>
           <button style={{background:color}} className="pc_btn">Read More</button>
        </section>
      
    </div>
  )
}

PrimaryCard.defaultProps = 
{
    heading: "Heading",
    src: MissionIMG,
    color: "var(--bright_red)"
    
}

export default PrimaryCard
