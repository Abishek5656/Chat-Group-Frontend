import { users } from "../constant/data.js";
import "./main.css";

const Main = () => {
  return (
    <div className="mainContainer">
      {users && users.map((user, index) => (
        <div className="main_container-content" key={index + user?.name}>
          <div className="user_profile">
            <img src={user?.profileImage} alt="profile_image" />
          </div>
          <div className="user_content">
            <div className="user_details">
              <h2>{user?.name}</h2>
              <span>{user?.timestamp}</span>
            </div>
            <p>{user?.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
