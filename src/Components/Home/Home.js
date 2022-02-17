import React from "react";
import Main from "../Main/Main";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
{/* 1ST IMG */}
        <div className="carousel-inner " >
          <div className="carousel-item active">
            <img
              src="sale.gif"
              className="d-block w-100"
              alt="img5"
             
            />
          </div>

          {/* 2ND IMG */}
          <div className="carousel-item">
            <img
              src="bigsale.jpg"
              className="d-block w-100"
              alt="img1"
              
            />
          </div>

        {/* 3RD IMG */}
          <div className="carousel-item">
            <img
              src="jewell.jpg"
              className="d-block w-100"
              alt="img6"
                />
          </div>
        </div>

        {/* PREV BUTTON */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* NEXT BUTTON */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

{/* MAIN COMPONENT ADDED HERE */}
      <Main />
    </>
  );
}
