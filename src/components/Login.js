import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../stylesheets/Login.css";

const BACKEND_URI = "https://r77e9.sse.codesandbox.io";

export default function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  function checkAuthorizationStatus() {
    /* Check if user is already logged in */
    var token = "";
    token = localStorage.getItem("token");

    if (token) {
      axios
        .get(`${BACKEND_URI}/users/user`, {
          headers: {
            "X-Auth-Token": token
          }
        })
        .then((res) => {
          alert("You are already logged in!");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    checkAuthorizationStatus();
  });

  function logInToAccount(e) {
    e.preventDefault();

    console.log(loginInfo);
    axios
      .post(`${BACKEND_URI}/users/login`, loginInfo)
      .then((res) => {
        console.log(res);
        try {
          localStorage.setItem("token", res.data.token);
        } catch (err) {
          console.log({
            msg: "Failed to save authentication data to local storage",
            err
          });
        }
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
      <div className="loginContainer">
      <div className="loginForm">
        <div className="loginHeadingText">Log in to your account</div>
        <input
          className="loginInputField"
          type="email"
          value={loginInfo.email}
          onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
        />
        <input
          type="password"
          className="loginInputField"
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
        <button className="loginInputField" onClick={logInToAccount}>
          Log In
        </button>
        <div className="signUpText">
          No account? <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
