import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import axios from "axios";
import { TravelContext } from "../../../context/context";

const gamesss = {
  en: {
    text: `Since ancient times, the Kyrgyz have given a great place to folk games and entertainment, not a single folk festival took place without them. Traditional equestrian games remain the most beloved and revered.`,
    name: "Games",
  },
  ru: {
    text: `С древних времён кыргызы придавали большое значение народным играм и развлечениям — ни один народный праздник не обходился без них. Традиционные конные игры остаются самыми любимыми и почитаемыми.`,
    name: "Игры",
  },
  ky: {
    text: `Эзелтен бери кыргыз эли элдик оюндарга жана көңүл ачууга өзгөчө маани берип келген, андай оюндарсыз эч бир элдик майрам өткөн эмес. Салттуу ат оюндары эң сүймөнчүк жана урмат-сыйга татыктуу бойдон калып келет.`,
    name: "Оюндар",
  },
};

const Games = () => {
  const { culture, games, language } = useContext(TravelContext);

  const t = gamesss[language];

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
            <h1>{t.name}</h1>
            <p>{t.text}</p>
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
