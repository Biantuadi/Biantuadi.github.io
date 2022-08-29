import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
          Bienvenue
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          Parcours
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          Portfolio
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </li> */}
    </ul>
  );
};

export default Navigation;
