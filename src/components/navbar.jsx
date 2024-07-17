import React from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
const Navbar = () => {
return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid" style={{ backgroundColor: 'tan' }}>
          <div><Modal /></div>
          <div><a className="navbar-brand">Pata Nyumba</a></div>
          <div className="links">
          <div>
            <Link to={'/home'}>Home</Link>
          </div>
            <div>
              <Link to={'/register'}>Register</Link>
            </div>
            <div>
              <Link to={'/login'}>Login</Link>
            </div>
           </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar