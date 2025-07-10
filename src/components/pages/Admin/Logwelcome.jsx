// import React, { useContext, useState } from "react";
// import "./Logwelcome.scss";
// import adminbg from "../../../assets/images/adminn.png";
// import { useNavigate } from "react-router-dom";
// import { TravelContext } from "../../context/context";

// const translations = {
//   en: {
//     title: "Login",
//     welcome: "Welcome!",
//     subtitle: "Log in to your account",
//     emailPlaceholder: "Your E-mail",
//     passwordPlaceholder: "Password",
//     confirmPlaceholder: "Confirm password",
//     remember: "Remember me",
//     forgot: "Forgot password",
//     login: "Login",
//     noAccount: "Don’t have an account ?",
//     signup: "Sign up",
//   },
//   ru: {
//     title: "Войти",
//     welcome: "Добро пожаловать!",
//     subtitle: "Войдите в свой аккаунт",
//     emailPlaceholder: "Ваш E-mail",
//     passwordPlaceholder: "Пароль",
//     confirmPlaceholder: "Подтвердите пароль",
//     remember: "Запомнить меня",
//     forgot: "Забыли пароль",
//     login: "Войти",
//     noAccount: "Нет аккаунта?",
//     signup: "Зарегистрироваться",
//   },
//   ky: {
//     title: "Кирүү",
//     welcome: "Кош келиңиз!",
//     subtitle: "Аккаунтка кириңиз",
//     emailPlaceholder: "Сиздин E-mail",
//     passwordPlaceholder: "Сырсөз",
//     confirmPlaceholder: "Сырсөздү кайталаңыз",
//     remember: "Эсимде сакта",
//     forgot: "Сырсөздү унуттуңузбу",
//     login: "Кирүү",
//     noAccount: "Аккаунтуңуз жокпу?",
//     signup: "Катталуу",
//   },
// };

// const Logwelcome = () => {
//   const nav = useNavigate();
//   const [isOn, setIsOn] = useState(false);
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [coPass, setCoPass] = useState("");
//   const {language} = useContext(TravelContext)
//   const t = translations[language];

//   const handleToggle = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div
//       id="logwec"
//       style={{
//         background: `url(${adminbg}) no-repeat center/cover`,
//       }}
//     >
//       <div className="welclogBg">
//         <div className="container">
//           <div className="logwelc">
//             <div className="logwelc--block">
//               <h1>{t.title}</h1>
//               <h2>{t.welcome}</h2>
//               <h3>{t.subtitle}</h3>
//               <input
//                 type="text"
//                 placeholder={t.emailPlaceholder}
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//               />
//               <input
//                 type="text"
//                 placeholder={t.passwordPlaceholder}
//                 onChange={(e) => setPass(e.target.value)}
//                 value={pass}
//               />
//               <input
//                 type="text"
//                 placeholder={t.confirmPlaceholder}
//                 onChange={(e) => setCoPass(e.target.value)}
//                 value={coPass}
//               />
//               <div className="logwelc--block__icon">
//                 <div className="logwelc--block__icon--ion">
//                   <label className="switch">
//                     <input
//                       type="checkbox"
//                       checked={isOn}
//                       onChange={handleToggle}
//                     />
//                     <span className="slider"></span>
//                   </label>
//                   <h4>{t.remember}</h4>
//                 </div>
//                 <h5
//                   onClick={() => nav("/logpassword")}
//                   style={{
//                     cursor: "pointer",
//                   }}
//                 >
//                   {t.forgot}
//                 </h5>
//               </div>
//               <button>{t.login}</button>
//               <h6>
//                 {t.noAccount}{" "}
//                 <span
//                   style={{
//                     cursor: "pointer",
//                   }}
//                   onClick={() => nav("/signup")}
//                 >
//                   {t.signup}
//                 </span>
//               </h6>

           
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logwelcome;




import React, { useContext, useState } from "react";
import "./Logwelcome.scss";
import adminbg from "../../../assets/images/adminn.png";
import { useNavigate } from "react-router-dom";
import { TravelContext } from "../../context/context";
import axios from "axios";

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
  const { language } = useContext(TravelContext);
  const t = translations[language];

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const login = async () => {
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
      alert(
        "Login error: " + JSON.stringify(err?.response?.data || err.message)
      );
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
              <input
                type="text"
                placeholder={t.passwordPlaceholder}
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
              <input
                type="text"
                placeholder={t.confirmPlaceholder}
                onChange={(e) => setCoPass(e.target.value)}
                value={coPass}
              />
              <div className="logwelc--block__icon">
                <div className="logwelc--block__icon--ion">
                  <label className="switch">
                    <input
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
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {t.forgot}
                </h5>
              </div>
              <button onClick={login}>{t.login}</button>
              <h6>
                {t.noAccount}{" "}
                <span
                  style={{
                    cursor: "pointer",
                  }}
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