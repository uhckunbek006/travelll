import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelContext } from "../../context/context";
import "./detail.scss";
import { FaMapLocation, FaRegHeart } from "react-icons/fa6";
import { RiHotelBedLine } from "react-icons/ri";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { TbCalendarMonth } from "react-icons/tb";
import routeImg1 from "../../../assets/images/routeImg1.svg";
import routeImg2 from "../../../assets/images/routeImg2.svg";
import routeImg3 from "../../../assets/images/routeImg3.svg";
import routeImg4 from "../../../assets/images/routeImg4.svg";
import routeImg5 from "../../../assets/images/routeImg5.svg";
import placesMap from "../../../assets/images/Rectangle 147.png";
import hotelMap from     "../../../assets/images/div.prw_rup.png";
import iconDot from "../../../assets/images/Icon.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import box1 from "../../../assets/images/bed.svg";
import box2 from "../../../assets/images/Vector.svg";
import box3 from "../../../assets/images/Group 1.svg";
import box4 from "../../../assets/images/pet icon.svg";
import { PiBuilding } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import show1 from "../../../assets/images/kitchen.svg";
import show2 from "../../../assets/images/Group.svg";
import show3 from "../../../assets/images/laundry 1.svg";
import show4 from "../../../assets/images/tv.svg";
import show5 from "../../../assets/images/wifi.svg";
import show6 from "../../../assets/images/balcony 1.svg";
import dayli from "../../../assets/images/healthicons_health-data-security-outline.svg";
import like from "../../../assets/images/like.svg";
import follow from "../../../assets/images/followw.svg";
import followIcon from "../../../assets/images/follow.svg";
import service1 from "../../../assets/images/service1.svg";
import service2 from "../../../assets/images/service2.svg";
import service3 from "../../../assets/images/service3.svg";

const translations = {
  en: {
    where: "Where?",
    go: "Go",
    talas: "Talas",
    chui: "Chui",
    kyl: "Issyk-Kyl",
    jalal: "Jalal-Abad",
    naryn: "Naryn",
    osh: "Osh",
    batken: "Batken",
    km: "356 km",
    hours72: "72 hours",
    hours78: "7-8 hours",
    tickets: "5 tickets",
  },
  ru: {
    where: "Куда?",
    go: "Поехали",
    talas: "Талас",
    chui: "Чуй",
    kyl: "Иссык-Куль",
    jalal: "Джалал-Абад",
    naryn: "Нарын",
    osh: "Ош",
    batken: "Баткен",
    km: "356 км",
    hours72: "72 часа",
    hours78: "7-8 часов",
    tickets: "5 билетов",
  },
  ky: {
    where: "Каякка?",
    go: "Жөнө",
    talas: "Талас",
    chui: "Чүй",
    kyl: "Ысык-Көл",
    jalal: "Жалал-Абад",
    naryn: "Нарын",
    osh: "Ош",
    batken: "Баткен",
    km: "356 км",
    hours72: "72 саат",
    hours78: "7-8 саат",
    tickets: "5 билет",
  },
};

const Detail = () => {
  const { language } = useContext(TravelContext);
  const { placeId } = useParams();
  const [placeDetail, setPlaceDetail] = useState([]);
  const t = translations[language];
  const [hotel, setHotel] = useState([]);
  const [activ, setActiv] = useState(1);
  const [kitchen, setKitchen] = useState([]);

  async function addPlace() {
    let res = await axios(`http://13.60.97.160/${language}/place/${placeId}/`);
    let { data } = res;
    setPlaceDetail(data);
  }

  async function addHotel() {
    let res = await axios(`http://13.60.97.160/${language}/place/1/hotel`);
    let { data } = res;
    setHotel(data);
  }

  async function addKitchen() {
    let res = await axios(`http://13.60.97.160/en/place/1/restaurant/`);
    let { data } = res;
    setKitchen(data);
  }

  console.log(kitchen, "kitchen");

  useEffect(() => {
    addPlace();
    addHotel();
    addKitchen();
    window.scrollTo(0, 0);
  }, [placeId, language]);

  return (
    <div id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail--text">
            <img src={placeDetail?.place_image} alt="img" />
            <div className="detail--text__name">
              <h1>{placeDetail?.place_name}</h1>
              <p>{placeDetail?.description}</p>
            </div>
          </div>

          <div className="detail--buttons">
            <button onClick={() => setActiv(1)}>
              <FaMapLocation />
              <span>Places</span>
            </button>
            <button onClick={() => setActiv(2)}>
              <RiHotelBedLine />
              <span>Hotels</span>
            </button>
            <button onClick={() => setActiv(3)}>
              <CgSmartHomeRefrigerator />
              <span>kitchen</span>
            </button>
            <button onClick={() => setActiv(4)}>
              <TbCalendarMonth />

              <span>Event</span>
            </button>
            <button onClick={() => setActiv(5)}>
              <HiOutlineBuildingLibrary />
              <span>Attractions</span>
            </button>
          </div>

          {activ === 1 && (
            <div className="detail--places">
              <div className="detail--places__where">
                <ul>
                  <li>Where to go</li>
                </ul>

                <div className="detail--places__where--inputs">
                  <input type="text" placeholder="Where?" />
                  <input type="text" placeholder="Where?" />
                  <button>Go</button>
                </div>

                <div
                  className="detail--places__where--block"
                  // style={{ display: modal ? "flex" : "none" }}
                >
                  <div className="detail--places__where--block__talas">
                    <img src={routeImg1} alt="talas" />
                    <h1>{t.km}</h1>
                  </div>
                  <div className="detail--places__where--block__talas">
                    <img src={routeImg2} alt="chui" />
                    <h1>{t.hours72}</h1>
                  </div>
                  <div className="detail--places__where--block__talas">
                    <img src={routeImg3} alt="kyl" />
                    <h1>{t.hours78}</h1>
                  </div>
                  <div className="detail--places__where--block__talas">
                    <img src={routeImg4} alt="jalal" />
                    <h1>{t.hours78}</h1>
                  </div>
                  <div className="detail--places__where--block__talas">
                    <img src={routeImg5} alt="naryn" />
                    <h1>{t.tickets}</h1>
                  </div>
                </div>

                <img src={placesMap} alt="img" className="whereImg" />
              </div>
            </div>
          )}

          {activ === 2 && (
            <div className="detail--hotel">
              <img src={hotelMap} alt="img" className="hotelBigImg" />
              <div className="detail--hotel__cards">
                <div className="detail--hotel__cards--title">
                  <h1>The best hotels nearby</h1>
                  <a href="#">Показать все</a>
                </div>
                <div className="detail--hotel__cards--block">
                  <div className="detail--hotel__cards--block__card">
                    <img src={hotel[0]?.hotel_images[0]?.hotel_image} alt="" />
                    <img src={follow} alt="img" className="followHotelImg" />
                    <div className="detail--hotel__cards--block__card--text">
                      <h3>{hotel[0]?.hotel_name}</h3>
                      <div className="detail--hotel__cards--block__card--text__dot">
                        <img src={iconDot} alt="img" className="dotImg" />
                        <h4>122 reviews</h4>
                      </div>
                      <h4>km from here: 1,35</h4>
                      <a>
                        <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div>
                  <div className="detail--hotel__cards--block__card">
                    <img src={hotel[1]?.hotel_images[0]?.hotel_image} alt="" />
                    <img src={follow} alt="img" className="followHotelImg" />
                    <div className="detail--hotel__cards--block__card--text">
                      <h3>{hotel[1]?.hotel_name}</h3>
                      <div className="detail--hotel__cards--block__card--text__dot">
                        <img src={iconDot} alt="img" className="dotImg" />
                        <h4>122 reviews</h4>
                      </div>
                      <h4>km from here: 1,35</h4>
                      <a>
                        <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div>
                  <div className="detail--hotel__cards--block__card">
                    <img src={hotel[2]?.hotel_images[0]?.hotel_image} alt="" />
                    <img src={follow} alt="img" className="followHotelImg" />
                    <div className="detail--hotel__cards--block__card--text">
                      <h3>{hotel[2]?.hotel_name}</h3>
                      <div className="detail--hotel__cards--block__card--text__dot">
                        <img src={iconDot} alt="img" className="dotImg" />
                        <h4>122 reviews</h4>
                      </div>
                      <h4>km from here: 1,35</h4>
                      <a>
                        <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div>
                  <div className="detail--hotel__cards--block__card">
                    <img src={hotel[3]?.hotel_images[0]?.hotel_image} alt="" />
                    <img src={follow} alt="img" className="followHotelImg" />
                    <div className="detail--hotel__cards--block__card--text">
                      <h3>{hotel[3]?.hotel_name}</h3>
                      <div className="detail--hotel__cards--block__card--text__dot">
                        <img src={iconDot} alt="img" className="dotImg" />
                        <h4>122 reviews</h4>
                      </div>
                      <h4>km from here: 1,35</h4>
                      <a>
                        <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div>
                  <div className="detail--hotel__cards--block__card">
                    <img src={hotel[4]?.hotel_images[0]?.hotel_image} alt="" />
                    <img src={follow} alt="img" className="followHotelImg" />
                    <div className="detail--hotel__cards--block__card--text">
                      <h3>{hotel[4]?.hotel_name}</h3>
                      <div className="detail--hotel__cards--block__card--text__dot">
                        <img src={iconDot} alt="img" className="dotImg" />
                        <h4>122 reviews</h4>
                      </div>
                      <h4>km from here: 1,35</h4>
                      <a>
                        <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div>
                  <div className="detail--hotel__cards--block__card">
                    <img src={hotel[5]?.hotel_images[0]?.hotel_image} alt="" />
                    <img src={follow} alt="img" className="followHotelImg" />
                    <div className="detail--hotel__cards--block__card--text">
                      <h3>{hotel[5]?.hotel_name}</h3>
                      <div className="detail--hotel__cards--block__card--text__dot">
                        <img src={iconDot} alt="img" className="dotImg" />
                        <h4>122 reviews</h4>
                      </div>
                      <h4>km from here: 1,35</h4>
                      <a>
                        <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="detail--hotel__altamira">
                  <div className="detail--hotel__altamira--block">
                    <h1>{hotel[0].hotel_name}</h1>
                    <div className="detail--hotel__altamira--block__images">
                      <img src={hotel[0].hotel_images[0]?.hotel_image} alt="" />
                      <img src={hotel[0].hotel_images[1]?.hotel_image} alt="" />
                      <div className="detail--hotel__altamira--block__images--little">
                        <img
                          src={hotel[0].hotel_images[2]?.hotel_image}
                          alt=""
                        />
                        <img
                          src={hotel[0].hotel_images[3]?.hotel_image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="detail--hotel__altamira--well">
                    <div className="detail--hotel__altamira--well__block1">
                      <div className="detail--hotel__altamira--well__block1--text1">
                        <div className="detail--hotel__altamira--well__block1--text1__title">
                          <h1>Well Furnished Apartment</h1>
                          <h3>107 Przhevalsky str., Karakol 722360</h3>
                        </div>
                        <div className="detail--hotel__altamira--well__block1--text1__title2">
                          <a>
                            <FaRegHeart />
                          </a>
                          <a>
                            <FiShare2 />
                          </a>
                        </div>
                      </div>
                      <div className="detail--hotel__altamira--well__block1--text2">
                        <div className="detail--hotel__altamira--well__block1--text2__box1">
                          <img src={box1} alt="img" />
                          <h2>3 Bedrooms</h2>
                        </div>
                        <div className="detail--hotel__altamira--well__block1--text2__box1">
                          <img src={box2} alt="img" />
                          <h2>2 Bathrooms</h2>
                        </div>
                        <div className="detail--hotel__altamira--well__block1--text2__box1">
                          <img src={box3} alt="img" />
                          <h2>3 Cars/2 Bikes</h2>
                        </div>
                        <div className="detail--hotel__altamira--well__block1--text2__box1">
                          <img src={box4} alt="img" />
                          <h2>0 Pets Allowed</h2>
                        </div>
                      </div>
                      <div className="detail--hotel__altamira--well__block1--text3">
                        <h1>Apartment Description</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut <br />{" "}
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris{" "}
                          <br /> nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut <br />{" "}
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris{" "}
                          <br /> nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div className="detail--hotel__altamira--well__block2">
                      <h1>$ 1000 - $ 2000</h1>
                      <div className="detail--hotel__altamira--well__block2--nav">
                        <h3>Short Period: $ 1000</h3>
                        <h3>Medium Period: $ 2000</h3>
                        <h3>Long Period: $ 2000</h3>
                      </div>
                      <button>Reserve Now</button>
                      <div className="detail--hotel__altamira--well__block2--title">
                        <h2>
                          <span>
                            <PiBuilding />
                          </span>
                          Property Inquiry
                        </h2>
                        <h2>
                          <span>
                            <IoCallOutline />
                          </span>
                          Contact Host
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="detail--hotel__altamira--show">
                    <div className="detail--hotel__altamira--show__block1">
                      <h1>Offered Amenities</h1>
                      <div className="detail--hotel__altamira--show__block1--card">
                        <div className="detail--hotel__altamira--show__block1--card__title1">
                          <div className="detail--hotel__altamira--show__block1--card__title1--card1">
                            <img src={show1} alt="img" />
                            <h3>Kitchen</h3>
                          </div>
                          <div className="detail--hotel__altamira--show__block1--card__title1--card1">
                            <img src={show2} alt="img" />
                            <h3>Air Conditioner</h3>
                          </div>
                          <div className="detail--hotel__altamira--show__block1--card__title1--card1">
                            <img src={show3} alt="img" />
                            <h3>Washer</h3>
                          </div>
                          <div className="detail--hotel__altamira--show__block1--card__title1--card1"></div>
                        </div>
                        <div className="detail--hotel__altamira--show__block1--card__title1">
                          <div className="detail--hotel__altamira--show__block1--card__title1--card1">
                            <img src={show4} alt="img" />
                            <h3>Television with Netflix</h3>
                          </div>
                          <div className="detail--hotel__altamira--show__block1--card__title1--card1">
                            <img src={show5} alt="img" />
                            <h3>Free Wireless Internet</h3>
                          </div>
                          <div className="detail--hotel__altamira--show__block1--card__title1--card1">
                            <img src={show6} alt="img" />
                            <h3>Balcony or Patio</h3>
                          </div>
                        </div>
                      </div>
                      <button>Show All 10 Amenities</button>
                    </div>
                    <div className="detail--hotel__altamira--show__block2">
                      <h1>Safety and Hygiene</h1>
                      <div className="detail--hotel__almatira--show__block2--daily">
                        <div className="detail--hotel__altamire--show__block2--daily__text1">
                          <div className="detail--hotel__altamire--show__block2--daily__text1--box">
                            <img src={dayli} alt="img" />
                            <h3>Daily Cleaning</h3>
                          </div>
                          <div className="detail--hotel__altamire--show__block2--daily__text1--box">
                            <img src={dayli} alt="img" />
                            <h3>Disinfections and Sterilizations</h3>
                          </div>
                        </div>
                        <div className="detail--hotel__altamire--show__block2--daily__text1">
                          <div className="detail--hotel__altamire--show__block2--daily__text1--box">
                            <img src={dayli} alt="img" />
                            <h3>Fire Extinguishers</h3>
                          </div>
                          <div className="detail--hotel__altamire--show__block2--daily__text1--box">
                            <img src={dayli} alt="img" />
                            <h3>Smoke Detectors</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activ === 3 && (
            <div className="detail--kitchen">
              <div className="detail--kitchen__block1">
                <h1>The best restaurants with reasonable prices Show all</h1>
                <div className="detail--kitchen__block1--cards">
                  {kitchen.map((el) => (
                    <div className="detail--kitchen__block1--cards__card">
                      <img src={like} alt="likeImg" className="like" />
                      <img
                        src={el.restaurant_images[0].restaurant_image}
                        alt=""
                      />
                      <h4>{el.restaurant_name}</h4>
                      <div className="detail--kitchen__block1--cards__card--dots">
                        <img src={iconDot} alt="img" className="dottImg" />
                        <h3>Reviews: 43</h3>
                      </div>
                      <h3>$$ $$${el.meal_type[0].meal_type}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="detail--kitchen__block2">
                <h1>Ethno-cafe Dastorkon</h1>
                <div className="detail--kitchen__block2--galery">
                  <img
                    src={kitchen[0].restaurant_images[0].restaurant_image}
                    alt="restaurant"
                  />
                  <img
                    src={kitchen[0].restaurant_images[1].restaurant_image}
                    alt="restaurant"
                  />
                  <div className="detail--kitchen__block2--galery__card">
                    <img
                      src={kitchen[0].restaurant_images[2].restaurant_image}
                      alt="restaurant"
                    />
                    <img
                      src={kitchen[0].restaurant_images[3].restaurant_image}
                      alt="restaurant"
                    />
                  </div>
                </div>
              </div>
              <div className="detail--kitchen__block3">
                <div className="detail--kitchen__block3--box1">
                  <h3>Ratings and reviews</h3>
                  <div className="detail--kitchen__block3--box1__text">
                    <h2>4.5</h2>
                    <img src={iconDot} alt="img" />
                    <h3>298 reviews</h3>
                  </div>
                  <h3>
                    № 1 <span>of 23 Restaurants in Cholpon-Ata</span>
                  </h3>
                  <h3>ASSESSMENTS</h3>
                </div>
                <div className="following">
                  <div className="following--service">
                    <div className="following--service__ser1">
                      <img src={show1} alt="kitchen" />
                      <h4>Nutrition</h4>
                    </div>
                    <img src={iconDot} alt="img" className="seviceDot" />
                    <div className="following--service__ser2">
                      <img
                        src={followIcon}
                        alt="follow"
                        className="followImg"
                      />
                      <h6>0</h6>
                    </div>
                  </div>
                  <div className="following--service">
                    <div className="following--service__ser1">
                      <img src={service1} alt="kitchen" />
                      <h4>Nutrition</h4>
                    </div>
                    <div className="following--service__ser2">
                      <img src={iconDot} alt="img" className="seviceDot" />
                      <img
                        src={followIcon}
                        alt="follow"
                        className="followImg"
                      />
                      <h6>0</h6>
                    </div>
                  </div>
                  <div className="following--service">
                    <div className="following--service__ser1">
                      <img src={service3} alt="kitchen" />
                      <h4>Nutrition</h4>
                    </div>
                    <img src={iconDot} alt="img" className="seviceDot" />
                    <div className="following--service__ser2">
                      <img
                        src={followIcon}
                        alt="follow"
                        className="followImg"
                      />
                      <h6>0</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
