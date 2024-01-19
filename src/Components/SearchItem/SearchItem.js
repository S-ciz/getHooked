import "./SearchItem.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import Showcase from "../../BoxerComponent/Showcase/Showcase";
import Records from "../../BoxerComponent/Records/Records";
import Dropdown from "../Dropdown/Dropdown";
import PostStats from "../Post/PostStats";
import { getAgent } from "../../Pages/SignIn/Api";

//images

//icons
import { FaArrowLeft } from "react-icons/fa";

//class
const SearchItem = () => {
  const [agent, setAgent] = useState({});
  const [records, setRecords] = useState({});
  const [myposts, setMyPost] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchivements] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    let email = window.sessionStorage.getItem("currentSearch");
    getAgent(email).then((data) => {
      setAgent(data);
      setMyPost(data.PostsArray);
      setRecords(data.Profile);
      setSkills(data.Profile.skills);
      setAchivements(data.Profile.archievements);
      setGoals(data.Profile.goals);
    });
  }, []);

  const defaultRecords = {
    Records: "",
    Height: " ",
    Gender: " ",
    KO: "",
    Age: "",
    Weight: "",
  };

  //default values
  const skills_def = [
    "Straight Punches",
    "uppercuts",
    "hooks",
    "rolls",
    "steps",
    "perry",
    "slips",
    "ducks",
  ];
  const achievements_def = ["Golden Gloves", "championships"];

  const goals_def = ["Sneak jabs", "Fitness", "stamina", "Turn pro"];

  const displayPosts = myposts.map((post, key) => (
    <Post
      key={key}
      category={post.category}
      comments={post.comments}
      timeStamp={post.timeStamp}
      text={post.text}
      commentsArr={post.commentsArr}
      likes={post.likes}
      src={post.src}
    />
  ));

  return (
    <div className="search_item_wrapper">
      <div className="search_item_content">
        <header>
          <Link to={"/pages/home2/search"}>
            <span>
              {" "}
              <FaArrowLeft
                color="var(--grey_primary)"
                fontSize={20}
              /> Search{" "}
            </span>
          </Link>
        </header>
        <Showcase agent={agent} />
        <PostStats agent={agent} posts={myposts} />
        <hr style={{ width: "90%", margin: "auto" }} />
        <section className="posts">
          {myposts.length > 0 ? displayPosts : " "}
        </section>
        <hr style={{ width: "90%", margin: "auto", marginTop: "1rem" }} />
        <Records records={records ? records : defaultRecords} />
        <Dropdown title="Skills" list={skills ? skills : skills_def} />
        <Dropdown
          title="Achievements"
          list={achievements ? achievements : achievements_def}
        />
        <Dropdown title="Goals" list={goals ? goals : goals_def} />
        <br />
      </div>
    </div>
  );
};

export default SearchItem;
