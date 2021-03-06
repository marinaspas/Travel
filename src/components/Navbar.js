import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            TRVL<i className="fab fa-typo3"></i>
          </h1>
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.url}
                    exact={item.url === "/"}
                    className={item.cName}
                    activeClassName="selected"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-nav">
          <h1 className="navbar-logo">
            TRVL<i className="fab fa-typo3"></i>
          </h1>
          <nav>
            <ul className="mobile-nav-menu">
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.url} className={item.cName}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
