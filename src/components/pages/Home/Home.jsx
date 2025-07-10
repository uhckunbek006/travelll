import React from "react";
import Attraction from "../Attraction/Attraction";
import Pagination from "../Pagination/Pagination";
import Welcome from "../Welcome/Welcome";
// import Kyrgyz from "../kyrgyz/kyrgyz";

const Home = () => {
  return (
    <div id="">
      <Welcome />
      <Attraction />
      <Pagination />
      {/* <Kyrgyz /> */}
    </div>
  );
};

export default Home;
