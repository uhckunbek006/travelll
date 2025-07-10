import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import { TravelContext } from "../../../context/context";

const Clothes = () => {
  const { culture, games } = useContext(TravelContext);
  const clothes = games.filter(
    (el) => el.id === 14 || el.id === 12 || el.id === 13 || el.id === 15
  );
  console.log(games);

  return (
    <div id="clothes">
      <div className="container">
        <div className="clothes">
          <div
            className="clothes--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>National clothes</h1>
            <p>
              The nomadic way of life is reflected in the Kyrgyz clothes, <br />{" "}
              the features of various regions are visible. Natural <br />{" "}
              materials prevail: wool, felt, leather, coarse fabrics. The <br />{" "}
              design uses ornaments and themes inspired by nature <br /> and
              tribal traditions.
            </p>
          </div>
          {clothes.map((el) => (
            <div className="clothes--block2">
              <div className="clothes--block2__text">
                {/* <img
                  src="https://static.vecteezy.com/system/resources/previews/035/199/224/non_2x/ai-generated-blue-flower-isolated-on-transparent-background-free-png.png"
                  alt="img"
                /> */}
                <img src={el.image} alt="imgg" />
                <p>
                  <span>{el.culture_name}</span> <br /> <br />
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothes;
