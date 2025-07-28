import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import header from "../../../assets/images/header.svg";
import "./Header.scss";
import { TravelContext } from "../../context/context";
import { IoPersonCircleSharp } from "react-icons/io5";

const translations = {
  en: {
    home: "Home",
    regions: "Regions",
    regionsList: [
      { value: "chui", label: "Chui" },
      { value: "talas", label: "Talas" },
      { value: "issykKul", label: "Issyk-Kul" },
      { value: "naryn", label: "Naryn" },
      { value: "jalalAbad", label: "Jalal-Abad" },
      { value: "osh", label: "Osh" },
      { value: "batken", label: "Batken" },
    ],
    culture: "Culture",
    gallery: "Gallery",
    routes: "Routes",
    signup: "Sign up",
    languages: { en: "Eng", ru: "Russian", ky: "Kyrgyz" },
  },
  ru: {
    home: "Главная",
    regions: "Регионы",
    regionsList: [
      { value: "chui", label: "Чуй" },
      { value: "talas", label: "Талас" },
      { value: "issykKul", label: "Иссык-Куль" },
      { value: "naryn", label: "Нарын" },
      { value: "jalalAbad", label: "Джалал-Абад" },
      { value: "osh", label: "Ош" },
      { value: "batken", label: "Баткен" },
    ],
    culture: "Культура",
    gallery: "Галерея",
    routes: "Маршруты",
    signup: "Регистрация",
    languages: { en: "Англ", ru: "Рус", ky: "Кыр" },
  },
  ky: {
    home: "Башкы бет",
    regions: "Аймактар",
    regionsList: [
      { value: "chui", label: "Чүй" },
      { value: "talas", label: "Талас" },
      { value: "issykKul", label: "Ысык-Көл" },
      { value: "naryn", label: "Нарын" },
      { value: "jalalAbad", label: "Жалал-Абад" },
      { value: "osh", label: "Ош" },
      { value: "batken", label: "Баткен" },
    ],
    culture: "Маданият",
    gallery: "Галерея",
    routes: "Маршруттар",
    signup: "Катталуу",
    languages: { en: "Англ", ru: "Орус", ky: "Кыргыз" },
  },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showRegionsSubmenu, setShowRegionsSubmenu] = useState(false);
  const { language, setLanguage, setRooteRegion } = useContext(TravelContext);
  const nav = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = JSON.parse(localStorage.getItem("adminlog")) || null;
    setToken(savedToken);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowRegionsSubmenu(false);
  };

  const t = translations[language] || translations.en;

  const handleRegionChange = (regionValue) => {
    if (!regionValue) return; // бос болсо эч нерсе кылбайбыз
    setRooteRegion(regionValue);
    nav(`/regions/${regionValue}`);
  };

  return (
    <div
      id="header"
      style={{
        backgroundImage: `url(${header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg">
        <div className="container">
          <div className="header">
            <h1 className="logo"></h1>

            {/* Desktop Navigation */}
            <div className="header--nav">
              <NavLink to="/">{t.home}</NavLink>

              <select
                onChange={(e) => handleRegionChange(e.target.value)}
                defaultValue=""
              >
                <option value="">{t.regions}</option>
                {t.regionsList.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>

              <NavLink to="/culture">{t.culture}</NavLink>
              <NavLink to="/gallery">{t.gallery}</NavLink>
              <NavLink to="/routes">{t.routes}</NavLink>
            </div>

            {/* Language + Profile or Login */}
            <div className="header--btn">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">{t.languages.en}</option>
                <option value="ru">{t.languages.ru}</option>
                <option value="ky">{t.languages.ky}</option>
              </select>

              {token ? (
                <a onClick={() => nav("/profile")}>
                  <IoPersonCircleSharp />
                </a>
              ) : (
                <button onClick={() => nav("/admin")} className="singupBtn">
                  {t.signup}
                </button>
              )}
            </div>

            {/* Mobile burger */}
            <div
              className={`burger-menu ${isMobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="mobile-menu--nav">
              <NavLink to="/" onClick={toggleMobileMenu}>
                {t.home}
              </NavLink>

              <button
                className="mobile-submenu-toggle"
                onClick={() => setShowRegionsSubmenu(!showRegionsSubmenu)}
              >
                {t.regions}
              </button>

              {showRegionsSubmenu && (
                <div className="mobile-submenu">
                  {t.regionsList.map((region) => (
                    <button
                      key={region.value}
                      onClick={() => {
                        handleRegionChange(region.value);
                        toggleMobileMenu();
                      }}
                    >
                      {region.label}
                    </button>
                  ))}
                </div>
              )}

              <NavLink to="/culture" onClick={toggleMobileMenu}>
                {t.culture}
              </NavLink>
              <NavLink to="/gallery" onClick={toggleMobileMenu}>
                {t.gallery}
              </NavLink>
              <NavLink to="/routes" onClick={toggleMobileMenu}>
                {t.routes}
              </NavLink>

              <div className="mobile-menu--controls">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">{t.languages.en}</option>
                  <option value="ru">{t.languages.ru}</option>
                  <option value="ky">{t.languages.ky}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
