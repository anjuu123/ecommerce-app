import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-white shadow-sm">
        <div className="container">
          <div className="navbar-brand fw-bold fs-4">A & A Collection</div>

          {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

            </form> */}

          <button
            class="navbar-toggler toggler-example purple darken-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent41"
            aria-controls="navbarSupportedContent41"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="white-text">
              <i class="fa fa-bars fa-1x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <Link to="/cart " className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>Cart (0)
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
