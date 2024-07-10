import { useRef, useState, useContext } from "react";
import "./Modal.css";
//icons
import ModalContext from "../ModalContext";


import { FaTimes } from "react-icons/fa";

function Modal({ Content }) {
  const contentRef = useRef();


  const {modalState, setModalState} = useContext(ModalContext)

  function removeModal(e) {
    let contentEl = contentRef.current;
    if (e.target.contains(contentEl)) {
      setModalState(false);
    }
  }
  return (
    <>
      <div onClick={removeModal} className="modal_wrapper">
        <div className="modal">
          <header>
            <div> </div>
            <div className="cancel">
              <FaTimes onClick={() => setModalState(false)} size={20} />
            </div>
          </header>

          <main ref={contentRef} className="modal_content">
            {Content}
          </main>
        </div>
      </div>
    </>
  );
}

Modal.defaultProps = {
  Content: <p>Default Props lore dkdkdkdk dkdkdkdk dkdkdkdkdkdkdkd dkdkk </p>,
};

export default Modal;
