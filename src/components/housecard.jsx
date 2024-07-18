import React, { useState } from "react";
import { Link } from "react-router-dom";
const HouseCard = ({ house }) => {

  let [housetitle, setHousetitle] = useState(house.housetitle)
  let [prize, setprize] = useState(house.prize)
  let [location, setLocation] = useState(house.location)
  let [likes, likesNo] = useState(8)
  function changeprize() {
    setprize(400000)
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
        <img src={ house ? house.imageUrl :"..."} className="card-img-top" alt="..." />
        <div className="card-body">

          <h5 className="card-title">{house.housesize}</h5>
          <h4 className="card-title">{house.prize}kshs</h4>
          <h4 className="card-title">location:{house.location}</h4>
          <p>Category:{house.prize>100000? "expensive":"cheap"}</p>
          <h4>likes:{likes}</h4>
          < Link to={'/updatehouse'}  type="button" class="btn btn-light" onClick={changeprize} state={house}>update house</Link>
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


