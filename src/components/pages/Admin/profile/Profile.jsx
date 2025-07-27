import React, { useState } from "react";
import "./Profile.scss";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import profileStar from "../../../../assets/images/culturePage/culture page/pro1.svg";
import profileHeart from "../../../../assets/images/culturePage/culture page/pro2.svg";
import profilePersonn from "../../../../assets/images/culturePage/culture page/pro3.svg";
// import profileHeart from "../../../assets/images/profileheart.svg";
import profileBg from "../../../../assets/images/culturePage/culture page/profileBg.png";
import logout from "../../../../assets/images/culturePage/culture page/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Personn from "../person/Personn";
import Review from "../review/Review";
// import Personn from "./person/Personn";

const Profile = () => {
  const nav = useNavigate();
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="a">
        <div
          id="profile"
          style={{
            background: `url(${profileBg})no-repeat center/cover`,
          }}
        >
          <div className="profileBGG">
            <div className="container">
              <div className="profile">
                <div className="profile--blocks">
                  <div className="profile--blocks__block">
                    <img src={profilePersonn} alt="img" />
                    <NavLink onClick={() => setActive(1)}>Profile</NavLink>
                  </div>
                  <div className="profile--blocks__block">
                    <img src={profileStar} alt="img" />
                    <NavLink onClick={() => setActive(2)}>Review</NavLink>
                  </div>
                  <div className="profile--blocks__block">
                    <img src={profileHeart} alt="img" />
                    <NavLink onClick={() => setActive(3)}>Favorites</NavLink>
                  </div>
                </div>
                <div className="profile--log" onClick={() => nav("/")}>
                  <img src={logout} alt="" />
                  <h1>Log out</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {active === 1  ? <Personn /> : null}
        {active === 2 ? <Review /> : null}
        {active === 3 ? <Personn /> : null}
      </div>
    </>
  );
};

export default Profile;
