import "./Records.css";

const Records = () => {
  return (
    <div className="records"> 
      <div className="records_first">
        <div>
          <h3>Record</h3>
          <span> 17-02-03 </span>
        </div>
        <div>
          <h3>Height</h3>
          <span> 173 </span>
        </div>

        <div>
          <h3>Gender</h3>
          <span> Male </span>
        </div>

        <div>
          <h3> KO </h3>
          <span> 23</span>
        </div>

        <div>
          <h3> Age </h3>
          <span> 23</span>
        </div>

        <div>
          <h1 className="active">John</h1>
          <h1> Masamba </h1>
        </div>

        <div>
          <h3> Weight </h3>
          <span> 67</span>
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
