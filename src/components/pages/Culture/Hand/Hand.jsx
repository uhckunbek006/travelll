import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import axios from "axios";
import { TravelContext } from "../../../context/context";

const Hand = () => {
  const { culture, games } = useContext(TravelContext);

  const hand = games.filter(
    (el) => el.id === 16 || el.id === 17 || el.id === 18 || el.id === 19
  );
  return (
    <div id="hand">
      <div className="container">
        <div className="hand">
          <div
            className="hand--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Hand crafts</h1>
            <p>
              Carpet art occupies a separate place in the material culture of
              all <br /> Central Asian peoples. This is a separate category of
              applied craft, <br /> which has its own customs and traditions.
              Carpet weaving is an <br /> art that has a centuries-old history.
            </p>
          </div>
          {hand.map((el) => (
            <div className="hand--block2">
              <div className="hand--block2__text">
                {/* <img
                  src="https://static.vecteezy.com/system/resources/previews/035/199/224/non_2x/ai-generated-blue-flower-isolated-on-transparent-background-free-png.png"
                  alt="img"
                /> */}
                <img src={el.image} alt="imgg" />
                <p>
                  <span>{el.culture_name}</span> <br /> <br /> {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hand;
