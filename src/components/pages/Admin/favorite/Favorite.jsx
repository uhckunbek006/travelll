import React, { useEffect } from "react";
import "./Favorite.scss";
import { GoArrowUpRight } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { BsFillGeoAltFill } from "react-icons/bs";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Favorite = () => {
  let favorite = JSON.parse(localStorage.getItem("basket"));

  // favorite.length ? alert(404) : alert(505);

  function productDelet(item) {
    // let res = JSON.parse(localStorage.getItem("basket"));
    let ress = favorite.filter((el) => el.id !== item.id);
    localStorage.setItem("basket", JSON.stringify(ress));
  }


  // const favorite = [
  //   {
  //     id: 1,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjwPo2XwehQ954hnTjfT1SVPpyLhyCJQEmQ&s",
  //     name: "Balykchy",
  //     rate: 4.5,
  //     people: "23 764 ",
  //     country: "Balykchy",
  //     reviews: "BozUy",
  //   },
  //   {
  //     id: 2,
  //     img: "https://media-cdn.tripadvisor.com/media/photo-s/17/7f/dc/c1/130-2-5-996-770-797-480.jpg",
  //     name: "Ala-Archa",
  //     rate: 3.5,
  //     people: "22 764 reviews",
  //     country: "Kosh-koi",
  //     reviews: "view",
  //   },
  //   {
  //     id: 3,
  //     img: "https://dwc.kg/wp-content/uploads/2023/05/1647363955_34-vsegda-pomnim-com-p-ozero-chatir-kul-foto-38.jpg",
  //     name: "Son-Köl",
  //     rate: 5.5,
  //     people: "25 764 reviews",
  //     country: "Tamchy",
  //     reviews: "mountain and hand",
  //   },
  //   {
  //     id: 4,
  //     img: "https://eastroute.com/wp-content/uploads/2019/05/3232233_croped.jpg",
  //     name: "Cholpon-Ata",
  //     rate: 4,
  //     people: "24 764 reviews",
  //     country: "Cholpon-Ata",
  //     reviews: "water and people",
  //   },
  //   {
  //     id: 5,
  //     img: "https://i.ytimg.com/vi/jD-KyslBhug/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGFggXyhlMA8=&rs=AOn4CLBH8G81wQWPhyte0lC-gBeMvkUbTQ",
  //     name: "Tüp",
  //     rate: 3.5,
  //     people: "21 764 reviews",
  //     country: "Tüp",
  //     reviews: "horse and a dog enjoy nature",
  //   },
  //   {
  //     id: 6,
  //     img: "https://dwc.kg/wp-content/uploads/2023/05/scale_1200-1.webp",
  //     name: "Balykchy",
  //     rate: 6,
  //     people: "25 564 reviews",
  //     country: "Canyon Tale",
  //     reviews: "focus and motivation",
  //   },
  // ];
  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          <div className="favorite--top">
            <div className="favorite--top__input">
              <div className="favorite--top__input--inp">
                <a>
                  <LuSearch />
                </a>
                <input type="text" />
              </div>
              <h1>
                <GoArrowUpRight />
              </h1>
            </div>
            <div className="favorite--top__name">
              <div className="favorite--top__name--text">
                <h1>Charles Deo</h1>
                <h2>Moscow, Rossia</h2>
              </div>
              <img
                src="https://www.shareicon.net/data/256x256/2015/12/10/685100_man_512x512.png"
                alt="imgg"
              />
            </div>
          </div>
          <h5>Favorites</h5>

          {favorite.length ? (
            <div className="favorite--blocks">
              {favorite?.map((el) => (
                <div className="favorite--blocks__block" key={el.id}>
                  <img src={el.place_image} alt="img" />
                  <h1>{el.place_name}</h1>
                  <div className="favorite--blocks__block--rate">
                    <h3>{el.avg_rating}</h3>
                    <h4>{el.count_reviews}</h4>
                  </div>
                  <div className="favorite--blocks__block--cout">
                    <a>
                      <BsFillGeoAltFill />
                    </a>

                    <h2>{el.region.region_name}</h2>
                  </div>
                  <p onClick={() => productDelet(el)}>
                    {favorite.length ? (
                      <IoHeartCircleSharp />
                    ) : (
                      <h6>
                        <FaHeart style={{ color: "red" }} />
                      </h6>
                    )}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="basketr">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-10929686-8779492.png"
                alt="img"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
