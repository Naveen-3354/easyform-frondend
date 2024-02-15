import "./Login.scss";
import { useState } from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

const Login = () => {
  const [passwordHide, setPasswordHide] = useState(false);

  const handleVisibility = () => {
    setPasswordHide(!passwordHide);
  };
  return (
    <div className="login">
      <div className="card">
        <div className="logo">
          <h2>EASY</h2>
          <h2>FARM</h2>
        </div>
        <div className="title">
          <h3>Welcome back to farm</h3>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" id="userName" placeholder="Email or Number" />
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
        <div className="forgot">
          <p>Forget password?</p>
        </div>
        <div className="buttons">
          <button className="signIn">Sign In </button>
          <div className="or">
            <div className="one"></div>
            <div className="two"><p>Or</p></div>
            <div className="one"></div>
          </div>
          <button className="signup">Sign Up </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
