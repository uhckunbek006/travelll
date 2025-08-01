import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Welcome.scss";
import welcome from "../../../assets/images/bishkekBg.jpg";
import { PiArrowUpRightBold } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { TravelContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

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
    noRegionsFound: "No regions found",
    searching: "This region does not exist",
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
    noRegionsFound: "Областей не найдено",
    searching: "Такой области нет",
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
    noRegionsFound: "Облус табылган жок",
    searching: "Мындай облус жок",
  },
};

const regionMap = {
  chui: ["chui", "чуй", "чүй"],
  batken: ["batken", "баткен"],
  osh: ["osh", "ош"],
  jalalabad: ["jalalabad", "джалал-абад", "жалал-абад"],
  naryn: ["naryn", "нарын"],
  talas: ["talas", "талас"],
  issykkul: ["issykkul", "иссык-куль", "ыссык-көл"],
};

const Welcome = () => {
  const { language } = useContext(TravelContext);
  const t = translations[language] || translations.en;

  const [regions, setRegions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRegions, setFilteredRegions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://13.60.97.160/${language}/region/3/`)
      .then((res) => {
        setRegions(res.data);
        setFilteredRegions(res.data);
      })
      .catch((err) => {
        console.error("Облустарды жүктөөдө ката:", err);
        setRegions([]);
        setFilteredRegions([]);
      });
  }, [language]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredRegions(regions);
    } else {
      // const filtered = regions.filter((region) => {
      // const regionName = region[`name_${language}`].toLowerCase();
      // return regionName.includes(searchTerm.toLowerCase());
      // });
      // setFilteredRegions(filtered);
    }
  }, [searchTerm, regions, language]);

  const handleSearch = () => {
    const input = searchTerm.trim().toLowerCase().replace(/\s+/g, "");

    let foundKey = null;
    for (const [key, aliases] of Object.entries(regionMap)) {
      if (aliases.includes(input)) {
        foundKey = key;
        break;
      }
    }

    if (foundKey) {
      navigate(`/regions/${foundKey}`);
    } else {
      alert(t.searching);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
                <a onClick={handleSearch} style={{ cursor: "pointer" }}>
                  <RiSearch2Line />
                </a>
                <input
                  type="text"
                  placeholder={t.placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <h3>
                <PiArrowUpRightBold />
              </h3>
            </div>
            <p>{t.description}</p>
          </div>

          <div className="region-list">
            {filteredRegions.length > 0 ? (
              <ul>
                {filteredRegions.map((region) => (
                  <li key={region.id}>{region[`name_${language}`]}</li>
                ))}
              </ul>
            ) : (
              <p>{t.noRegionsFound}</p>
            )}
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
