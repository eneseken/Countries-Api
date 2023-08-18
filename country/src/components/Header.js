import React from "react";
import './Country.css';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header({ toggleTheme }) {
  return (
    <nav className="navbar p-3  d-flex justify-content-between align-items-center sticky-top" >
      <div className="container d-flex  justify-content-between align-items-center">
        <a className="navbar-brand fw-bolder" href="/">
          <h2 className="fw-bolder m-0">Where in the world?</h2>
        </a>
        <div>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
          <FaMoon className="moonIcon" size={30} color="black" />
          <FaSun className="sunIcon" size={30} color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
