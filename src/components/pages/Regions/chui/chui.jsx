import React, { useContext, useEffect, useState } from "react";
import "./chui.scss";
import { TravelContext } from "../../../context/context";
import talas from "../../../../assets/images/talas.svg";
import chui from "../../../../assets/images/chui.svg";
import kyl from "../../../../assets/images/kyl.svg";
import jalal from "../../../../assets/images/jalal.svg";
import naryn from "../../../../assets/images/naryn.svg";
import osh from "../../../../assets/images/osh.svg";
import batken from "../../../../assets/images/batken.svg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const translations = {
  en: {
    where: "Where?",
    go: "Go",
    talas: "Talas",
    chui: "Chui",
    kyl: "Issyk-Kyl",
    jalal: "Jalal-Abad",
    naryn: "Naryn",
    osh: "Osh",
    batken: "Batken",
    km: "356 km",
    hours72: "72 hours",
    hours78: "7-8 hours",
    tickets: "5 tickets",
  },
  ru: {
    where: "Куда?",
    go: "Поехали",
    talas: "Талас",
    chui: "Чуй",
    kyl: "Иссык-Куль",
    jalal: "Джалал-Абад",
    naryn: "Нарын",
    osh: "Ош",
    batken: "Баткен",
    km: "356 км",
    hours72: "72 часа",
    hours78: "7-8 часов",
    tickets: "5 билетов",
  },
  ky: {
    where: "Каякка?",
    go: "Жөнө",
    talas: "Талас",
    chui: "Чүй",
    kyl: "Ысык-Көл",
    jalal: "Жалал-Абад",
    naryn: "Нарын",
    osh: "Ош",
    batken: "Баткен",
    km: "356 км",
    hours72: "72 саат",
    hours78: "7-8 саат",
    tickets: "5 билет",
  },
};

const Osh = () => {
  const { language } = useContext(TravelContext);
  const [regions, setRegions] = useState([]);
  const [meal, setMeal] = useState([]);
  const t = translations[language];
  const nav = useNavigate();
  const [place, setPlace] = useState([]);
  const [active, setActive] = useState(1);

  async function addRegions() {
    let res = await axios(`http://13.60.97.160/${language}/region/1/`);
    let { data } = res;
    setRegions(data);
  }
  async function addMeal() {
    let res = await axios(`http://13.60.97.160/${language}/region/1/meal/`);
    let { data } = res;
    setMeal(data);
  }

  let mealres = meal.filter((el) => el.id === 4 || el.id === 5 || el.id === 6);

  async function addPlaces() {
    let res = await axios(`http://13.60.97.160/en/region/7/place/`);
    let { data } = res;
    setPlace(data);
  }

  console.log(place, "place");

  useEffect(() => {
    addRegions();
    addMeal();
    addPlaces();
  }, []);

  return (
    <div id="osh">
      <div className="container">
        <div className="osh">
          <div className="osh--text">
            <div className="osh--text__gradus">
              <img src={regions?.region_image} alt="" width={600} />
              <button>
                <span>
                  <TiWeatherPartlySunny />
                </span>
                {regions?.temperature}&deg;C
              </button>
            </div>
            <div className="osh--text__des">
              <h1>{regions?.region_name}</h1>
              <p>{regions?.description}</p>
            </div>
          </div>
          <div className="route--block__block2">
            <div className="route--block__block2--talas">
              <img
                src={talas}
                alt="talas"
                onClick={() => nav("/regions/talas")}
              />
              <h1>{t.talas}</h1>
            </div>
            <div className="route--block__block2--chui">
              <img src={chui} alt="chui" onClick={() => nav("/regions/chui")} />
              <h1>{t.chui}</h1>
            </div>
            <div className="route--block__block2--kyl">
              <img
                src={kyl}
                alt="kyl"
                onClick={() => nav("/regions/issyk-kul")}
              />
              <h1>{t.kyl}</h1>
            </div>
            <div className="route--block__block2--jalal">
              <img
                src={jalal}
                alt="jalal"
                onClick={() => nav("/regions/jalal-abad")}
              />
              <h1>{t.jalal}</h1>
            </div>
            <div className="route--block__block2--naryn">
              <img
                src={naryn}
                alt="naryn"
                onClick={() => nav("/regions/naryn")}
              />
              <h1>{t.naryn}</h1>
            </div>
            <div className="route--block__block2--osh">
              <img src={osh} alt="osh" onClick={() => nav("/regions/osh")} />
              <h1>{t.osh}</h1>
            </div>
            <div className="route--block__block2--batken">
              <img
                src={batken}
                alt="batken"
                onClick={() => nav("/regions/batken")}
              />
              <h1>{t.batken}</h1>
            </div>
          </div>

          <div className="slick">
            <div className="slick__text">
              <h1>What to try in Osh?</h1>
            </div>
            <div className="slick--block">
              <p>
                <span>{mealres[0]?.meal_name}</span> <br />
                {mealres[0]?.description.slice(0, 500)}
              </p>
              <div className="slick--block__pagination">
                <img src={mealres[0]?.meal_image1} alt="img" className="imgG" />
                <div className="slick--block__pagination--images">
                  <img src={mealres[0]?.meal_image2} alt="img" width={100} />
                  <img src={mealres[0]?.meal_image3} alt="img" width={100} />
                  <img src={mealres[0]?.meal_image1} alt="img" width={100} />
                </div>
                <div className="slick--block__pagination--count">
                  <a>
                    <MdKeyboardArrowLeft />
                  </a>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <a>
                    <MdKeyboardArrowRight />
                  </a>
                </div>
              </div>
              <p>{mealres[0]?.description.slice(0, 500)}</p>
            </div>
          </div>

          <div className="places">
            <h1>Popular places</h1>
            <div className="places--block">
              {place.map((el) => (
                <div className="places--block__card">
                  <img
                    src={el.place_image}
                    alt=""
                    onClick={() => nav(`/detail/${el.id}`)}
                  />
                  <div className="places--block__card--text">
                    <h3>{el.place_name}</h3>
                    <h4>4.5 . . . 23 764 reviews</h4>
                    <a>
                      <IoIosArrowRoundForward />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Osh;
