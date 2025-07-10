// import React, { useContext, useState } from "react";
// import "./Admin.scss";
// import adminbg from "../../../assets/images/adminn.png";
// import { useNavigate } from "react-router-dom";
// import { TravelContext } from "../../context/context";

// const translations = {
//   en: {
//     title: "Sign Up",
//     subtitle: "Create an account",
//     email: "Your E-mail",
//     password: "Password",
//     confirmPassword: "Confirm Password",
//     name: "Name*",
//     surname: "Surname*",
//     phone: "Phone number*",
//     birthDate: "Birth date*",
//     rememberMe: "Remember me",
//     signUp: "Sign Up",
//     alreadyHave: "Already have an account?",
//     login: "Login",
//   },
//   ru: {
//     title: "Регистрация",
//     subtitle: "Создать аккаунт",
//     email: "Ваш E-mail",
//     password: "Пароль",
//     confirmPassword: "Подтвердите пароль",
//     name: "Имя*",
//     surname: "Фамилия*",
//     phone: "Номер телефона*",
//     birthDate: "Дата рождения*",
//     rememberMe: "Запомнить меня",
//     signUp: "Зарегистрироваться",
//     alreadyHave: "У вас уже есть аккаунт?",
//     login: "Войти",
//   },
//   ky: {
//     title: "Катталуу",
//     subtitle: "Аккаунт түзүү",
//     email: "Сиздин E-mail",
//     password: "Купуя сөз",
//     confirmPassword: "Купуя сөздү кайталаңыз",
//     name: "Атыңыз*",
//     surname: "Фамилияңыз*",
//     phone: "Телефон номери*",
//     birthDate: "Туулган күнүңүз*",
//     rememberMe: "Мени эстеп кал",
//     signUp: "Катталуу",
//     alreadyHave: "Аккаунтуңуз барбы?",
//     login: "Кирүү",
//   },
// };

// const Admin = () => {
//   const nav = useNavigate();
//   const {language} = useContext(TravelContext)
//   const t = translations[language];

//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [coPass, setCoPass] = useState("");
//   const [name, setName] = useState("");
//   const [surName, setSurName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [date, setDate] = useState("");
//   const [isOn, setIsOn] = useState(false);

//   const handleToggle = () => setIsOn(!isOn);

//   return (
//     <div
//       id="admin"
//       style={{ background: `url(${adminbg}) no-repeat center/cover` }}
//     >
//       <div className="adminbg">
//         <div className="container">
//           <div className="admin">
//             <div className="admin--block">
//               <h1>{t.title}</h1>
//               <h2>{t.subtitle}</h2>
//               <div className="admin--block__startinp">
//                 <input
//                   type="text"
//                   placeholder={t.email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                 />
//                 <input
//                   type="text"
//                   placeholder={t.password}
//                   onChange={(e) => setPass(e.target.value)}
//                   value={pass}
//                 />
//                 <input
//                   type="text"
//                   placeholder={t.confirmPassword}
//                   onChange={(e) => setCoPass(e.target.value)}
//                   value={coPass}
//                 />
//               </div>
//               <div className="admin--block__centerinp">
//                 <div className="admin--block__centerinp--name">
//                   <h5>{t.name}</h5>
//                   <input
//                     type="text"
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                   />
//                 </div>
//                 <div className="admin--block__centerinp--name">
//                   <h5>{t.surname}</h5>
//                   <input
//                     type="text"
//                     onChange={(e) => setSurName(e.target.value)}
//                     value={surName}
//                   />
//                 </div>
//                 <div className="admin--block__centerinp--name">
//                   <h5>{t.phone}</h5>
//                   <input
//                     type="tel"
//                     onChange={(e) => setPhone(e.target.value)}
//                     value={phone}
//                   />
//                 </div>
//                 <div className="admin--block__centerinp--name">
//                   <h5>{t.birthDate}</h5>
//                   <input
//                     type="date"
//                     onChange={(e) => setDate(e.target.value)}
//                     value={date}
//                   />
//                 </div>
//               </div>
//               <div className="admin--block__me">
//                 <label className="switch">
//                   <input
//                     type="checkbox"
//                     checked={isOn}
//                     onChange={handleToggle}
//                   />
//                   <span className="slider"></span>
//                 </label>
//                 <h3>{t.rememberMe}</h3>
//               </div>
//               <button>{t.signUp}</button>
//               <h4>
//                 {t.alreadyHave}{" "}
//                 <span onClick={() => nav("/login")}>{t.login}</span>
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;










import React, { useContext, useState } from "react";
import "./Admin.scss";
import adminbg from "../../../assets/images/adminn.png";
import { useNavigate } from "react-router-dom";
import { TravelContext } from "../../context/context";
import axios from "axios";

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
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [isOn, setIsOn] = useState(false);

  const submit = async () => {
    if (pass !== coPass) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      email: email,
      password: pass,
      confirm_password: coPass,
      username: name,
      last_name: surName,
      phone_number: phone,
      birthday: date,
    };

    try {
      const res = await axios.post("http://13.60.97.160/en/register/", newUser);
      console.log("Registration successful", res.data);
      nav("/login");
    } catch (err) {
      console.error("Registration failed", err);
      alert(
        "Registration error: " +
          JSON.stringify(err?.response?.data || err.message)
      );
    }
  };

  const handleToggle = () => setIsOn(!isOn);

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
                  type="text"
                  placeholder={t.email}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="text"
                  placeholder={t.password}
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
                <input
                  type="text"
                  placeholder={t.confirmPassword}
                  onChange={(e) => setCoPass(e.target.value)}
                  value={coPass}
                />
              </div>
              <div className="admin--block__centerinp">
                <div className="admin--block__centerinp--name">
                  <h5>{t.name}</h5>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="admin--block__centerinp--name">
                  <h5>{t.surname}</h5>
                  <input
                    type="text"
                    onChange={(e) => setSurName(e.target.value)}
                    value={surName}
                  />
                </div>
                <div className="admin--block__centerinp--name">
                  <h5>{t.phone}</h5>
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="admin--block__centerinp--name">
                  <h5>{t.birthDate}</h5>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
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