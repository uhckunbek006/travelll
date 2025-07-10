import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import axios from "axios";
import { TravelContext } from "../../../context/context";

const Games = () => {
  const { culture, games } = useContext(TravelContext);

  const gamess = games.filter(
    (el) =>
      el.id === 1 || el.id === 8 || el.id === 9 || el.id === 10 || el.id === 11
  );
  console.log(gamess, "games");

  return (
    <div id="games">
      <div className="container">
        <div className="games">
          <div
            className="games--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Games</h1>
            <p>
              Since ancient times, the Kyrgyz have given a great place to folk
              games and <br /> entertainment, not a single folk festival took
              place without them. <br /> Traditional equestrian games remain the
              most beloved and revered.
            </p>
          </div>
          {gamess.map((el) => (
            <div className="games--block2">
              <div className="games--block2__text">
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

export default Games;
