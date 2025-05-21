import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import './navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lightgreen p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* left side */}
        <div className="flex items-center space-x-2">
          <img src="modelconnect_logo.png" alt="Logo" className="h-8 w-8" />
          <Link to="/"><button>
            <span className="hover:text-green-700 text-xl font-bold text-gray-800">ModelConnect</span>
          </button>
          </Link>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/profile" className="menu-link">User Profile</Link>
          <Link to="/contact" className="menu-link">Contact us</Link>
          <Link to="/dashboard" className="menu-link">Dashboard</Link>
          <Link to="/signup"><button className="bg-mediumteal hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded-md">
            Sign Up
          </button>
          </Link>
        </div>

        {/* hamburger button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HamburgerMenuIcon className="w-8 h-8" />
          </button>
        </div>

      </div>

      {/* mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 animate-slide-down">
          <Link to="/" className="menu-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/profile" className="menu-link" onClick={() => setIsOpen(false)}>User Profile</Link>
          <Link to="/contact" className="menu-link" onClick={() => setIsOpen(false)}>Contact us</Link>
          <button className="bg-mediumteal hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded-md" onClick={() => setIsOpen(false)}>
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
