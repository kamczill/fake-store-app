import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "underline underline-offset-4 decoration-red-400	" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
