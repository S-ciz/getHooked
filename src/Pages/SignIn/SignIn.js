import Button from "../../Components/Button/Button";
import "./SignIn.css";
import { ValidateAgent } from "./Api";

//links
import { Link } from "react-router-dom";

//logos/images
import Googlelogo from "../../Resources/google.png";


import { useRef, useState } from "react";

const SignIn = () => {
  const AlertRef = useRef();
  const [email, setEmail] = useState("");
  const [AlertMessage, setAlertMsg] = useState("");
  const [password, setPassword] = useState("");

  function Login(e) {
    e.preventDefault();
    let alertElement = AlertRef.current;
    let CredentialsIsAvailable = (email.trim().length > 0) && (password.trim().length > 0)
    if (CredentialsIsAvailable) {
      ValidateAgent({email, password}, setAlertMsg, alertElement)
    } 
    setEmail("")
    setPassword("")
  }
  return (
    <div className="sign_in">
      <div className="form">
        <form onSubmit={Login}>
          <h2>Sign in</h2>
          <div ref={AlertRef}> {AlertMessage} </div>
          <label> Email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="User@Example.com"
            value={email}
          />
          <label> Password </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Benjamin#12"
            value={password}
          />
          <Button text={"Sign in"} />

          <div className="create">
            <p>Do not have an account?</p>
            <Link to={"/pages/sign_up"}>Create new account</Link>
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
