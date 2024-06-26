import React from "react";
import HouseCard from "./housecard";
import houseimg1 from "../assets/house1.jpg"
import houseimg2 from "../assets/house2.jpg"
import houseimg3 from "../assets/house3.jpg"
import houseimg4 from "../assets/house4.jpg"
import houseimg5 from "../assets/house5.jpg"
import houseimg6 from "../assets/house6.jpg"
const CardsContainer = () => {
  let house1 = {
    housetitle: "penthouse",
    price: "250000",
    location: "Kileleshwa",
    img: houseimg1
  }
  let house2 = {
    housetitle: "cottage",
    price: "140000",
    location: "Utawala",
    img: houseimg2
  }
  let house3 = {
    housetitle: "bungalow",
    price: "140000",
    location: "Juja",
    img: houseimg3
  }
  let house4 = {
    housetitle: "mansion",
    price: "250000",
    location: "Karen",
    img: houseimg4
  }
  let house5 = {
    housetitle: "mansion",
    price: "300000",
    location: "Runda",
    img: houseimg5
  }
  let house6 = {
    housetitle: "mansion",
    price: "250000",
    location: "Karen",
    img: houseimg6
  }
  return (
    <>
      <div className="container houseContainer text-center">
        <h1>Get Your Dream Home</h1>
        <div className="row align-items-start">
          <div className="col-md-4">
            <HouseCard house={house1} />
          </div>
          <div className="col-md-4">
            <HouseCard house={house2} />
          </div>
          <div className="col-md-4">
            <HouseCard house={house3} />
          </div>
          <div className="col-md-4">
            <HouseCard house={house4} />
          </div>
          <div className="col-md-4">
            <HouseCard house={house5} />
          </div>
          <div className="col-md-4">
            <HouseCard house={house6} />
          </div>
        </div>
      </div>
    </>
  )

}
export default CardsContainer