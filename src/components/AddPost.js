import axios from "axios";
import { useState, useRef } from "react";
import TextEditor from "./TextEditor";

import "../stylesheets/AddPost.css";
import { useNavigate } from "react-router-dom";

const BACKEND_URI = "https://r77e9.sse.codesandbox.io";

export default function AddPost() {
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    favourite: false
  });

  const popupContainer = useRef();
  const navigate = useNavigate();

  /* Callback that updates the value */
  function handleEditorHtmlChange(html) {
    setPost({ ...post, content: html });
  }

  /* Save post info to the database */
  function savePostToDB(e) {
    e.preventDefault();
    handlePopupClose();
    var token = "";
    token = localStorage.getItem("token");

    if (token) {
      axios
        .post(`${BACKEND_URI}/post/add`, post)
        .then((res) => {
          console.log(res);
          setPost({ title: "", author: "", content: "" });
          alert("Post Added!");
          navigate("/home");
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
            setPost({ title: "", author: "", content: "" });
          }
        });
    }
  }

  function handlePopupClose() {
    popupContainer.current.style.display = "none";
  }

  return (
    <div id="addPostContainer" ref={popupContainer}>
      <button
        onClick={handlePopupClose}
        id="popupClose"
        style={{ display: "none" }}
      />
      <form className="addPostContent" onSubmit={savePostToDB}>
        <div>
          <label htmlFor="popupClose" style={{ float: "right" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
          </label>
        </div>
        <div className="header">Post Title</div>
        <input
          type="text"
          className="textInput"
          placeholder="Enter Title Here"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <div className="header">Author</div>
        <input
          type="text"
          className="textInput"
          placeholder="Enter your name/alias"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
        />
        <div className="header" style={{ marginBottom: ".75rem" }}>
          Post Content
        </div>
        <TextEditor
          textEditorHtml={post.content}
          handleEditorHtmlChange={handleEditorHtmlChange}
        />
        <input
          style={{ width: "fit-content" }}
          className="submitButton"
          type="submit"
          value="Add Post"
        />
      </form>
    </div>
  );
}
