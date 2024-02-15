import "./Register.scss"
import { useState } from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

const Register = () => {
  const [passwordHide, setPasswordHide] = useState(false);

  const handleVisibility = () => {
    setPasswordHide(!passwordHide);
  };
  return (
    <div className="register">
       <div className="card">
        <div className="logo">
          <h2>EASY</h2>
          <h2>FARM</h2>
        </div>
        <div className="title">
          <h3>Create a account...</h3>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" id="userName" placeholder="Username" />
          </div>
          <div className="input">
            <input type="text" id="userName" placeholder="Email" />
          </div>
          <div className="input">
            <input type="text" id="userName" placeholder="Number" />
          </div>
          <div className="input password">
            <input
              type={passwordHide ? "text" : "password"}
              id="password"
              placeholder="Password"
            />
            <div className="visibility" onClick={handleVisibility}>
              {passwordHide ? (
                <VisibilityRoundedIcon className="eyeIcon" />
              ) : (
                <VisibilityOffRoundedIcon className="eyeIcon" />
              )}
            </div>
          </div>
        </div>
        <div className="checkbox">
        <input type="checkbox" id="checkbox1" class="custom-checkbox"/>
        <p>agree to the <span>Terms and Conditions.</span></p>
        </div>
        <div className="buttons">
          <button className="signup">Sign Up </button>
          <div className="or">
            <div className="one"></div>
            <div className="two"><p>Or</p></div>
            <div className="one"></div>
          </div>
          <button className="signin">Sign In </button>
        </div>
      </div>
    </div>
  )
}

export default Register