import PrimaryCard from "../PrimaryCard/PrimaryCard";
import { truncate } from "../../UX/Utility";
import "./Featuring.css";

//images
import Agent from "../../Resources/profile_lg.jpg";
import punchBag from "../../Resources/gym.jpg";
import filter from "../../Resources/filter.jpg";
import dumbells from "../../Resources/dum.jpg";
import calendar from "../../Resources/cal.jpg";
import community from "../../Resources/community.jpg";

const Featuring = () => {
  const featureArray = [
    {
      id: 1,
      heading: "Personalized Profiles",
      description:
        "Aspiring boxers can create detailed profiles to showcase their skills, achievements, and training videos, connecting with trainers and gyms that match their unique goals.",
      src: Agent,
    },
    {
      id: 2,
      heading: "Trainer + Gym Showcase",
      description:
        "Experienced trainers and esteemed gyms can exhibit their expertise, training methodologies, and facilities to attract and mentor passionate amateur boxers.",
      src: punchBag,
    },
    {
      id: 3,
      heading: "Advanced Filtering",
      description:
        "Our platform incorporates powerful search and filtering options, enabling users to find the perfect boxing match based on specific preferences such as weight class, location, and training style.",
      src: filter,
    },
    {
      id: 4,
      heading: "Training Resources",
      description:
        "Offers a vast repository of training guides, techniques, and tips provided by renowned boxing experts, fostering continuous skill development.",
      src: dumbells,
    },
    {
      id: 5,
      heading: "Amateur Boxing Calendar",
      description:
        "Stay up-to-date with the latest amateur boxing events, including tournaments, sparring sessions, and exhibitions, providing abundant opportunities for boxers to showcase their talents",
      src: calendar,
    },
    {
      id: 6,
      heading: "Community Engagement",
      description:
        "Our vibrant community features discussion forums, private messaging, and social media integration, encouraging a supportive network of amateur boxing enthusiasts, trainers, and gyms.",
      src: community,
    },
  ];

  const maxNumberOfWords = 10;
  const displayFeature = featureArray.map((feature) => (
    <PrimaryCard
      key={feature.id}
      src={feature.src}
      heading={feature.heading}
      description={truncate(feature.description, maxNumberOfWords)}
      full_descr={feature.description}
    />
  ));

  return (
    <div className="featuring">
      <h1>Features</h1>
      <div className="features">{displayFeature}</div>
    </div>
  );
};

export default Featuring;
