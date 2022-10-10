import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarCSS from "./navBar.module.css";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
    window.scrollTo({ top: 0 });
  }
  return (
    <React.Fragment>
      <nav className={NavbarCSS.navbar}>
        <div className={NavbarCSS["nav-container"]}>
          <NavLink exact to="/" className={NavbarCSS["nav-logo"]}>
            <img
              src={require("../../assets/Logo/companyLogo.png")}
              alt="company logo"
            />
            Multimedia
          </NavLink>

          <ul
            className={
              click
                ? `${NavbarCSS.navMenu} ${NavbarCSS.active}`
                : NavbarCSS.navMenu
            }
          >
            <li className={NavbarCSS["nav-item"]}>
              <NavLink
                exact
                to="/"
                activeClassName={NavbarCSS.active}
                className={NavbarCSS["nav-links"]}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={NavbarCSS["nav-item"]}>
              <NavLink
                exact
                to="/services"
                activeClassName={NavbarCSS.active}
                className={NavbarCSS["nav-links"]}
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className={NavbarCSS["nav-item"]}>
              <NavLink
                exact
                to="/portfolio"
                activeClassName={NavbarCSS.active}
                className={NavbarCSS["nav-links"]}
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className={NavbarCSS["nav-item"]}>
              <NavLink
                exact
                to="/interns"
                activeClassName={NavbarCSS.active}
                className={NavbarCSS["nav-links"]}
                onClick={handleClick}
              >
                Interns
              </NavLink>
            </li>
            <li className={NavbarCSS["nav-item"]}>
              <NavLink
                exact
                to="/about"
                activeClassName={NavbarCSS.active}
                className={NavbarCSS["nav-links"]}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={NavbarCSS["nav-item"]}>
              <NavLink
                exact
                to="/blog"
                activeClassName={NavbarCSS.active}
                className={NavbarCSS["nav-links"]}
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className={NavbarCSS["nav-item"]}>
              <NavLink
                exact
                to="/contact"
                activeClassName={NavbarCSS.active}
                className={NavbarCSS["nav-links"]}
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className={NavbarCSS["nav-icon"]} onClick={handleClick}>
            <i
              className={
                click
                  ? `${NavbarCSS.cross} fas fa-times`
                  : `${NavbarCSS.bars} fas fa-bars`
              }
            ></i>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
