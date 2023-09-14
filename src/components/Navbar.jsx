import React from "react";
import { links } from "../utils/constants.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-md-3">
      <div className="container-fluid d-flex justify-content-end">
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            {links.map((link) => {
              return (
                <li class="nav-item active py-1 text-end ps-4" key={link.id}>
                  <NavLink exact to={link.url}>
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
