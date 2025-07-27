import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import { TravelContext } from "../../../context/context";
const clothesss = {
  en: {
    text: `The nomadic way of life is reflected in the Kyrgyz clothes,
the features of various regions are visible. Natural
materials prevail: wool, felt, leather, coarse fabrics. The
design uses ornaments and themes inspired by nature
and tribal traditions.`,
    name: "National clothes",
  },
  ru: {
    text: `Кочевой образ жизни отражается в кыргызской одежде, заметны особенности разных регионов. Преобладают натуральные материалы: шерсть, войлок, кожа, грубые ткани. В дизайне используются орнаменты и мотивы, вдохновлённые природой и племенными традициями.

`,
    name: " Национальная одежда",
  },
  ky: {
    text: `Көчмөн жашоо образы кыргыздардын кийиминде чагылдырылган, ар түрдүү аймактардын өзгөчөлүктөрү байкалып турат. Табигый материалдар басымдуулук кылат: жүн, кийиз, тери, жүндүү кездемелер. Кооздоодо жаратылыштан жана уруу-урук салттарынан алынган орнаменттер менен темалар колдонулат.

`,
    name: "Улуттук кийимдер",
  },
};
const Clothes = () => {
  const { culture, clothes, language } = useContext(TravelContext);
  // const clothes = games.find((el) => el.id === 2);
  const t = clothesss[language];
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
            <h1>{t.name}</h1>
            <p>{t.text}</p>
          </div>
          {clothes.map((el) => (
            <div className="clothes--block2">
              <div className="clothes--block2__text">
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
