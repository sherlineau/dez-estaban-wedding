import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand-name">
        <h1>Desiree & Esteban</h1>
        <p>Los Angeles, CA</p>
        <button
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/our-story">Our Story</Link>
          </li>
          <li>
            <Link to="/wedding-party">Wedding Party</Link>
          </li>
          <li>
            <Link to="/venue">Venue Info</Link>
          </li>
          <li>
            <Link to="/registry">Registry</Link>
          </li>
          <li>
            <Link to="/memento">Photo Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
