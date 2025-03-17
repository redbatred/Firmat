import React, { useState, useRef, useEffect } from 'react';
import './MyHeader.css'; 
import '../../kolorsat.css';

const MyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    console.log("Clicked outside");
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      console.log("Closing menu");
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    console.log("Adding event listener");
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      console.log("Removing event listener");
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <h1>My React App</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav ref={menuRef} className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default MyHeader;
