import "./SignUp.css"
import Button from "../../Components/Button/Button"
import { Link } from "react-router-dom"

//images /logo

import Googlelogo from "../../Resources/google.png"
import Agent from "../../Resources/agent.jpg"

const SignUp = () => {
  return (

   <div className="signup"> 

    <div className="poster"> 
     <img alt="agent" src={Agent}/>
    </div>

    <div className="form_content"> 
    <form>
          <h2>Create your account</h2>

          <label> Username </label>
          <input placeholder="Enter username" />
          <label> Password </label>
          <input placeholder="Enter password" />
          <Button bgC={"var(--blue)"} text={"Create account"} />

          <div className="create"> 
            <p>Already have an account?</p>
            <Link to={"/pages/sign_in"}> 
             Sign in
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
            Sign up with google
          </button>
        </form>


    </div>


   </div>
  )
}

export default SignUp
