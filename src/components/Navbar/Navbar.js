import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Certificates", path: "/certificate" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    // { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.path} className="navbar-item">
            <Link className="navbar-link" to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
