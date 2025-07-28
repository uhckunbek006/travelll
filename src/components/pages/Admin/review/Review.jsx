import React from "react";
import "./Review.scss";
import { GoArrowUpRight } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import hotel from "../../../../assets/images/culturePage/culture page/hotel.svg";

const rew = {
  en: {},
};
const Review = () => {
  return (
    <div id="review">
      <div className="container">
        <div className="review">
          <div className="review--top">
            <div className="review--top__input">
              <div className="review--top__input--inp">
                <a>
                  <LuSearch />
                </a>
                <input type="text" />
              </div>
              <h1>
                <GoArrowUpRight />
              </h1>
            </div>
            <div className="review--top__name">
              <div className="review--top__name--text">
                <h1>Charles Deo</h1>
                <h2>Moscow, Rossia</h2>
              </div>
              <img
                src="https://www.shareicon.net/data/256x256/2015/12/10/685100_man_512x512.png"
                alt="imgg"
              />
            </div>
          </div>
          <div className="review--blocks">
            <h1>Review 35</h1>
            <div className="review--blocks__hotel">
              <div className="review--blocks__hotel--amir">
                <h2>Hotel Amir</h2>
                <div className="review--blocks__hotel--amir__img">
                  <img src={hotel} alt="img" />
                  <div className="review--blocks__hotel--amir__img--text">
                    <h3>Location and contact details</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
