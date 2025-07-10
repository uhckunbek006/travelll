import React, { useContext, useState } from "react";
import sliderImg from "../../../assets/images/sliderBg.png";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { TravelContext } from "../../context/context";

const Slider = () => {
  const [count, setCount] = useState(3);
  const [activeSlide, setActiveSlide] = useState(3);
  const { culture } = useContext(TravelContext);
  const current = culture.find((s) => s.id === activeSlide);

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url(${sliderImg})`,
        boxShadow: "0 8px 10px rgba(225, 225, 225, 0.2)",
      }}
    >
      <div className="container">
        <div className="slider">
          <div className="slider__content">
            <div className="slide">
              <img
                src={current?.image}
                alt={current?.culture_name}
                className="slide__image"
              />
              <div className="slide__text">
                <h2>{current?.culture_name}</h2>
                <p>{current?.description}</p>
                <button>
                  More <IoMdArrowRoundForward />
                </button>
              </div>
            </div>

            <div className="slider__buttons">
              <a onClick={() => setCount(count - 1)}>
                <IoIosArrowBack />
              </a>
              {culture.slice(0, count).map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(slide.id)}
                  className={`slider__button ${
                    activeSlide === slide.id ? "active" : ""
                  }`}
                >
                  {slide.id}
                </button>
              ))}
              <a onClick={() => setCount(count + 1)}>
                <IoIosArrowForward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
