import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bishkek from "../../../assets/images/bishkekBlock.png";
import like from "../../../assets/images/like.svg";
import dot from "../../../assets/images/dot/Card/Frame 50.svg";
import { TravelContext } from "../../context/context";

const bishkekText = {
  en: {
    title: "Bishkek",
    description: `This is the capital of a picturesque mountainous
country - Kyrgyzstan, from where tourists make trips to the
world-famous, crystal-clear Issyk-Kul and other natural
attractions of the Tien Shan. Framed by mountains, the city is
rich in beautiful views, monumental monuments, parks and
museum antiquities.`,
  },
  ru: {
    title: "Бишкек",
    description: `Это столица живописной горной страны -
Кыргызстан, откуда туристы совершают поездки к
всемирно известному, кристально чистому Иссык-Кулю и другим природным
достопримечательностям Тянь-Шаня. Окруженный горами, город богат
красивыми видами, монументальными памятниками, парками и
музейными антиквариатами.`,
  },
  ky: {
    title: "Бишкек",
    description: `Бул Кыргызстандын тоолуу кооз өлкөсүнүн борбору,
туристтер дүйнөгө таанымал, тунук Ысык-Көлгө жана Тянь-Шаньдын
табиатынын башка кереметтерине саякатташат. Тоолор менен курчалган
шаар кооз көрүнүштөргө, эстеликтерге, бакчаларга жана музейлердеги
мурасы бай.`,
  },
};

const Attraction = () => {
  const { attraction, language } = useContext(TravelContext);
  const text = bishkekText[language] || bishkekText.en;

  return (
    <div id="attraction">
      <div className="container">
        <div className="attraction">
          <div className="attraction--block">
            <img src={bishkek} alt={text.title} />
            <div className="attraction--block__text">
              <h1>{text.title}</h1>
              <p>
                {text.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="attraction--cards">
            <h1>Attractions</h1>
            <div className="attraction--cards__block">
              {attraction.slice(0, 6).map((el) => (
                <div className="attraction--cards__block--card">
                  <img src={like} alt="heart" className="heart" />
                  <img src={el.image1} alt={el.title} width={350} />
                  <h2>{el.title}</h2>
                  <div className="attraction--cards__block--card__cirkle">
                    <h4>4.5</h4>
                    <img src={dot} alt="" />
                    <h6>23 764 reviews</h6>
                  </div>
                  <p>{el.description.slice(0, 220)}</p>
                  <a>
                    <FaArrowRightLong />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attraction;
