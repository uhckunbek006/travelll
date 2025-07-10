import React from "react";
import "./Gallery.scss";
import { BsFillGeoAltFill } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoHeartCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjwPo2XwehQ954hnTjfT1SVPpyLhyCJQEmQ&s",
      name: "Balykchy",
      rate: 4.5,
      people: "23 764 ",
      country: "Balykchy",
      reviews: "BozUy",
    },
    {
      id: 2,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/17/7f/dc/c1/130-2-5-996-770-797-480.jpg",
      name: "Ala-Archa",
      rate: 3.5,
      people: "22 764 reviews",
      country: "Kosh-koi",
      reviews: "view",
    },
    {
      id: 3,
      img: "https://dwc.kg/wp-content/uploads/2023/05/1647363955_34-vsegda-pomnim-com-p-ozero-chatir-kul-foto-38.jpg",
      name: "Son-Köl",
      rate: 5.5,
      people: "25 764 reviews",
      country: "Tamchy",
      reviews: "mountain and hand",
    },
    {
      id: 4,
      img: "https://eastroute.com/wp-content/uploads/2019/05/3232233_croped.jpg",
      name: "Cholpon-Ata",
      rate: 4,
      people: "24 764 reviews",
      country: "Cholpon-Ata",
      reviews: "water and people",
    },
    {
      id: 5,
      img: "https://i.ytimg.com/vi/jD-KyslBhug/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGFggXyhlMA8=&rs=AOn4CLBH8G81wQWPhyte0lC-gBeMvkUbTQ",
      name: "Tüp",
      rate: 3.5,
      people: "21 764 reviews",
      country: "Tüp",
      reviews: "horse and a dog enjoy nature",
    },
    {
      id: 6,
      img: "https://dwc.kg/wp-content/uploads/2023/05/scale_1200-1.webp",
      name: "Balykchy",
      rate: 6,
      people: "25 564 reviews",
      country: "Canyon Tale",
      reviews: "focus and motivation",
    },
  ];

  const nav = useNavigate();

  function prover() {
    let res = JSON.parse(localStorage.getItem("setdata")) || [];
    console.log(res);

    !res.access.length ? alert(444) : nav("/admin");
  }

  return (
    <div id="gallery">
      <div className="container">
        <div className="gallery">
          {gallery.map((el) => (
            <div className="gallery--block" key={el.id}>
              <img src={el.img} alt="img" />
              <h1>{el.name}</h1>
              <div className="gallery--block__rate">
                <h3>{el.rate}</h3>
                <h4>{el.reviews}</h4>
              </div>
              <div className="gallery--block__cout">
                <a>
                  <BsFillGeoAltFill />
                </a>
                <h2>{el.country}</h2>
              </div>
              <p onClick={() => prover()}>
                <IoHeartCircleSharp />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
