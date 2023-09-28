import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/login"> Login </Link>
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <MdShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
