import React from "react";
import Google from "../img/google.png";

import Github from "../img/github.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a SignUp Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>

          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confrim Password" />
          <button className="submit">Sign Up</button>
          <div className="signup-link">
            Already have an account?<Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
