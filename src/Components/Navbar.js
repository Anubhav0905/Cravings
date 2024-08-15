import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Medal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";


export default function Navbar() {


  let data = useCart()


  const [cartView, setcartView] = useState(false)

  let navigate = useNavigate();


  const handleLogout = () =>{
    localStorage.removeItem('authToken');
    navigate('/login')
  }

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark " style={{'backgroundColor' : '#960b55'}}>
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-1 font-weight-bold fst-italic "
            style={{ color: "white" }}
            to="/"
          >
            Cravings
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ml-4">
                <Link className="nav-link active fs-4" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            {!(localStorage.getItem('authToken'))?
            <div className="d-flex">
                  <Link className="btn fs-4 btn-white text-white" to="/login">
                    Login
                  </Link>
                  <Link className="btn fs-4  btn-white text-white" to="/signup">
                    SignUp
                  </Link>
            </div>
            :
            <div className="d-flex">
                  <div className="btn bg-#960b55 text-white mx-2" onClick={() => {setcartView(true)}} >
                    <i class="text-primary fs-3 fa-solid fa-cart-plus"  style={{'color': 'white'}}></i>
                    <Badge pill bg = 'danger' >{data.length}</Badge>
                  </div>
                  {cartView? <Modal onClose={() => setcartView(false)}><Cart/></Modal> : null}
                <Link onClick={handleLogout} className="btn fs-4 text-white" aria-current="page" to="/">
                  Logout
                </Link>
            </div>
             }
          </div>
        </div>
      </nav>
    </div>
  );
}
