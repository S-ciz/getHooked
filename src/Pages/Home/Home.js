import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import PrimaryCard from "../../Components/PrimaryCard/PrimaryCard";
import Showcase from "../../Components/Showcase/Showcase";
import Slider from "../../Components/Slider/Slider";
import Welcome from "../../Components/Welcome/Welcome";
import Quote from "../../Components/Quote/Quote";
import Featuring from "../../Components/Featuring/Featuring";
//get images
import MissionIMG from "../../Resources/mission.png";
import VissionIMG from "../../Resources/vision.png";
import ValuesIMg from "../../Resources/values.jpg";

//utilities
import { truncate } from "../../UX/Utility";

const Home = () => {
  const introcards = [
    {
      id: 1,
      heading: "Vision",
      description:
        "Our vision is to become the premier global platform for amateur boxing, inspiring and supporting amateur boxers worldwide in their pursuit of greatness within the sport. We strive to continually innovate, adapt to evolving industry needs, and maintain our position as a trailblazer in the amateur boxing community.",
      src: VissionIMG,
    },
    {
      id: 2,
      heading: "Mission",
      description:
        "our mission is to empower and unite amateur boxers, trainers, and gyms by offering an all-encompassing platform that serves as a hub for networking, learning, and collaboration. We are committed to providing valuable resources, personalized training opportunities, and a supportive community, all designed to help amateur boxers reach their full potential and thrive within the sport.",
      src: MissionIMG,
    },
    {
      id: 3,
      heading: "Values",
      description:
        "We empower amateur boxers to take charge of their boxing journey by providing the necessary tools and connections to excel in the sport. We embrace diversity and inclusivity, welcoming all aspiring boxers regardless of their background or skill level. We operate with transparency, trust, and ethical practices, maintaining utmost integrity in our interactions with users, trainers, and gyms. Our team is fueled by a shared passion for boxing, which drives our commitment to elevating the amateur boxing experience.",
      src: ValuesIMg,
    },
  ];

  const maxNumberOfWords = 10;
  const outputCards = introcards.map((card) => (
    <PrimaryCard
      color={"#318CE7"}
      key={card.id}
      heading={card.heading}
      description={truncate(card.description, maxNumberOfWords)}
      src={card.src}
    />
  ));

  return (
    <>
      <Navbar />
      <Showcase />
      <Slider />
      <Welcome />

      <div className="intro_cards">{outputCards}</div>
      <Featuring />
      <Quote />
    </>
  );
};

export default Home;
