import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ text, link }) => {
  return (
    <li className="nav-item ">
      <Link to={link} className="nav-link">
        {text}
      </Link>
    </li>
  );
};

export default NavbarItem;
