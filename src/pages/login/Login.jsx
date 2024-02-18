import "./Login.scss";
import {
  InputFeild,
  PasswordFeild,
} from "../../components/inputField/InputFeild";
import {useFunctions} from "../../functions/userFunctions.jsx"

const Login = () => {
 const {handleChange, handleSubmit}= useFunctions()

  return (
    <div className="login">
      <div className="card">
        <div className="logo">
          {/* <h2>EASY</h2>
          <h2>FARM</h2> */}
          <h2>LOGO</h2>

        </div>
        <div className="title">
          <h3>Welcome back to farm</h3>
        </div>
        <div className="inputs">
          <InputFeild
            name="email"
            placeholder="Email"
            handleChange={handleChange}
          />
          <PasswordFeild
            name="password"
            placeholder="Password"
            handleChange={handleChange}
          />
        </div>
        <div className="forgot">
          <p>Forget password?</p>
        </div>
        <div className="buttons">
          <button className="signIn">Sign In </button>
          <div className="or">
            <div className="one"></div>
            <div className="two">
              <p>Or</p>
            </div>
            <div className="one"></div>
          </div>
          <button className="signup">Sign Up </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
