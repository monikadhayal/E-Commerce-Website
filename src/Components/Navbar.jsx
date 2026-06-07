import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const state = useSelector((state) => state.HandleCart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-lime-100 py-3 static-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
            React E-Commerce
          </NavLink>
          <button
            className="navbar-toggler mx-2 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContext"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>

          <div className=" navbar-collapse">
            <ul className="navbar-nav m-auto my-2 text-center text-yellow-700">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons text-center">
              <NavLink to="/login" className="btn btn-outline-dark m-2">
                {" "}
                <i className="fas fa-sign-in-alt mr-1"></i> Login{" "}
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark m-2">
                {" "}
               <i className="fas fa-user-plus me-1"></i> Register{" "}
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark m-2">
                {" "}
                <i className="fa fa-shopping-cart mr-1"></i> Cart ( Cart
                {state?.length || 0}){" "}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
