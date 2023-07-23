import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-lg d-flex">
        <h1 className="navbar-brand d-block">NEWPORT</h1>
        <button
          data-bs-target="#nav"
          data-bs-toggle="collapse"
          className="navbar-toggler"
          ref={buttonRef}
          onClick={(e) => {
            buttonRef.current?.classList.toggle("ntActive");
          }}
        >
          <div className="navbar-toggler-stripes">
            <span className="stripe"></span>
            <span className="stripe"></span>
            <span className="stripe"></span>
          </div>
        </button>
        <div id="nav" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav d-flex justify-content-between">
            <li className="nav-item marginRight">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none isActive"
                    : "text-decoration-none"
                }
                to="/"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item marginRight">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none isActive"
                    : "text-decoration-none"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none isActive"
                    : "text-decoration-none"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
