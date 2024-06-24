import React from "react";
import HouseCard from "./housecard";
const CardsContainer=()=>{
    return(
         <>
    <div className="container houseContainer text-center">
                <h1>Get Your Dream Home</h1>
                <div className="row align-items-start">
                    <div  className="col-md-4">
                        <HouseCard/>
                    </div>
                    <div className="col-md-4">
                        <HouseCard/>
                    </div>
                    <div className="col-md-4">
                        <HouseCard/>
                    </div>
                    <div className="col-md-4">
                        <HouseCard/>
                    </div>
                    <div className="col-md-4">
                        <HouseCard/>
                    </div>
                    <div className="col-md-4">
                        <HouseCard/>
                    </div>
                </div>
    </div>
    </>
        )
   
}
export default CardsContainer