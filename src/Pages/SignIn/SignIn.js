import Button from "../../Components/Button/Button";
import "./SignIn.css";

//links
import { Link } from "react-router-dom";

//logos/images
import Googlelogo from "../../Resources/google.png";
const SignIn = () => {
  return (
    <div className="sign_in">
      <div className="form">
        <form>
          <h2>Sign in</h2>

          <label> Username </label>
          <input placeholder="Enter username" />
          <label> Password </label>
          <input placeholder="Enter password" />
          <Button  text={"Sign in"} />

          <div className="create"> 
            <p>Do not have an account?</p>
            <Link to={"/pages/sign_up"}>  
            Create new account
            </Link>
           
          </div>

          <div className="options">
            <hr style={{ height: "2px", width: "50%" }} />
            <p> Or </p>
            <hr style={{ height: "2px", width: "50%" }} />
          </div>
          <button className="google_btn">
            {" "}
            <img className="google_img" alt="google" src={Googlelogo} />
            Sign in with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
