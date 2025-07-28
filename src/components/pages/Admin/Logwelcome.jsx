import React, { useContext, useState, useEffect } from "react";
import "./Logwelcome.scss";
import adminbg from "../../../assets/images/adminn.png";
import { useNavigate } from "react-router-dom";
import { TravelContext } from "../../context/context";
import axios from "axios";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const translations = {
  en: {
    title: "Login",
    welcome: "Welcome!",
    subtitle: "Log in to your account",
    emailPlaceholder: "Your E-mail",
    passwordPlaceholder: "Password",
    confirmPlaceholder: "Confirm password",
    remember: "Remember me",
    forgot: "Forgot password",
    login: "Login",
    noAccount: "Don’t have an account ?",
    signup: "Sign up",
  },
  ru: {
    title: "Войти",
    welcome: "Добро пожаловать!",
    subtitle: "Войдите в свой аккаунт",
    emailPlaceholder: "Ваш E-mail",
    passwordPlaceholder: "Пароль",
    confirmPlaceholder: "Подтвердите пароль",
    remember: "Запомнить меня",
    forgot: "Забыли пароль",
    login: "Войти",
    noAccount: "Нет аккаунта?",
    signup: "Зарегистрироваться",
  },
  ky: {
    title: "Кирүү",
    welcome: "Кош келиңиз!",
    subtitle: "Аккаунтка кириңиз",
    emailPlaceholder: "Сиздин E-mail",
    passwordPlaceholder: "Сырсөз",
    confirmPlaceholder: "Сырсөздү кайталаңыз",
    remember: "Эсимде сакта",
    forgot: "Сырсөздү унуттуңузбу",
    login: "Кирүү",
    noAccount: "Аккаунтуңуз жокпу?",
    signup: "Катталуу",
  },
};

const Logwelcome = () => {
  const nav = useNavigate();
  const [isOn, setIsOn] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [coPass, setCoPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCoPassword, setShowCoPassword] = useState(false);
  const { language } = useContext(TravelContext);
  const t = translations[language];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("adminlog"));
    if (stored) {
      setEmail(stored.email || "");
      setPass(stored.password || "");
      setCoPass(stored.confirm_password || "");
    }
  }, []);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const login = async () => {
    if (!email || !pass) {
      alert("Please fill in all required fields");
      return;
    }

    if (pass !== coPass) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      email: email,
      password: pass,
    };

    try {
      const res = await axios.post("http://13.60.97.160/en/login/", newUser);
      console.log("Login successful", res.data);
      localStorage.setItem("setdata", JSON.stringify(res.data));
      nav("/");
    } catch (err) {
      console.error("Login failed", err);
      alert(nav("/"));
    }
  };

  return (
    <div
      id="logwec"
      style={{
        background: `url(${adminbg}) no-repeat center/cover`,
      }}
    >
      <div className="welclogBg">
        <div className="container">
          <div className="logwelc">
            <div className="logwelc--block">
              <h1>{t.title}</h1>
              <h2>{t.welcome}</h2>
              <h3>{t.subtitle}</h3>

              <input
                type="text"
                placeholder={t.emailPlaceholder}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <div className="logwelc--block__password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.passwordPlaceholder}
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </span>
              </div>
              <div className="logwelc--block__password">
                <input
                  type={showCoPassword ? "text" : "password"}
                  placeholder={t.confirmPlaceholder}
                  onChange={(e) => setCoPass(e.target.value)}
                  value={coPass}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowCoPassword(!showCoPassword)}
                >
                  {!showCoPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </span>
              </div>

              <div className="logwelc--block__icon">
                <div className="logwelc--block__icon--ion">
                  <label className="switch">
                    <in
                      put
                      type="checkbox"
                      checked={isOn}
                      onChange={handleToggle}
                    />
                    <span className="slider"></span>
                  </label>
                  <h4>{t.remember}</h4>
                </div>
                <h5
                  onClick={() => nav("/logpassword")}
                  style={{ cursor: "pointer" }}
                >
                  {t.forgot}
                </h5>
              </div>

              <button onClick={login}>{t.login}</button>

              <h6>
                {t.noAccount}{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => nav("/signup")}
                >
                  {t.signup}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logwelcome;
