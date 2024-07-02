import React, { useRef, useState, useContext } from "react";
import "./Abilityform.css";

import { FaPlus } from "react-icons/fa";
import { trim } from "../../../UX/Utility";
import Item from "./Item";
import { updateAgentAttributes } from "../../../Pages/SignIn/Api";
import AgentContext from "../../AgentContext";
const Ability = ({ title, ability }) => {
  let {agent, toggleAgent} = useContext(AgentContext);

  let [input, setInput] = useState("");
  // let [ability, setAbility] = useState(list);

  function toggleInput(e) {
    const MAX_CHAR = 15;
    let value = trim(e.target.value);
    if (value.length <= MAX_CHAR) {
      setInput(e.target.value);
    }
  }

  function addItem() {
    let itemExists = ability.find(
      (value) => value.toUpperCase() === input.toUpperCase()
    );
    if (trim(input).length > 0 && !itemExists) {
      toggleAgent({type: 'add'+ title , content: input})
      updateAgentAttributes(agent.email, {
        type: "add" + title,
        content: input,
      });
    }
    setInput("");
  }

  const displayAbility = ability.map((item, key) => (<Item type={"remove" + title} key={key} item={item}/>));
  return (
    <div className="ability">
      <h2 className="ability_title">{title}</h2>
      <main className="ability_main">
        {ability.length > 0 ? displayAbility : " "}
      </main>

      <footer className="ability_footer">
        <section>
          {" "}
          <input
            value={input}
            onInput={toggleInput}
            placeholder="Enter item..."
          />{" "}
        </section>
        <section onClick={addItem} className="add_item">
          {" "}
          <FaPlus color="var(--white)" />{" "}
        </section>
      </footer>
    </div>
  );
};

Ability.defaultProps = {
  title: "title",
  ability: ["hello", "world"],
};

export default Ability;
