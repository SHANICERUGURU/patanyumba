import React, { useState } from "react";
const HouseCard = ({ house }) => {

  let [housetitle, setHousetitle] = useState(house.housetitle)
  let [price, setPrice] = useState(house.price)
  let [location, setLocation] = useState(house.location)
  let [likes, likesNo] = useState(8)
  function changePrice() {
    setPrice(400000)
    setLocation("syokimau")
    setHousetitle("mansion")
  }
  const incLikes = () => {
    likesNo(++likes)
  }
  return (
    <>
    {
      house?
      <div className="card" style={{ width: '18rem', marginTop: '15px' }}>
        <img src={ house ? house.img :"..."} className="card-img-top" alt="..." />
        <div className="card-body">

          <h5 className="card-title">{house.housetitle}</h5>
          <h4 className="card-title">{house.price}kshs</h4>
          <h4 className="card-title">location:{house.location}</h4>
          <p>Category:{house.price>100000? "expensive":"cheap"}</p>
          <h4>likes:{likes}</h4>
          <button type="button" class="btn btn-light" onClick={changePrice}>get house</button>
          <button type="button" class="btn btn-warning" onClick={incLikes}>like!!</button>
        </div>
      </div>
      :
      <h1>No house</h1>
    }
    </>

  )
}
export default HouseCard


