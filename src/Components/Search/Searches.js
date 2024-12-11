import "./Search.css";
import Input from "../Input/Input";
import { getAgents } from "../../Pages/SignIn/Api";
import { Link } from "react-router-dom";

import Search from "./Search";
import { useEffect, useState, useRef } from "react";
const Searches = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents().then((data) => {
      data = Object.values(data);
      const currentAgent = window.sessionStorage.getItem("agent");
      setAgents(data.filter((agent) => agent.email !== currentAgent));
    });
  }, []);

  const displayAgents = agents.map((item) => (
    <Link onClick={()=> window.sessionStorage.setItem("currentSearch", item.email) } key={item.email} to={"/pages/home2/search/search_item"}>
      <Search item={item} />
    </Link>
  ));

  const agentListRef = useRef();

  const toggleInput = (e) => {
    const txtValue = e.target.value.toUpperCase();
    const agentList = agentListRef.current.children;
    if (agents.length > 0) {
      for (let i = 0; i < agentList.length; i++) {
        const agentName = agentList[i]
          .querySelector("h4")
          .textContent.toUpperCase();
        if (agentName.indexOf(txtValue) !== -1) {
          agentList[i].style.display = "grid";
        } else {
          agentList[i].style.display = "none";
        }
      }
    }
  };

  return (
    <div className="search_wrapper">
      <div className="search_content">
        <header>
          <div>
            <h1 style={{ color: "var(--grey_secondary)" }}>Search</h1>
          </div>
          <div className="search_input">
            <Input toggleInput={toggleInput} />
          </div>
        </header>

        <main className="myAgents" ref={agentListRef}>{displayAgents}</main>
      </div>
    </div>
  );
};

export default Searches;
