import "./Slider.css";
import VidCard from "../VidCard/VidCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


//images

import profile from "../../Resources/profile_lg.jpg"
import faces from "../../Resources/faces.jpg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Slider = () => {
  return (
    <div className="slider">
        <h1 className="slider_header">Latest</h1>
      <Carousel responsive={responsive}>


        <div>
          <VidCard />
          <h5 className="title">some text</h5>
        </div>
        <div>
          <VidCard src={profile} />
          <h5 className="title">some text</h5>
        </div>
        <div>
          <VidCard src={faces} />
          <h5 className="title">some text</h5>
        </div>
        <div>
          <VidCard />
          <h5 className="title">some text</h5>
        </div>
       
      </Carousel>
    </div>
  );
};

export default Slider;
