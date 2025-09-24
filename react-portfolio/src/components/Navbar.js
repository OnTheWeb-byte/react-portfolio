/* File: Navbar.js
   Student Name: Abdulaziz
   StudentID: 301420861
   Date: 09/25/2025
*/
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="nav-left">
        <Link to="/" className="logo-link" aria-label="Home">
          <Logo initials="AI" />
        </Link>
        <span className="site-name">Abdulaziz Islam</span>
      </div>

      <nav className="nav-links" role="navigation" aria-label="Main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
