import "./CardPrimary.css";

//images
import IMG from "../../Resources/face.jpg";
const CardPrimary = () => {
  return (
    <div className="card_primary">
      <div className="cp_inner_card">
        <div className="cp_img">
          <img alt="main wallpaper" src={IMG} />
        </div>
        <div className="cp_text">
          <h3> Daniel Chidozi </h3>
          <span> (17 yrs old, blue) </span>
        </div>
        
      </div>

      <div className="cp_opacity"> 
         {/* for background opacity only */}
        </div>
    </div>
  );
};

export default CardPrimary;
