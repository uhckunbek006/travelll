// import React, { useContext, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import header from "../../../assets/images/header.svg";
// import "./Header.scss";
// import { TravelContext } from "../../context/context";

// const translations = {
//   en: {
//     home: "Home",
//     regions: "Regions",
//     regionsList: [
//       { value: "chui", label: "Chui" },
//       { value: "talas", label: "Talas" },
//       { value: "issyk-kul", label: "Issyk-Kul" },
//       { value: "naryn", label: "Naryn" },
//       { value: "jalal-abad", label: "Jalal-Abad" },
//       { value: "osh", label: "Osh" },
//       { value: "batken", label: "Batken" },
//     ],
//     culture: "Culture",
//     gallery: "Gallery",
//     routes: "Routes",
//     signup: "Sign up",
//     languages: { en: "Eng", ru: "Russian", ky: "Kyrgyz" },
//   },
//   ru: {
//     home: "Главная",
//     regions: "Регионы",
//     regionsList: [
//       { value: "chui", label: "Чуй" },
//       { value: "talas", label: "Талас" },
//       { value: "issyk-kul", label: "Иссык-Куль" },
//       { value: "naryn", label: "Нарын" },
//       { value: "jalal-abad", label: "Джалал-Абад" },
//       { value: "osh", label: "Ош" },
//       { value: "batken", label: "Баткен" },
//     ],
//     culture: "Культура",
//     gallery: "Галерея",
//     routes: "Маршруты",
//     signup: "Регистрация",
//     languages: { en: "Англ", ru: "Рус", ky: "Кыр" },
//   },
//   ky: {
//     home: "Башкы бет",
//     regions: "Аймактар",
//     regionsList: [
//       { value: "chui", label: "Чүй" },
//       { value: "talas", label: "Талас" },
//       { value: "issyk-kul", label: "Ысык-Көл" },
//       { value: "naryn", label: "Нарын" },
//       { value: "jalal-abad", label: "Жалал-Абад" },
//       { value: "osh", label: "Ош" },
//       { value: "batken", label: "Баткен" },
//     ],
//     culture: "Маданият",
//     gallery: "Галерея",
//     routes: "Маршруттар",
//     signup: "Катталуу",
//     languages: { en: "Англ", ru: "Орус", ky: "Кыргыз" },
//   },
// };

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { language, setLanguage } = useContext(TravelContext);
//   const nav = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const t = translations[language] || translations.en;

//   return (
//     <div
//       id="header"
//       style={{
//         backgroundImage: `url(${header})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg">
//         <div className="container">
//           <div className="header">
//             <h1 className="logo"></h1>

//             {/* Desktop Navigation */}
//             <div className="header--nav">
//               <NavLink to={"/"}>{t.home}</NavLink>
//               <select>
//                 <option value="">{t.regions}</option>
//                 {t.regionsList.map((region) => (
//                   <option key={region.value} value={region.value}>
//                     {region.label}
//                   </option>
//                 ))}
//               </select>
//               <NavLink to={"/culture"}>{t.culture}</NavLink>
//               <NavLink to={"/gallery"}>{t.gallery}</NavLink>
//               <NavLink to={"/routes"}>{t.routes}</NavLink>
//             </div>

//             {/* Language + SignUp */}
//             <div className="header--btn">
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//               >
//                 <option value="en">{t.languages.en}</option>
//                 <option value="ru">{t.languages.ru}</option>
//                 <option value="ky">{t.languages.ky}</option>
//               </select>
//               <button onClick={() => nav("/admin")}>{t.signup}</button>
//             </div>

//             {/* Burger */}
//             <div
//               className={`burger-menu ${isMobileMenuOpen ? "active" : ""}`}
//               onClick={toggleMobileMenu}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
//             <div className="mobile-menu--nav">
//               <NavLink to={"/"} onClick={toggleMobileMenu}>
//                 {t.home}
//               </NavLink>
//               <div className="mobile-select">
//                 <select>
//                   <option value="">{t.regions}</option>
//                   {t.regionsList.map((region) => (
//                     <option key={region.value} value={region.value}>
//                       {region.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <NavLink to={"/culture"} onClick={toggleMobileMenu}>
//                 {t.culture}
//               </NavLink>
//               <NavLink to={"/j"} onClick={toggleMobileMenu}>
//                 {t.gallery}
//               </NavLink>
//               <NavLink to={"/m"} onClick={toggleMobileMenu}>
//                 {t.routes}
//               </NavLink>

//               <div className="mobile-menu--controls">
//                 <select
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                 >
//                   <option value="en">{t.languages.en}</option>
//                   <option value="ru">{t.languages.ru}</option>
//                   <option value="ky">{t.languages.ky}</option>
//                 </select>
//                 <button onClick={toggleMobileMenu}>{t.signup}</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

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
      { value: "issyk-kul", label: "Issyk-Kul" },
      { value: "naryn", label: "Naryn" },
      { value: "jalal-abad", label: "Jalal-Abad" },
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
      { value: "issyk-kul", label: "Иссык-Куль" },
      { value: "naryn", label: "Нарын" },
      { value: "jalal-abad", label: "Джалал-Абад" },
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
      { value: "issyk-kul", label: "Ысык-Көл" },
      { value: "naryn", label: "Нарын" },
      { value: "jalal-abad", label: "Жалал-Абад" },
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
  const { language, setLanguage } = useContext(TravelContext);
  const nav = useNavigate();
  const [token, setToken] = useState({});

  function getPass() {
    let res = JSON.parse(localStorage.getItem("setdata")) || [];
    setToken(res);
  }
  // console.log(token, "jasi");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const t = translations[language] || translations.en;

  useEffect(() => {
    getPass();
  }, []);
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
              <NavLink to={"/"}>{t.home}</NavLink>
              <select>
                <option value="">{t.regions}</option>
                {t.regionsList.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>
              <NavLink to={"/culture"}>{t.culture}</NavLink>
              <NavLink to={"/gallery"}>{t.gallery}</NavLink>
              <NavLink to={"/routes"}>{t.routes}</NavLink>
            </div>

            <div className="header--btn">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">{t.languages.en}</option>
                <option value="ru">{t.languages.ru}</option>
                <option value="ky">{t.languages.ky}</option>
              </select>
              {!token.length ? (
                <a onClick={() => nav("/profile")}>
                  <IoPersonCircleSharp />
                </a>
              ) : (
                <button onClick={() => nav("/admin")}>{t.signup}</button>
              )}
            </div>

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
              <NavLink to={"/"} onClick={toggleMobileMenu}>
                {t.home}
              </NavLink>
              <div className="mobile-select">
                <select>
                  <option value="">{t.regions}</option>
                  {t.regionsList.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>
              <NavLink to={"/culture"} onClick={toggleMobileMenu}>
                {t.culture}
              </NavLink>
              <NavLink to={"/gallery"} onClick={toggleMobileMenu}>
                {t.gallery}
              </NavLink>
              <NavLink to={"/routes"} onClick={toggleMobileMenu}>
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
                <button onClick={toggleMobileMenu}>{t.signup}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
