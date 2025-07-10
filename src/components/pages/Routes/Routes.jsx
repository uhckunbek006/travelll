import React, { useContext, useState } from "react";
import routeBg from "../../../assets/images/routeBg.png";
import talas from "../../../assets/images/talas.svg";
import chui from "../../../assets/images/chui.svg";
import kyl from "../../../assets/images/kyl.svg";
import jalal from "../../../assets/images/jalal.svg";
import naryn from "../../../assets/images/naryn.svg";
import osh from "../../../assets/images/osh.svg";
import batken from "../../../assets/images/batken.svg";
import blur from "../../../assets/images/blurBg.png";
import routeImg1 from "../../../assets/images/routeImg1.svg";
import routeImg2 from "../../../assets/images/routeImg2.svg";
import routeImg3 from "../../../assets/images/routeImg3.svg";
import routeImg4 from "../../../assets/images/routeImg4.svg";
import routeImg5 from "../../../assets/images/routeImg5.svg";
import map from "../../../assets/images/map.png";
import { TravelContext } from "../../context/context";


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

const Routess = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const {language} = useContext(TravelContext)

  const t = translations[language];

  function addGo() {
    if (!name.trim() || !phone.trim()) {
      alert(404);
    } else {
      setModal(true);
      setName("");
      setPhone("");
    }
  }

  return (
    <div
      id="route"
      style={{
        backgroundImage: `url(${routeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "120vh",
        marginBottom: modal ? "900px" : "1px",
      }}
    >
      <div className="route">
        <div
          className="route--block"
          style={{
            backgroundImage: `url(${blur})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >

          <div className="route--block__input">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder={t.where}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <button onClick={addGo}>{t.go}</button>
          </div>

          <div
            className="route--block__block2"
            style={{ display: !modal ? "flex" : "none" }}
          >
            <div className="route--block__block2--talas">
              <img src={talas} alt="talas" />
              <h1>{t.talas}</h1>
            </div>
            <div className="route--block__block2--chui">
              <img src={chui} alt="chui" />
              <h1>{t.chui}</h1>
            </div>
            <div className="route--block__block2--kyl">
              <img src={kyl} alt="kyl" />
              <h1>{t.kyl}</h1>
            </div>
            <div className="route--block__block2--jalal">
              <img src={jalal} alt="jalal" />
              <h1>{t.jalal}</h1>
            </div>
            <div className="route--block__block2--naryn">
              <img src={naryn} alt="naryn" />
              <h1>{t.naryn}</h1>
            </div>
            <div className="route--block__block2--osh">
              <img src={osh} alt="osh" />
              <h1>{t.osh}</h1>
            </div>
            <div className="route--block__block2--batken">
              <img src={batken} alt="batken" />
              <h1>{t.batken}</h1>
            </div>
          </div>

          <div
            className="route--block__block3"
            style={{ display: modal ? "flex" : "none" }}
          >
            <div className="route--block__block3--talas">
              <img src={routeImg1} alt="talas" />
              <h1>{t.km}</h1>
            </div>
            <div className="route--block__block3--chui">
              <img src={routeImg2} alt="chui" />
              <h1>{t.hours72}</h1>
            </div>
            <div className="route--block__block3--kyl">
              <img src={routeImg3} alt="kyl" />
              <h1>{t.hours78}</h1>
            </div>
            <div className="route--block__block3--jalal">
              <img src={routeImg4} alt="jalal" />
              <h1>{t.hours78}</h1>
            </div>
            <div className="route--block__block3--naryn">
              <img src={routeImg5} alt="naryn" />
              <h1>{t.tickets}</h1>
            </div>
          </div>
        </div>

        <div className="map" style={{ display: modal ? "flex" : "none" }}>
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Routess;
