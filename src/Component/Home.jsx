import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="src/assets/back.jpeg"
            className="card-img"
            alt=""
            height="700px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
