import React, { useState, useEffect, useContext } from "react";
import "./Personn.scss";
import { LuSearch } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { RxPencil2 } from "react-icons/rx";
import {
  MdOutlineCameraAlt,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import PhoneInput from "react-phone-input-2";

import logobgper from "../../../../assets/images/culturePage/culture page/personal.png";
import logoper from "../../../../assets/images/culturePage/culture page/pro55.svg";
import { TravelContext } from "../../../context/context";

const translations = {
  en: {
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm password",
    name: "Name",
    surname: "Surname",
    phone: "Phone number*",
    birthdate: "Birth date*",
    futureDate: "You cannot select a future date.",
    personalInfo: "Personal information",
    editCover: "Edit Cover Photo",
  },
  ru: {
    email: "Почта",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    name: "Имя",
    surname: "Фамилия",
    phone: "Номер телефона*",
    birthdate: "Дата рождения*",
    futureDate: "Вы не можете выбрать будущую дату.",
    personalInfo: "Личная информация",
    editCover: "Изменить обложку",
  },
  ky: {
    email: "Электрондук почта",
    password: "Сырсөз",
    confirmPassword: "Сырсөздү кайтала",
    name: "Аты",
    surname: "Фамилиясы",
    phone: "Телефон номери*",
    birthdate: "Туулган күнү*",
    futureDate: "Келечектеги күндү тандабаңыз.",
    personalInfo: "Жеке маалыматтар",
    editCover: "Капкак сүрөттү өзгөртүү",
  },
};

const Personn = () => {
  const { language } = useContext(TravelContext);
  const t = translations[language] || translations.en;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("adminlog"));
    if (stored) {
      setName(stored.last_name || "");
      setSurname(stored.username || "");
      setEmail(stored.email || "");
      setPassword(stored.password || "");
      setConfirmPassword(stored.confirm_password || "");
      setPhone(stored.phone_number || "");
      setDate(stored.birthday || "");
    }
  }, []);

  return (
    <div id="personn">
      <div className="container">
        <div className="personn">
          <div className="personn--top">
            <div className="personn--top__input">
              <div className="personn--top__input--inp">
                <a>
                  <LuSearch />
                </a>
                <input type="text" />
              </div>
              <h1>
                <GoArrowUpRight />
              </h1>
            </div>

            <div className="personn--top__name">
              <div className="personn--top__name--text">
                <h2>Moscow, Russia</h2>
              </div>
              <img
                src="https://www.shareicon.net/data/256x256/2015/12/10/685100_man_512x512.png"
                alt="profile"
              />
            </div>
          </div>

         
          <div
            className="personn--personal"
            style={{ background: `url(${logobgper}) no-repeat center/cover` }}
          >
            <div className="personn--personal__left">
              <img src={logoper} alt="Profile logo" />
              <a>
                <MdOutlineCameraAlt />
              </a>
              <div className="personn--personal__left--img">
                <h2>Moscow, Russia</h2>
              </div>
            </div>
            <div className="personn--personal__right">
              {/* <h4>{t.editCover}</h4> */}
              {/* <h3>
                <RxPencil2 />
              </h3> */}
            </div>
          </div>

      
          <div className="personn--inputs">
            <h1>{t.personalInfo}</h1>

            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="personn--inputs__pass">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </span>
            </div>

            <div className="personn--inputs__pass">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder={t.confirmPassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </span>
            </div>

         
            <div className="personn--inputs__inpname">
              <div className="personn--inputs__inpname--inp">
                <h2>{t.name}</h2>
                <input
                  type="text"
                  placeholder={t.name}
                  value={surname}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="personn--inputs__inpname--inp">
                <h2>{t.surname}</h2>
                <input
                  type="text"
                  placeholder={t.surname}
                  value={name}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <h2>{t.phone}</h2>
                <PhoneInput
                  country={"kg"}
                  value={phone}
                  onChange={setPhone}
                  enableSearch
                  onlyCountries={["kg", "kz", "ru", "fr", "us", "uz"]}
                  placeholder="+996 ___ __ __ __"
                  inputStyle={{ width: "230px", height: "40px" }}
                  buttonStyle={{ border: "none", background: "transparent" }}
                />
              </div>

              <div className="personn--inputs__inpname--inp">
                <h2>{t.birthdate}</h2>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    if (selectedDate > today) {
                      alert(t.futureDate);
                      setDate("");
                    } else {
                      setDate(e.target.value);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personn;
