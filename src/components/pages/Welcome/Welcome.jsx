import React, { useContext } from "react";
import "./Welcome.scss";
import welcome from "../../../assets/images/bishkekBg.jpg";
import { PiArrowUpRightBold } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { TravelContext } from "../../context/context";

const translations = {
  en: {
    title: "Welcome to the amazing Kyrgyzstan!",
    placeholder: "Where to go?",
    description: `Are you ready to embark on an exciting journey through the
stunning country of Central Asia? We are ready to help you plan
the perfect trip to Kyrgyzstan.`,
    countryTitle: "Kyrgyzstan",
    countryText: `Kyrgyz Republic is a landlocked country located in the
heart of Central Asia. The capital is Bishkek. The mountainous
region of the Tian Shan covers over 80% of the country.
Kyrgyzstan is occasionally referred to as "the Switzerland of Central Asia".
The country is divided into seven provinces, which are Batken,
Chuy, Jalal-Abad, Issyk-Kul, Naryn, Osh and Talas.`,
  },
  ru: {
    title: "Добро пожаловать в удивительный Кыргызстан!",
    placeholder: "Куда поехать?",
    description: `Готовы отправиться в увлекательное путешествие по
потрясающей стране Центральной Азии? Мы поможем вам
спланировать идеальную поездку в Кыргызстан.`,
    countryTitle: "Кыргызстан",
    countryText: `Кыргызская Республика — это не имеющая выхода к морю страна,
расположенная в самом сердце Центральной Азии. Столица — Бишкек.
Горный регион Тянь-Шань покрывает более 80% территории страны.
Кыргызстан иногда называют "Швейцарией Центральной Азии".
Страна делится на семь областей: Баткен, Чуй, Джалал-Абад, Иссык-Куль,
Нарын, Ош и Талас.`,
  },
  ky: {
    title: "Керемет Кыргызстанга кош келиңиз!",
    placeholder: "Кайда баргыңыз келет?",
    description: `Борбор Азиядагы кооз өлкө менен кызыктуу саякатка
чыгууга даярсызбы? Биз сизге Кыргызстанга эң сонун
сапарды пландашууга жардам беребиз.`,
    countryTitle: "Кыргызстан",
    countryText: `Кыргыз Республикасы — Борбор Азиянын жүрөгүндө жайгашкан,
деңизге чыга албаган өлкө. Астанасы — Бишкек. Теңир-Тоонун
тоолуу аймагы өлкөнүн 80%ын түзөт. Кыргызстан кээде
"Борбор Азиянын Швейцариясы" деп аталат. Өлкө жети облуска бөлүнөт:
Баткен, Чүй, Жалал-Абад, Ысык-Көл, Нарын, Ош жана Талас.`,
  },
};

const Welcome = () => {
  const { language } = useContext(TravelContext);
  const t = translations[language] || translations.en;

  return (
    <div
      id="welcome"
      style={{
        backgroundImage: `url(${welcome})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="welcome">
          <div className="welcome--nav">
            <h1>{t.title}</h1>
            <div className="welcome--nav__inpb">
              <div className="welcome--nav__inpb--input">
                <a>
                  <RiSearch2Line />
                </a>
                <input type="text" placeholder={t.placeholder} />
              </div>
              <h3>
                <PiArrowUpRightBold />
              </h3>
            </div>
            <p>{t.description}</p>
          </div>
        </div>
        <div className="position">
          <h1>{t.countryTitle}</h1>
          <p>{t.countryText}</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
