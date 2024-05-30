import React, { useState, useRef, useEffect } from "react";
import "./HeaderYoutube.css";

const HeaderYoutube = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <a href="/">
        <img src="src\image (88).png" alt="Logo" />
      </a>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav ref={menuRef} className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#">Discounts</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#" className="btn">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderYoutube;

