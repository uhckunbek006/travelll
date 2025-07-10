import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TravelContext } from "./context";

const RooteContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [attraction, setAttraction] = useState([]);
  const [culture, setCulture] = useState([]);
  const [games, setGames] = useState([]);
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
    let res = await axios(`http://13.60.97.160/${language}/culture/`);
    let { data } = res;
    // console.log(data, "dadada");
    setGames(data);
  }

  useEffect(() => {
    addAttraction();
    addCulture();
    addGames();
  }, [language]);

  return (
    <TravelContext.Provider
      value={{
        products,
        setProducts,
        setBasket,
        setGames,
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
