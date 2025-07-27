import React from "react";
import { FaFacebook, FaInstagram, FaVk } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import inst from "../../../assets/images/inst.svg";
import facebook from "../../../assets/images/facebook.svg";
import vkk from "../../../assets/images/vkk.svg";
import emaill from "../../../assets/images/emaill.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--block1">
            <h3>logo</h3>
            <div className="footer--block1__icons">
              <img
                src={inst}
                alt="img"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/travelers_kg/",
                    "_blank"
                  )
                }
              />
              <img
                src={facebook}
                alt="img"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/travelers.kg/?locale=ru_RU/",
                    "_blank"
                  )
                }
              />
              <img
                src={vkk}
                alt="img"
                onClick={() =>
                  window.open("https://vk.com/travel_kg/", "_blank")
                }
              />
              <img
                src={emaill}
                alt="img"
                onClick={() =>
                  window.open(
                    "https://bishkek.adresa-telefony.ru/travelers_kg-109216.html/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div className="footer--block2">
            <h1>Home</h1>
            <div className="footer--block2__text">
              <h2>Attractions</h2>
              <h2>Map</h2>
            </div>
          </div>
          <div className="footer--block3">
            <h1>Regions</h1>
            <div className="footer--block3__text">
              <h2>Batken</h2>
              <h2>Jalal-Abad</h2>
              <h2>Issyk_kul</h2>
              <h2>Naryn</h2>
              <h2>Osh</h2>
              <h2>Talas</h2>
              <h2>Chyi</h2>
            </div>
          </div>
          <div className="footer--block4">
            <h1>Culture</h1>
            <div className="footer--block4__text">
              <h2>Games</h2>
              <h2>National instruments</h2>
              <h2>National clothes</h2>
              <h2>Hand crafts</h2>
              <h2>Currency</h2>
              <h2>Kitchen</h2>
            </div>
          </div>
          <div className="footer--block5">
            <h1>Gallery</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
