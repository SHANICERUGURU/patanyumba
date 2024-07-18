import React,{useEffect} from "react";
import Navbar from "./navbar";
import HouseCard from "./housecard";
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

        let objectWithKeys=Object.keys(data).map((key)=>{
          return{
            ...data[key],
            houseId:key,
          }
        })
        console.log(objectWithKeys);
        setHouses(objectWithKeys)
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