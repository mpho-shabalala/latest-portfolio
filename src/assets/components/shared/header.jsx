import { headerNavLinks } from "../../../data/navLinks";
import myImage from '../../images/my-img.png';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full mt-2 px-4 fixed top-0 left-0 z-40">
      <nav className="flex justify-between md:justify-center items-center w-full  md:w-fit mx-auto border rounded-full bg-white border-gray-200 p-2 z-40">
        <img className="h-10 w-10 rounded-full"
          src={myImage} alt="" />

        <ul className="hidden mx-8  space-x-8 text-gray-800 dark:text-gray-100 md:flex">
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
          className='dark-header-nav-link ml-2'
        >
          Contact
        </NavLink>
        <p className="md:hidden">Available for work</p>
        <div className="md:hidden dark:text-gray-100 bg-brand-purple text-white rounded-full px-4 py-2 cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  );
}
