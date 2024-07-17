import React,{useEffect} from "react";
import Navbar from "./navbar";
import HouseCard from "./housecard";
import houseimg1 from "../assets/house1.jpg"
import houseimg2 from "../assets/house2.jpg"
import houseimg3 from "../assets/house3.jpg"
import houseimg4 from "../assets/house4.jpg"
import houseimg5 from "../assets/house5.jpg"
import houseimg6 from "../assets/house6.jpg"
import { getDatabase,ref,get } from "firebase/database";
import app from "../firebaseconfig";
import { useState } from "react";
const CardsContainer = () => {
const [houses,setHouses]=useState([])
  useEffect(()=>{
    async function getData(){
      const db=getDatabase(app)
      const dbRef=ref(db,"patanyumba/houses");
      const snapshot=await get(dbRef);
      if (snapshot.exists()){
        let data=Object.values(snapshot.val())
        setHouses(data)
        console.log(data);
      }
    }
    getData()
  }, [])
  
  return (
    <>
     <Navbar/>
      <div className="container houseContainer text-center">
        <h1>Get Your Dream Home</h1>
        <div className="row align-items-start">
         {
          houses.map((house,index)=>{
            return(
            
              <div className="col-md-4"key={index}>
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