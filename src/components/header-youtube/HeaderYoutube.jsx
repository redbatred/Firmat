import React from "react";
import "./HeaderYoutube.css";
const HeaderYoutube = () => {
  return (
    <header>
      <a href="/">
        <img src="logo-l4.svg" alt="Logo"></img>
      </a>

      <nav>
        <ul>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" class="btn">
              Get a Quote
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderYoutube;
