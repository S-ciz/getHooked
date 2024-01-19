import { useRef, useState } from "react";
import "./Modal.css";
//icons

import { FaTimes } from "react-icons/fa";

function Modal({ Content }) {
  const modalRef = useRef();

  const [modalState, setModalState] = useState(window.sessionStorage.getItem("global_modal"));

  const toggleModal = () => {
    const modalElement = modalRef.current;
    modalElement.style.display = modalState ? "grid" : "none";
    setModalState(!modalState);
    window.sessionStorage.setItem("global_modal", modalState)
  };
  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      <div ref={modalRef} className="modal_wrapper">
        <div className="modal">
          <header>
            <div> </div>
            <div className="cancel">
              <FaTimes onClick={toggleModal} size={40} />
            </div>
          </header>

          <main className="modal_content">{Content}</main>
        </div>
      </div>
    </>
  );
}

export default Modal;
