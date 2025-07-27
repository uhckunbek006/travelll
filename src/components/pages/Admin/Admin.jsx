import React, { useContext, useState } from "react";
import "./Admin.scss";
import adminbg from "../../../assets/images/adminn.png";
import { useNavigate } from "react-router-dom";
import { TravelContext } from "../../context/context";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const translations = {
  en: {
    title: "Sign Up",
    subtitle: "Create an account",
    email: "Your E-mail",
    password: "Password",
    confirmPassword: "Confirm Password",
    name: "Name*",
    surname: "Surname*",
    phone: "Phone number*",
    birthDate: "Birth date*",
    rememberMe: "Remember me",
    signUp: "Sign Up",
    alreadyHave: "Already have an account?",
    login: "Login",
  },
  ru: {
    title: "Регистрация",
    subtitle: "Создать аккаунт",
    email: "Ваш E-mail",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    name: "Имя*",
    surname: "Фамилия*",
    phone: "Номер телефона*",
    birthDate: "Дата рождения*",
    rememberMe: "Запомнить меня",
    signUp: "Зарегистрироваться",
    alreadyHave: "У вас уже есть аккаунт?",
    login: "Войти",
  },
  ky: {
    title: "Катталуу",
    subtitle: "Аккаунт түзүү",
    email: "Сиздин E-mail",
    password: "Купуя сөз",
    confirmPassword: "Купуя сөздү кайталаңыз",
    name: "Атыңыз*",
    surname: "Фамилияңыз*",
    phone: "Телефон номери*",
    birthDate: "Туулган күнүңүз*",
    rememberMe: "Мени эстеп кал",
    signUp: "Катталуу",
    alreadyHave: "Аккаунтуңуз барбы?",
    login: "Кирүү",
  },
};

const Admin = () => {
  const nav = useNavigate();
  const { language } = useContext(TravelContext);
  const t = translations[language];

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [coPass, setCoPass] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [date, setDate] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [number, setNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ сырсөздү көрсөтүү
  const [showCoPassword, setShowCoPassword] = useState(false); // 👁️ кайталоону көрсөтүү

  const handleToggle = () => setIsOn(!isOn);

  const submit = async () => {
    if (pass !== coPass) {
      alert("Passwords do not match");
      return;
    }

    if (!number) {
      alert("Please enter your phone number");
      return;
    }

    const newUser = {
      email: email,
      password: pass,
      confirm_password: coPass,
      username: name,
      last_name: surName,
      phone_number: number,
      birthday: date,
    };

    localStorage.setItem("adminlog", JSON.stringify(newUser));
    console.log("Submitting user:", newUser);

    try {
      const res = await axios.post(
        `http://13.60.97.160/${language}/register/`,
        newUser
      );
      console.log("Registration successful", res.data);
      nav("/login");
    } catch (err) {
      nav("/login");
    }
  };

  return (
    <div
      id="admin"
      style={{ background: `url(${adminbg}) no-repeat center/cover` }}
    >
      <div className="adminbg">
        <div className="container">
          <div className="admin">
            <div className="admin--block">
              <h1>{t.title}</h1>
              <h2>{t.subtitle}</h2>

              <div className="admin--block__startinp">
                <input
                  type="email"
                  placeholder={t.email}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />

                <div className="admin--block__startinp--password">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={t.password}
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                  />
                  <span
                    className="toggle-visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </span>
                </div>

                <div className="admin--block__startinp--password">
                  <input
                    type={showCoPassword ? "text" : "password"}
                    placeholder={t.confirmPassword}
                    onChange={(e) => setCoPass(e.target.value)}
                    value={coPass}
                    required
                  />
                  <span
                    className="toggle-visibility"
                    onClick={() => setShowCoPassword(!showCoPassword)}
                  >
                    {!showCoPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </span>
                </div>
              </div>

              <div className="admin--block__centerinp">
                <div className="admin--block__centerinp--name">
                  <h5>{t.name}</h5>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>

                <div className="admin--block__centerinp--name">
                  <h5>{t.surname}</h5>
                  <input
                    type="text"
                    onChange={(e) => setSurName(e.target.value)}
                    value={surName}
                    required
                  />
                </div>

                <div
                  className="admin--block__centerinp--name"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <h5>{t.phone}</h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <PhoneInput
                      country={"kg"}
                      value={number}
                      onChange={(phone) => setNumber(phone)}
                      enableSearch
                      onlyCountries={["kg", "kz", "ru", "fr", "us", "uz"]}
                      placeholder="+996 ___ __ __ __"
                      inputStyle={{ width: "230px", height: "40px" }}
                      buttonStyle={{
                        border: "none",
                        background: "transparent",
                      }}
                    />
                  </div>
                </div>

                <div className="admin--block__centerinp--name">
                  <h5>{t.birthDate}</h5>
                  <input
                    type="date"
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);

                      if (selectedDate > today) {
                        alert(
                          language === "en"
                            ? "You cannot select a future date."
                            : language === "ru"
                            ? "Вы не можете выбрать будущую дату."
                            : "Келечектеги күндү тандабаңыз."
                        );
                        setDate("");
                      } else {
                        setDate(e.target.value);
                      }
                    }}
                    value={date}
                    required
                  />
                </div>
              </div>

              <div className="admin--block__me">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isOn}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
                <h3>{t.rememberMe}</h3>
              </div>

              <button onClick={submit}>{t.signUp}</button>
              <h4>
                {t.alreadyHave}{" "}
                <span onClick={() => nav("/login")}>{t.login}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
