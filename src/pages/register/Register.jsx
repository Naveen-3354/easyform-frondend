import "./Register.scss";
import { useState } from "react";
import {
  InputFeild,
  PasswordFeild,
} from "../../components/inputField/InputFeild";
import {useFunctions} from "../../functions/userFunctions.jsx"

const Register = () => {
 const {handleChange, handleSubmit}= useFunctions()
  return (
    <div className="register">
      <div className="card">
        <div className="logo">
          {/* <h2>EASY</h2>
          <h2>FARM</h2> */}
          <h2>LOGO</h2>
        </div>
        <div className="title">
          <h3>Create a account...</h3>
        </div>
        <div className="inputs">
          <InputFeild name="userName" placeholder="Username" handleChange={handleChange}/>
          <InputFeild name="email" placeholder="Email" handleChange={handleChange}/>
          <InputFeild name="number" placeholder="Number" type="number" handleChange={handleChange}/>
          <PasswordFeild name="password" placeholder="Password" handleChange={handleChange}/>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox1" className="custom-checkbox" />
          <p>
            agree to the <span>Terms and Conditions.</span>
          </p>
        </div>
        <div className="buttons">
          <button className="buttom" onClick={handleSubmit}>Sign Up </button>
          <div className="or">
            <div className="one"></div>
            <div className="two">
              <p>Or</p>
            </div>
            <div className="one"></div>
          </div>
          <button className="buttom">Sign In </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
