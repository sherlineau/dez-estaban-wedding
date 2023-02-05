import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top">
        <h1>Desiree & Esteban</h1>
        <p>Los Angeles, CA</p>
      </div>
      <div className="bottom">
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
