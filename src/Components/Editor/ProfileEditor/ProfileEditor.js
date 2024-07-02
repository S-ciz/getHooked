import React, { useEffect, useState } from "react";
import "./ProfileEditor.css";

import { getCurrentAgent , updateAgentAttributes} from "../../../Pages/SignIn/Api";

import AgentContext from "../../AgentContext";

// ui components
import DetailsEditor from "../DetailsEditor/DetailsEditor";
import Abilityform from "../Abilityform/Abilityform";
import PostCards from "../../PostCard/PostCards";

const ProfileEditor = () => {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    getCurrentAgent().then((res) => {
      setAgent(res);
    });
  }, []);

  function toggleAgent(action) {
    switch (action.type) {
      case "name": {
        agent.name = action.content;
        updateAgentAttributes(agent.email, { type: "name", content: action.content });
        break;
      }
      case "surname": {
        agent.surname = action.content;
        updateAgentAttributes(agent.email, { type: "surname", content: action.content });
        break;
      }
      case "about": {
        agent.aboutUser = action.content;
        updateAgentAttributes(agent.email, { type: "aboutUser", content: action.content });
        break;
      }
      case "addAchievement": {
        agent.Profile.achievements.push(action.content);
        break;
      }
      case "addGoal": {
        agent.Profile.goals.push(action.content);
        break;
      }
      case "addSkill": {
        agent.Profile.skills.push(action.content);
        break;
      }
      default: {
        ///
      }
    }
  }

  return (
    <AgentContext.Provider value={{ agent, toggleAgent }}>
      <div className="profileEditor">
        <div className="details_container">
          {" "}
          <DetailsEditor />
        </div>
        <div className="abilityForm_container">
          {" "}
          <Abilityform />
        </div>
        <div className="postCards_container">
          {" "}
          <PostCards />{" "}
        </div>
      </div>
    </AgentContext.Provider>
  );
};

export default ProfileEditor;
