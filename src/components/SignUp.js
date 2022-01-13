import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../stylesheets/SignUp.css";

const BACKEND_URI = "https://r77e9.sse.codesandbox.io";

export default function SignUp() {
  const navigate = useNavigate();

  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
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

  function signUpUser(e) {
    e.preventDefault();
    console.log(signUpInfo);
    axios
      .post(`${BACKEND_URI}/users/add`, signUpInfo)
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
    <form className="signUpContent" onSubmit={signUpUser}>
      <center>
        <div className="signUpHeading">Enter your details</div>
        <input
          type="text"
          className="textInput"
          placeholder="Your Name"
          value={signUpInfo.name}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, name: e.target.value })
          }
        />
        <input
          type="email"
          className="textInput"
          placeholder="Enter your email"
          value={signUpInfo.email}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, email: e.target.value })
          }
        />
        <input
          type="password"
          className="textInput"
          placeholder="Password"
          value={signUpInfo.password}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, password: e.target.value })
          }
        />
        <input
          type="submit"
          className="loginButton signUpButton"
          value="Sign Up"
        />
      </center>
    </form>
  );
}
