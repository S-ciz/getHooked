import "./PrimaryCard.css";
import MissionIMG from "../../Resources/mission.png";
import { useContext } from "react";

import ModalContext from "../ModalContext";

const PrimaryCard = ({ heading, src, color, description, full_descr }) => {
  const { setModalState,  setModalContent } =
    useContext(ModalContext);

  function toggleModal() {
    let output = <div className="modal_card_results"> 
         <h3 className="title"> {heading} </h3>
         <p> {full_descr} </p>
    </div>
    setModalContent(output);
    setModalState(true);
  }
  return (
    <>
      <div className="primary_card">
        <section className="pc_image">
          <img loading="lazy" alt="mission" src={src} />
        </section>

        <section className="pc_content">
          <h3>{heading}</h3>
          <p>{description}</p>
          <button
            onClick={toggleModal}
            style={{ background: color }}
            className="pc_btn"
          >
            Read More
          </button>
        </section>
      </div>
    </>
  );
};

PrimaryCard.defaultProps = {
  heading: "Heading",
  src: MissionIMG,
  description: '',
  full_descr: '',
  color: "var(--bright_red)",
};

export default PrimaryCard;
