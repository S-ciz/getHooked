import "./Boxer.css";

import CardPrimary from "../../BoxerComponent/CardPrimary/CardPrimary";
import Showcase from "../../BoxerComponent/Showcase/Showcase";
import Records from "../../BoxerComponent/Records/Records";
import Slider from "../../Components/Slider/Slider";
import Quote from "../../Components/Quote/Quote";

const Boxer = () => {
  return (
    <div className="page_boxer">
      <CardPrimary />
      <Showcase />
      <Records />
      <Slider />
      <br /> <br />
      <br />
      <br />
      <br />
      <Quote />
    </div>
  );
};

export default Boxer;
