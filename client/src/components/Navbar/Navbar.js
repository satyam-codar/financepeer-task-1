import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active" onClick={handleClick}>
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="navbarmain">
      <nav>
        <NavLink exact to="/" activeClassName="active">
          <div className="logo" style={{ textDecoration: "none" }}>
            Task
          </div>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script>
          <FaBars className={clicked ? "display" : "displaynot"} />
          <ImCross className={clicked ? " displaynot" : " crossy display"} />
        </div>
        <ul className={clicked ? "menu-list1 " : "menu-list "}>{menuList}</ul>
        {/* <ul className="menu-list">
          <li>
            <NavLink to="">Logout</NavLink>
            <button>Logout</button>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
// {"mode";"full","isActive":false}
