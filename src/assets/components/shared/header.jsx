// src/components/unique/Header.jsx

import { headerNavLinks } from "../../../data/navLinks";
import myImage from '../../images/my-img.png';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="">
      <nav className=" header-nav">
          <img className="mini-img"
          src={myImage} alt="" />

        {/* Navigation Links */}
        <ul className="header-nav-links">
          {headerNavLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover-nav ${
                    isActive ? "active-nav" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        
          <NavLink
          to={'/contacts'}
          className='dark-header-nav-link'
          
        >
          Contact
        </NavLink>
        

        {/* Mobile Menu Placeholder (optional) */}
        <div className="mobile-menu">
          {/* Add hamburger icon & toggle logic here later */}
          ☰
        </div>
      </nav>
    </header>
  );
}
