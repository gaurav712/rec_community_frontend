import Header from "./Header";
import PostCard from "./PostCard";
// import People from "./People";

import "../stylesheets/Home.css";
import AddPost from "./AddPost";
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URI = "https://r77e9.sse.codesandbox.io";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    var token = "";
    token = localStorage.getItem("token");

    if (token) {
      axios
        .get(`${BACKEND_URI}/post/40`, {
          headers: {
            "X-Auth-Token": token
          }
        })
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
          }
        });
      /* Check if user is already logged in */
      // var token = "";
      // token = localStorage.getItem("token");

      // if (token) {
      axios
        .get(`${BACKEND_URI}/users/user`, {
          headers: {
            "X-Auth-Token": token
          }
        })
        .then((res) => {
          setLoggedIn(true);
          // loginButtonRef.current.style.display = "block";

          /* If the user is admin enable the addproduct button */
          // if (res.data.email === "admin@getart") {
          // addProductButtonRef.current.style.display = "block";
          // }
        })
        .catch((err) => {
          console.log(err);
          // loginButtonRef.current.style.display = "block";
        });
    }
  }, []);

  useEffect(() => {
    if (posts) {
      console.log(posts);
    }
  }, [posts]);

  function search(query) {
    axios
      .get(`${BACKEND_URI}/post/search/${query}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCreatePost() {
    const popup = document.getElementById("addPostContainer");
    popup.style.display = "flex";
  }

  return (
    <>
      <AddPost />
      <Header loggedIn={loggedIn} search={search} />
      <div className="homeContainer">
        <div className="centralContainer">
          <div onClick={handleCreatePost} className="createPost">
            Create a new Post
            <div className="createPostIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
              </svg>
            </div>
          </div>
          {posts.map((item) => (
            <PostCard
              title={item.title}
              author={item.author}
              content={item.content}
            />
          ))}
        </div>
        {/* <People /> */}
      </div>
    </>
  );
}
