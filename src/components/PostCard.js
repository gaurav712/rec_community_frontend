import { useState } from "react";

import "../stylesheets/PostCard.css";

export default function PostCard({ title, author, content }) {
  const [isRed, setIsRed] = useState(false);

  function toggleRedHeart() {
    setIsRed(!isRed);
  }

  return (
    <div className="forum">
      <div className="part1">
        <div className="title">{title}</div>

        <div className="profile">
          <div className="authorName">{author ? author : "Unknown"}</div>
          {/* <div className="grp">
            <div className="photo">
              <img className="photo" src={image} alt="" />
            </div>

            <div className="alias">
              <div className="name">name</div>

              <div className="add">address</div>
            </div>
          </div> */}
          {/* <div className="category"></div> */}
        </div>
      </div>
      <div
        className="postContent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="actionsContainer">
        <div className="favouriteToggle">
          <svg
            onClick={toggleRedHeart}
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill={isRed ? "red" : "black"}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z" />
          </svg>
        </div>
        <div className="reportPost">
          <svg
            onClick={() => alert("Post Reported!")}
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M14.4 6l-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-4.6z" />
          </svg>
        </div>
        {/* <div className="commentPost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z" />
          </svg>
        </div> */}
      </div>
    </div>
  );
}
