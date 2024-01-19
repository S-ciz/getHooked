import "./Records.css";

import {
  FaMedal,
  FaRuler,
  FaDumbbell,
  FaCloudscale,
  FaUserCircle,
  FaBalanceScale,
} from "react-icons/fa";
const Records = ({records}) => {
  return (
    <div className="records">
      <div className="records_first">
        <div>
          <FaMedal color="var(--blue)" size={30} />
          <h3>Record</h3>
          <span> {records.Records} </span>
        </div>
        <div>
          <FaRuler color="brown" size={30} />
          <h3>Height</h3>
          <span> {records.Height} </span>
        </div>

        <div>
          <FaUserCircle color="teal" size={30} />
          <h3>Gender</h3>
          <span> {records.Gender} </span>
        </div>

        <div>
          <FaCloudscale color="var(--bright_red" size={30} />
          <h3> KO </h3>
          <span> {records.KO}</span>
        </div>

        <div>
          <FaBalanceScale color="violet" size={30} />
          <h3> Age </h3>
          <span> {records.Age} </span>
        </div>

        <div>
          <FaDumbbell color="grey" size={30} />
          <h3> Weight </h3>
          <span> {records.Weight}kg</span>
        </div>
      </div>

      <div className="records_sec">
        <button> Read more </button>
      </div>
     
      <div className="agent_img">{/* for background sytling */}</div>
      <div className="agent2_img">{/* for background sytling */}</div>
    </div>
  );
};

export default Records;
