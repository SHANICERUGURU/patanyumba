import React from "react";
import Navbar from "./navbar";
import HouseCard from "./housecard";
import houseimg1 from "../assets/house1.jpg"
import houseimg2 from "../assets/house2.jpg"
import houseimg3 from "../assets/house3.jpg"
import houseimg4 from "../assets/house4.jpg"
import houseimg5 from "../assets/house5.jpg"
import houseimg6 from "../assets/house6.jpg"
const CardsContainer = () => {
  let houses=[
  {
    housetitle: "penthouse",
    price: "250000",
    location: "Kileleshwa",
    img: houseimg1
  },
  {
    housetitle: "cottage",
    price: "140000",
    location: "Utawala",
    img: houseimg2
  },
 {
    housetitle: "bungalow",
    price: "140000",
    location: "Juja",
    img: houseimg3
  },
{
    housetitle: "mansion",
    price: "250000",
    location: "Karen",
    img: houseimg4
  },
 {
    housetitle: "mansion",
    price: "300000",
    location: "Runda",
    img: houseimg5
  },
   {
    housetitle: "mansion",
    price: "250000",
    location: "Karen",
    img: houseimg6
  }
]
  return (
    <>
     <Navbar/>
      <div className="container houseContainer text-center">
        <h1>Get Your Dream Home</h1>
        <div className="row align-items-start">
         {
          houses.map((house,index)=>{
            return(
            
              <div className="col-md-3"key={index}>
                <HouseCard house={house}/>
              </div>
            )
})
         }
        </div>
      </div>
    </>
  )

}
export default CardsContainer