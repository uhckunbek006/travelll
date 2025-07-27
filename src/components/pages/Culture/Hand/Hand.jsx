import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import axios from "axios";
import { TravelContext } from "../../../context/context";

const handd = {
  en: {
    text: `Carpet art occupies a separate place in the material culture of all Central Asian peoples. This is a separate category of applied craft, which has its own customs and traditions. Carpet weaving is an art that has a centuries-old history.`,
    name: "Hand crafts",
  },
  ru: {
    text: `Ковровое искусство занимает особое место в материальной культуре всех народов Центральной Азии. Это отдельная категория прикладного ремесла, имеющая свои обычаи и традиции. Ковроткачество — это искусство с многовековой историей.`,
    name: " Ручные поделки",
  },
  ky: {
    text: `Килем өнөрү Борбордук Азия элдеринин материалдык маданиятында өзүнчө орунду ээлейт. Бул колдонмо кол өнөрчүлүктүн өз салты жана каадасы бар өз алдынча түрү болуп эсептелет. Килем токуу — кылымдарды камтыган тарыхы бар өнөр.`,
    name: "Кол өнөрчүлүк ",
  },
};

const Hand = () => {
  const { culture, hand, language } = useContext(TravelContext);

  const t = handd[language];

  // const hand = games.filter(
  //   (el) => el.id === 16 || el.id === 17 || el.id === 18 || el.id === 19
  // );
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
            <h1>{t.name}</h1>
            <p>{t.text}</p>
          </div>
          {hand.map((el) => (
            <div className="hand--block2">
              <div className="hand--block2__text">
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
