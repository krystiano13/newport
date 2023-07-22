import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-md d-flex">
        <h1 className="navbar-brand d-block">NEWPORT</h1>
        <div className="collapse navbar-collapse d-flex navButtons justify-content-end">
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
  <a href=""></a>;
};

export { Navbar };
