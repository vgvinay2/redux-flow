import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <div>
    <NavLink to="/create" activeClassName="selected">
      Create
    </NavLink>
    <NavLink to="/delete">delete</NavLink>
    <NavLink to="/help">help</NavLink>
  </div>
);

export default Header;
