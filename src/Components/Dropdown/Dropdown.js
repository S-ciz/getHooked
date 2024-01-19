import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRef, useState } from "react";

import "./Dropdown.css";

const Dropdown = ({ list, title }) => {
  let DisplayList = list.map((item, key) => <li key={key}> {item} </li>);

  const listRef = useRef();
  const [toggleList, setToggleList] = useState(false);

  function toggleChevron() {
    let listElement = listRef.current;
    if (toggleList) {
      listElement.id = "";
      listElement.style.display = "grid";
    } else {
         //id for styling purpose
      listElement.id = "closeList";
      
    }
    setToggleList(!toggleList);
  }

  function getChevron() {
    return toggleList ? (
      <FaChevronDown color="grey" size={20} />
    ) : (
      <FaChevronUp color="grey" size={20} />
    );
  }
  return (
    <section className="dropdown">
      <div onClick={toggleChevron} className="dropdown_card">
        <aside>
          <h1>{title}</h1>
        </aside>
        <aside className="chevron">{getChevron()}</aside>
      </div>

      <main ref={listRef} className="dropdown_children">
        <ul>{DisplayList}</ul>
      </main>
    </section>
  );
};

export default Dropdown;
