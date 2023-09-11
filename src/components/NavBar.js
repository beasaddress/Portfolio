import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Navbar.css';

function NavBar ({ currentPage, handlePageChange}) {
    return (
    <div className="border-b relative z-50">
        <div className="container flex justify-between items-center">
        <Link to={'/About'}>
          <h1 className="text-xl sm:text-3xl font-bold">Beatriz Sandoval</h1>
        </Link>  
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}      
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('portfolio')}          
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}         
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}          
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
</div>
  );
}

export default NavBar;