// src/components/unique/Footer.jsx
// import socialLinks from "../../../data/externalLinks";
// import { headerNavLinks } from "../../../data/navLinks";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 shadow-inner mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-gray-300 text-sm select-none">

        {/* Left: copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>

        {/* Center: nav links mini sitemap */}
        <nav className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-400 w-full md:w-auto justify-center">
          {/* {externalLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-cyan-400 transition-colors duration-300 ${
                  isActive ? "text-cyan-400 font-semibold" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))} */}
        </nav>

        {/* Right: social/external links */}
        <div className="flex space-x-6 mt-6 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          {/* <a
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={externalLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={externalLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href={externalLinks.email}
            className="hover:text-cyan-400 transition-colors duration-300"
            aria-label="Email"
          >
            Email
          </a> */}
        </div>
      </div>
    </footer>
  );
}
