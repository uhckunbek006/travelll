import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TravelContext } from "./context";

const RooteContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [attraction, setAttraction] = useState([]);
  const [culture, setCulture] = useState([]);
  const [games, setGames] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [hand, setHand] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [review, setReview] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [routes, setRoutes] = useState([]);
  // const [games, setGames] = useState([]);
  const [language, setLanguage] = useState("en");

  async function addAttraction() {
    let res = await axios(`http://13.60.97.160/${language}/home/attraction/`);
    let { data } = res;
    setAttraction(data);
  }

  async function addCulture() {
    let res = await axios(`http://13.60.97.160/${language}/home/culture/`);
    let { data } = res;
    setCulture(data);
  }

  async function addGames() {
    let res = await axios(`http://13.60.97.160/${language}/culture/1`);
    let { cultures } = res.data;
    // console.log(cultures, "dadada");
    setGames(cultures);
  }
  async function addClothes() {
    let res = await axios(`http://13.60.97.160/${language}/culture/2`);
    let { cultures } = res.data;
    // console.log(cultures, "clothes");
    setClothes(cultures);
  }
  async function addHand() {
    let res = await axios(`http://13.60.97.160/${language}/culture/3`);
    let { cultures } = res.data;
    // console.log(cultures, "Hand");
    setHand(culture);
  }
  async function addInstrumentss() {
    let res = await axios(`http://13.60.97.160/${language}/culture/5`);
    let { cultures } = res.data;
    // console.log(cultures, "instruments");
    setInstruments(cultures);
  }
  async function addReview() {
    let res = await axios(`http://13.60.97.160/${language}/review_hotel/1 `);
    let { cultures } = res.data;
    // console.log(res.data[0], "rew");
    // console.log(cultures, "review");
    setReview(cultures);
  }
  async function getGallery() {
    let res = await axios(`http://13.60.97.160/${language}/gallery/ `);
    // let { cultures } = res.data;
    // console.log(res.data, "gallerysetdata");
    setGallery(res.data);
  }
  // async function getRoutes() {
  //   let res = await axios(`http://13.60.97.160/${language}/distance/ `);
  //   // let { cultures } = res.data;
  //   console.log(res.data, "routerr  ");

  //   setRoutes(res.data);
  // }

  useEffect(() => {
    addAttraction();
    addCulture();
    addGames();
    addClothes();
    addHand();
    addInstrumentss();
    addReview();
    getGallery();
    // getRoutes();
  }, [language]);

  return (
    <TravelContext.Provider
      value={{
        products,
        setProducts,
        setBasket,
        setGames,
        setInstruments,
        setClothes,
        setHand,
        setGallery,
        gallery,
        clothes,
        hand,
        instruments,
        games,
        basket,
        attraction,
        culture,
        language,
        setLanguage,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default RooteContext;
