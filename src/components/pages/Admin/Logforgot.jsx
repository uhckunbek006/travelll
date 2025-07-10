// import React, { useContext, useState } from "react";
// import "./Logforgot.scss";
// import adminbg from "../../../assets/images/adminn.png";
// import { TravelContext } from "../../context/context";
// import { useNavigate } from "react-router-dom";

// // 🔤 Көп тилдүү тексттер
// const translations = {
//   en: {
//     title: "Forgot password",
//     description:
//       "Enter your email for the verification process, we will send code to your email",
//     emailPlaceholder: "Your E-mail",
//     back: "Back to login",
//     continue: "Continue",
//   },
//   ru: {
//     title: "Забыли пароль",
//     description:
//       "Введите ваш email для подтверждения, мы отправим код на ваш email",
//     emailPlaceholder: "Ваш E-mail",
//     back: "Вернуться к входу",
//     continue: "Продолжить",
//   },
//   ky: {
//     title: "Купуя сөздү унуттуңузбу",
//     description: "Тастыктоо үчүн email киргизиңиз, биз сизге код жөнөтөбүз",
//     emailPlaceholder: "Сиздин E-mail",
//     back: "Кирүү бетине кайтуу",
//     continue: "Улантуу",
//   },
// };

// const Logforgot = () => {
//   const [email, setEmail] = useState("");
//   const { language } = useContext(TravelContext);
//   const nav = useNavigate()

//   const t = translations[language];

//   return (
//     <div
//       id="logforgot"
//       style={{
//         background: `url(${adminbg}) no-repeat center/cover`,
//       }}
//     >
//       <div className="forlogBg">
//         <div className="container">
//           <div className="logforgot">
//             <div className="logforgot--blocks">
//               <div className="logforgot--blocks__block">
//                 <h1>{t.title}</h1>
//                 <p>{t.description}</p>
//                 <input
//                   type="text"
//                   placeholder={t.emailPlaceholder}
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                 />
//                 <h2 style={{ cursor: "pointer" }}>{t.back}</h2>
//                 <button onClick={() => nav("/fourcode")}>{t.continue}</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logforgot;





import React, { useContext, useState } from "react";
import "./Logforgot.scss";
import adminbg from "../../../assets/images/adminn.png";
import { TravelContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const translations = {
  en: {
    title: "Forgot password",
    description:
      "Enter your email for the verification process, we will send code to your email",
    emailPlaceholder: "Your E-mail",
    back: "Back to login",
    continue: "Continue",
  },
  ru: {
    title: "Забыли пароль",
    description:
      "Введите ваш email для подтверждения, мы отправим код на ваш email",
    emailPlaceholder: "Ваш E-mail",
    back: "Вернуться к входу",
    continue: "Продолжить",
  },
  ky: {
    title: "Купуя сөздү унуттуңузбу",
    description: "Тастыктоо үчүн email киргизиңиз, биз сизге код жөнөтөбүз",
    emailPlaceholder: "Сиздин E-mail",
    back: "Кирүү бетине кайтуу",
    continue: "Улантуу",
  },
};

const Logforgot = () => {
  const [email, setEmail] = useState("");
  const { language } = useContext(TravelContext);
  const nav = useNavigate();

  const logforgot = async () => {
    try {
      const res = await axios.post(
        "http://13.60.97.160/en/password_reset/",
        email
      );
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

  function addlogin() {
    logforgot();
    nav("/fourcode");
  }
  const t = translations[language];

  return (
    <div
      id="logforgot"
      style={{
        background: `url(${adminbg}) no-repeat center/cover`,
      }}
    >
      <div className="forlogBg">
        <div className="container">
          <div className="logforgot">
            <div className="logforgot--blocks">
              <div className="logforgot--blocks__block">
                <h1>{t.title}</h1>
                <p>{t.description}</p>
                <input
                  type="text"
                  placeholder={t.emailPlaceholder}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <h2 style={{ cursor: "pointer" }}>{t.back}</h2>
                <button onClick={() => addlogin()}>{t.continue}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logforgot;