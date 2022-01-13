import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../stylesheets/Login.css";

const BACKEND_URI = "https://r77e9.sse.codesandbox.io";

export default function Auth() {
  const navigate = useNavigate();

  function checkAuthorizationStatus() {
    /* Check if user is already logged in */
    var token = "";
    token = localStorage.getItem("token");

    if (token) {
      console.log(token);
      axios
        .get(`${BACKEND_URI}/users/user`, {
          headers: {
            "X-Auth-Token": token
          }
        })
        .then((res) => {
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    checkAuthorizationStatus();
  });

  return <></>;
}
