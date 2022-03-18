import React from "react";
import { useLocation } from "react-router";
import { getRealPath } from "../../helper";
import NavbarItems from "./NavbarItems/NavbarItems";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid logoApp">
          <h1>FH</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <NavbarItems rol={getRealPath(pathname)} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
