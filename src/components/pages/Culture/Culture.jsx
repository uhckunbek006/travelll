import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import cultureImg from "../../../assets/images/culture.png";
import { useNavigate } from "react-router-dom";
import { TravelContext } from "../../context/context";

const translations = {
  en: {
    title: "Culture",
    desc: `The culture of Kyrgyzstan was formed under the strong influence of 
    nomadic life. In addition, it was influenced by the cultures of Russia, Persia
     and Turkey, and yet it remained quite original and unique. The connection of Kyrgyz 
     culture with nature can be traced everywhere: from design to music. One of the most
      famous examples of Kyrgyz culture is the Manas epic, an incredibly long poem
       that was passed down orally from one generation to the next.`,
    games: "Games",
    clothes: "National clothes",
    crafts: "Hand crafts",
    currency: "Currency",
    instruments: "National instruments",
    kitchen: "Kitchen",
  },
  ru: {
    title: "Культура",
    desc: `Культура Кыргызстана сформировалась под сильным влиянием кочевого образа
     жизни. Кроме того, на неё повлияли культуры России, Персии и Турции, однако она 
     всё же осталась довольно оригинальной и уникальной. Связь кыргызской культуры с природой
      прослеживается повсюду: от дизайна до музыки. Одним из самых известных примеров кыргызской
       культуры является эпос «Манас» — невероятно длинное поэтическое произведение,
        которое передавалось устно из поколения в поколение.`,
    games: "Игры",
    clothes: "Национальная одежда",
    crafts: "Ремесла",
    currency: "Валюта",
    instruments: "Национальные инструменты",
    kitchen: "Кухня",
  },
  ky: {
    title: "Маданият",
    desc: `Кыргызстандын маданияты көчмөн жашоонун таасири менен
     калыптанган. Мындан тышкары, ага Орусиянын, Персиянын жана
      Түркиянын маданияты таасир эткен, бирок ошого карабастан,
       ал өзүнчө оригиналдуу жана кайталангыс бойдон калган. Кыргыз 
       маданиятынын табият менен болгон байланышы бардык жерден байкалат:
        дизайндан тартып, музыкага чейин. Кыргыз маданиятынын эң белгилүү
         мисалдарынын бири — «Манас» эпосу. Бул өтө узак поэма муундан
          муунга оозеки түрдө өткөрүлүп келген.`,
    games: "Оюндар",
    clothes: "Улуттук кийимдер",
    crafts: "Кол өнөрчүлүк",
    currency: "Акча бирдиги",
    instruments: "Улуттук аспаптар",
    kitchen: "Ашкана",
  },
};

const Culture = () => {
  const nav = useNavigate();
  const { language } = useContext(TravelContext);
  const t = translations[language];

  return (
    <div id="culture">
      <div className="container">
        <div className="culture">
          <div className="culture--bg">
            <img src={cultureImg} alt="" />
          </div>
          <div className="culture--block">
            <h1>{t.title}</h1>
            <p>{t.desc}</p>
            <div className="culture--block__text">
              <h3>
                {t.games}
                <span onClick={() => nav("/games")}>
                  <FaArrowRightLong />
                </span>
              </h3>
              <h3>
                {t.clothes}
                <span onClick={() => nav("/clothes")}>
                  <FaArrowRightLong />
                </span>
              </h3>
              <h3>
                {t.crafts}
                <span onClick={() => nav("/hand")}>
                  <FaArrowRightLong />
                </span>
              </h3>
              <h3>
                {t.currency}
                <span onClick={() => nav("/currency")}>
                  <FaArrowRightLong />
                </span>
              </h3>
              <h3>
                {t.instruments}
                <span onClick={() => nav("/instrument")}>
                  <FaArrowRightLong />
                </span>
              </h3>
              <h3>
                {t.kitchen}
                <span onClick={() => nav("/kitchen")}>
                  <FaArrowRightLong />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
