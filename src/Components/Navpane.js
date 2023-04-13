import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import profile from "../profile.jpg";

function Navpane() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Admin Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/monday">Monday</Link>
        </li>
        <li className="nav-item">
          <Link to="/tuesday">Tuesday</Link>
        </li>
        <li className="nav-item">
          <Link to="/wednesday">Wednesday</Link>
        </li>
        <li className="nav-item">
          <Link to="/thursday">Thursday</Link>
        </li>
        <li className="nav-item">
          <Link to="/friday">Friday</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navpane;
