import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
         
{/* HEADER LOGO */}
        <Link className="navbar-brand " to="/">
            <h1>A & A Collection</h1>
          </Link>

         {/* HAMBURGER MENU */}
          <button id="menu"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         {/* NAVIGATION STARTS */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/products">
                 Shop
                </Link>
              </li>

                {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">
                Search
              </button>
            </form>  */}
   
            </ul>
                 
        </div>
        </div>

        {/* CART BUTTON */}
        <div className="buttons" id="btn-cart">
            <Link to="/cart "  className="btn btn-outline-primary ms-2">
              <i className="fa fa-shopping-cart me-1 "id="cart"></i>0
            </Link>
          </div>
      </nav>


      
    </>
  );
}
