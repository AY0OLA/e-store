import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to={"/"}>
            D-Collection
          </Link>
          <button
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/products"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to={"/"} className="btn btn-outline-dark">
                Login
              </Link>
              <Link to={"/"} className="btn btn-outline-dark mx-2">
                Register
              </Link>
              <Link to={"/cart"} className="btn btn-outline-dark me-2">
                Cart(0)
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
