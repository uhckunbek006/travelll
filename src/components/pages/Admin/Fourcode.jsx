// import React, { useRef, useContext } from "react";
// import "./Fourcode.scss";
// import bgFour from "../../../assets/images/adminn.png";
// import { useNavigate } from "react-router-dom";
// import { TravelContext } from "../../context/context";

// const translations = {
//   en: {
//     title: "Enter 4 digit code",
//     subtitle:
//       "A four-digit code should have come to your email address that you indicated.",
//     confirm: "Confirm",
//     cancel: "Cancel",
//   },
//   ru: {
//     title: "Введите 4-значный код",
//     subtitle: "На вашу электронную почту должен был прийти 4-значный код.",
//     confirm: "Подтвердить",
//     cancel: "Отмена",
//   },
//   ky: {
//     title: "4 орундуу кодду киргизиңиз",
//     subtitle:
//       "Сиз көрсөткөн электрондук почтаңызга 4 орундуу код келген болушу керек.",
//     confirm: "Тастыктоо",
//     cancel: "Жокко чыгаруу",
//   },
// };

// const Fourcode = () => {
//   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
//   const buttonRef = useRef(null);
//   const nav = useNavigate();
//   const { language } = useContext(TravelContext);
//   const t = translations[language];

//   const handleInput = (e, index) => {
//     const value = e.target.value;
//     if (value.length === 1 && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     } else {
//       buttonRef.current.focus();
//     }
//   };

//   return (
//     <div
//       id="fourcode"
//       style={{
//         background: `url(${bgFour}) no-repeat center/cover`,
//       }}
//     >
//       <div className="bggourr">
//         <div className="container">
//           <div className="fourcode">
//             <div className="fourcode--blocks">
//               <div className="fourcode--blocks__block">
//                 <h1>{t.title}</h1>
//                 <p>{t.subtitle}</p>
//                 <div className="fourcode--blocks__block--four">
//                   {inputRefs.map((el, idx) => (
//                     <input
//                       key={idx}
//                       type="number"
//                       maxLength={1}
//                       ref={el}
//                       onInput={(e) => handleInput(e, idx)}
//                     />
//                   ))}
//                 </div>
//                 <div className="fourcode--blocks__block--btn">
//                   <button onClick={() => nav("/error")}>{t.confirm}</button>
//                   <button ref={buttonRef}>{t.cancel}</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fourcode;




import React, { useRef, useContext } from "react";
import "./Fourcode.scss";
import bgFour from "../../../assets/images/adminn.png";
import { useNavigate } from "react-router-dom";
import { TravelContext } from "../../context/context";

const translations = {
  en: {
    title: "Enter 4 digit code",
    subtitle:
      "A four-digit code should have come to your email address that you indicated.",
    confirm: "Confirm",
    cancel: "Cancel",
  },
  ru: {
    title: "Введите 4-значный код",
    subtitle: "На вашу электронную почту должен был прийти 4-значный код.",
    confirm: "Подтвердить",
    cancel: "Отмена",
  },
  ky: {
    title: "4 орундуу кодду киргизиңиз",
    subtitle:
      "Сиз көрсөткөн электрондук почтаңызга 4 орундуу код келген болушу керек.",
    confirm: "Тастыктоо",
    cancel: "Жокко чыгаруу",
  },
};

const Fourcode = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const buttonRef = useRef(null);
  const nav = useNavigate();
  const { language } = useContext(TravelContext);
  const t = translations[language];

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else {
      buttonRef.current.focus();
    }
  };

  return (
    <div
      id="fourcode"
      style={{
        background: `url(${bgFour}) no-repeat center/cover`,
      }}
    >
      <div className="bggourr">
        <div className="container">
          <div className="fourcode">
            <div className="fourcode--blocks">
              <div className="fourcode--blocks__block">
                <h1>{t.title}</h1>
                <p>{t.subtitle}</p>
                <div className="fourcode--blocks__block--four">
                  {inputRefs.map((el, idx) => (
                    <input
                      key={idx}
                      type="number"
                      maxLength={1}
                      ref={el}
                      onInput={(e) => handleInput(e, idx)}
                    />
                  ))}
                </div>
                <div className="fourcode--blocks__block--btn">
                  <button onClick={() => nav("/")}>{t.confirm}</button>
                  <button ref={buttonRef}>{t.cancel}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourcode;