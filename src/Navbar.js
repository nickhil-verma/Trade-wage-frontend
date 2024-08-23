import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fluid p-2">
      <nav class="navbar navbar-expand-lg border-bottom "
      style={{backgroundColo:"#FFF"}}>
        <div class="container ">
          <Link  class="navbar-brand" to="/">
           <img src="media/images/logo.svg" style={{width:"25%"}}/>
          </Link >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav fs-6">
              <li class="nav-item">
                <Link to="signup"  class="nav-link active" aria-current="page" href="#">
                  Signup
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link  active" to="about">
                  About
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link  active" to="/product">
                  Product
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link  active" to="/pricing">
                  Pricing
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link  active" to="/support">
                  Support
                </Link >
              </li>

               
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
