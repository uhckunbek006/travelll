import React, { useState, useEffect, useContext } from "react";
import "./Personn.scss";
import { LuSearch } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { RxPencil2 } from "react-icons/rx";
import { MdOutlineCameraAlt } from "react-icons/md";
import PhoneInput from "react-phone-input-2";

import logobgper from "../../../../assets/images/culturePage/culture page/personal.png";
import logoper from "../../../../assets/images/culturePage/culture page/pro55.svg";
import { TravelContext } from "../../../context/context";

const Personn = () => {
  const { language } = useContext(TravelContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("setdata")) || {};
    if (storedData.user) {
      setName(storedData.user.username || "");
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
                {/* <h1>{name.username}</h1> */}
                <h2>Moscow, Rossia</h2>
              </div>

              <img
                src="https://www.shareicon.net/data/256x256/2015/12/10/685100_man_512x512.png"
                alt="imgg"
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
                <h2>Moscow, Rossia</h2>
              </div>
            </div>
            <div className="personn--personal__right">
              <h4>Edit Cover Photo</h4>
              <h3>
                <RxPencil2 />
              </h3>
            </div>
          </div>

          <div className="personn--inputs">
            <h1>Personal information</h1>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="personn--inputs__inpname">
              <div className="personn--inputs__inpname--inp">
                <h2>Name*</h2>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="personn--inputs__inpname--inp">
                <h2>Surname*</h2>
                <input
                  type="text"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <h2>Phone number*</h2>
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
                <h2>Birth date*</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personn;
