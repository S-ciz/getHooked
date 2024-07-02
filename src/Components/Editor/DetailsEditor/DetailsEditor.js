import "./DetailsEditor.css";

import img1 from "../../../Resources/agent.jpg";
import {
  updateAgentAttributes,
} from "../../../Pages/SignIn/Api";
import AgentContext from "../../AgentContext";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useState, useContext} from "react";
import { trim } from "../../../UX/Utility";


const DetailsEditor = () => {
  const {agent, toggleAgent} = useContext(AgentContext);
  

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [about, setAbout] = useState("");

  function toggleName(e) {
    setName(e.target.value);
  }
  function toggleSurname(e) {
    setSurname(e.target.value);
  }
  function toggleAbout(e) {
    setAbout(e.target.value);
  }

  function updateDetails() {
    if (trim(name).length > 0) {
        toggleAgent({type: 'name', content: name})
      
    }
    if (trim(surname).length > 0) {
      toggleAgent({type: 'surname', content: surname})
     
    }
    if (trim(about).length > 0) {
      toggleAgent({type: 'about', content: about})
    }

    setAbout("");
    setName("");
    setSurname("");
  }

  const editPanel = (
    <div className="edit_img">
      <span className="edit">
        {" "}
        <AiOutlineEdit color="var(--blue)" /> <p>Edit </p>
      </span>
      <span className="remove">
        {" "}
        <AiOutlineDelete color="red" /> <p>Remove</p>
      </span>
    </div>
  );

  return (
    
      <div className="details_editor">
        <main className="de_main">
          <section className="de_image">
            <div className="img">
              <img
                onClick={() => setEdit(!edit)}
                src={agent ? agent.profileImage : img1}
                alt="profile"
              />
            </div>
            {edit ? editPanel : " "}
          </section>
          <section className="de_inputs">
            <h2 className="header">
              Profile{" "}
              <span>
                {" "}
                <AiOutlineEdit />
              </span>{" "}
            </h2>
            <label>Name { `(${agent? agent.name : ''})`} </label>
            <textarea value={name} onInput={toggleName} />
            <label>Surname {`(${agent? agent.surname : ''})`}</label>
            <textarea value={surname} onInput={toggleSurname} />
            <label>About {`(${agent? agent.aboutUser : ''})`}</label>
            <textarea value={about} onInput={toggleAbout} />
          </section>
        </main>
        <footer>
          {" "}
          <button onClick={updateDetails} className="de_btn">
            Save changes
          </button>{" "}
        </footer>
      </div>
  
  );
};

export default DetailsEditor;
