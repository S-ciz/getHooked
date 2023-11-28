import "./Welcome.css";

import FistIMG from "../../Resources/fist.jpg";
const Welcome = () => {
  return (
    <main className="welcome">
      <section className="welcome_image">
        <img loading="lazy" alt="fist" src={FistIMG} />
      </section>

      <section className="welcome_text">
        <h2>Welcome</h2>
        <p>
          GetHooked is a cutting-edge online platform passionately dedicated to
          amateur boxing enthusiasts, trainers, and gyms. Our mission is to
          empower the amateur boxing community by providing a seamless and
          innovative platform that fosters connections, facilitates skill
          development, and promotes a sense of unity among aspiring boxers and
          industry professionals. We aim to revolutionize the amateur boxing
          landscape, empowering individuals to explore, grow, and succeed in the
          sport they love.{" "}
        </p>
      </section>
    </main>
  );
};

export default Welcome;
