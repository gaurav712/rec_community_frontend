import "../stylesheets/People.css";

export default function People() {
  return (
    <div className="People">
      <ul className="members">
        <p>My Profile</p>

        <img className="profilepic" alt="" />
        <p className="user-name">gauraiyaaa</p>
      </ul>
      <center>
        <p className="user-name">recent interracters</p>
      </center>
      <ul className="list">
        <li className="list-item">
          <img className="profile-pic" src="" alt="" />
          <p className="user-name">eti arora</p>
        </li>
        <li className="list-item">
          <img src="" alt="" className="profile-pic" />
          <p className="user-name">ansh patel</p>
        </li>
        <li className="list-item">
          <img src="" alt="" className="profile-pic" />
          <p className="user-name">anonymous</p>
        </li>
        <li className="list-item">
          <img src="" alt="" className="profile-pic" />
          <p className="user-name">nancy pathak</p>
        </li>
      </ul>
    </div>
  );
}
