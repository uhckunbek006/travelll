import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import axios from "axios";
import { TravelContext } from "../../../context/context";

const Currency = () => {
  const { culture } = useContext(TravelContext);

  const currency = culture.find((el) => el.id === 4);
  return (
    <div id="currency">
      <div className="container">
        <div className="currency">
          <div
            className="currency--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Currency</h1>
            <p>
              The nomadic way of life is reflected in the Kyrgyz clothes, <br />{" "}
              the features of various regions are visible. Natural <br />{" "}
              materials prevail: wool, felt, leather, coarse fabrics. The <br />{" "}
              design uses ornaments and themes inspired by nature <br /> and
              tribal traditions.
            </p>
          </div>
          <div className="currency--block2">
            <div className="currency--block2__text">
              <img
                src="https://static.vecteezy.com/system/resources/previews/035/199/224/non_2x/ai-generated-blue-flower-isolated-on-transparent-background-free-png.png"
                alt="img"
              />
              <p>
                <span
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  National currency of Kyrgyzstan
                </span>{" "}
                <br />
                <br />
                {currency?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
