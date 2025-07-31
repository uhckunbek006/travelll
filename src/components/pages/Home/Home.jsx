import React, { useEffect } from "react";
import Attraction from "../Attraction/Attraction";
import Pagination from "../Pagination/Pagination";
import Welcome from "../Welcome/Welcome";
import Kyrgyz from "../kyrgyz/kyrgyz";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 1);
  }, []);
  return (
    <div id="">
      <Welcome />
      <Attraction />
      {/* <Pagination /> */}
      <Kyrgyz />
    </div>
  );
};

export default Home;
