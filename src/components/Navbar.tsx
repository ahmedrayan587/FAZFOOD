import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoFastFood } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import DropDown from './DropDown';
import { useCart } from '../context/CartContext';
import { ToastContainer } from "react-toastify";

// JSON data
const navbarData = {
  "logo": {
    "image": "logo.png",
    "altText": "Restaurant Logo",
    "link": "/"
  },
  "menuItems": [
    {
      "name": "Home",
      "link": "/",
      "icon": "home-icon.png"
    },
    {
      "name": "Menu",
      "link": "/menu",
      "icon": "menu-icon.png",
      "subMenu": [
        {
          "name": "All",
          "link": "/menu"
        },
        {
          "name": "Breakfast",
          "link": "/menu/breakfast"
        },
        {
          "name": "Lunch",
          "link": "/menu/lunch"
        },
        {
          "name": "Dinner",
          "link": "/menu/dinner"
        },
        {
          "name": "Desserts",
          "link": "/menu/desserts"
        },
        {
          "name": "Beverages",
          "link": "/menu/beverages"
        }
      ]
    },
    {
      "name": "About Us",
      "link": "/about",
      "icon": "about-icon.png"
    },
    {
      "name": "Reservations",
      "link": "/reservations",
      "icon": "reservation-icon.png"
    },
    {
      "name": "Specials",
      "link": "/specials",
      "icon": "specials-icon.png"
    },
    {
      "name": "Events",
      "link": "/events",
      "icon": "events-icon.png"
    },
    {
      "name": "Contact",
      "link": "/contact",
      "icon": "contact-icon.png"
    }
  ],
  "ctaButton": {
    "text": "Cart",
    "link": "/cart",
    "icon": "order-icon.png"
  }
};

export default function Navbar() {
  const { cartItemCount } = useCart(); // Get the cart item count
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-emerald-200 dark:bg-emerald-800">
      <ToastContainer />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <IoFastFood className='text-emerald-600 dark:text-white size-11' />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-emerald-600 dark:text-white">
            FAZFOOD
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-emerald-500 rounded-lg lg:hidden hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:text-emerald-400 dark:hover:bg-emerald-700 dark:focus:ring-emerald-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-emerald-100 rounded-lg bg-emerald-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-emerald-800 lg:dark:bg-emerald-800 lg:dark:text-emerald-600 dark:border-emerald-700">
            {/* Render Menu Items */}
            {navbarData.menuItems.map((item, index) => (
              <li key={index}>
                {item.subMenu ? (
                  // Dropdown for items with subMenu
                  <DropDown
                    name={item.name}
                    subMenu={item.subMenu}
                  />
                ) : (
                  // Regular link for items without subMenu
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-white bg-emerald-600 rounded lg:bg-transparent lg:text-emerald-700 lg:p-0 dark:text-white"
                        : "block py-2 px-3 text-emerald-600 rounded hover:bg-emerald-100 lg:hover:bg-transparent lg:hover:text-emerald-700 lg:p-0 dark:text-white dark:hover:bg-emerald-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-emerald-700"
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
            {/* CTA Button */}
            <li>
              <NavLink
                to={navbarData.ctaButton.link}
                className={({ isActive }) =>
                  isActive
                    ? "relative block py-2 px-3 text-white bg-emerald-600 rounded lg:bg-transparent lg:text-emerald-700 lg:p-0 dark:text-white"
                    : " relative block py-2 px-3 text-emerald-600 rounded hover:bg-emerald-100 lg:hover:bg-transparent lg:hover:text-emerald-700 lg:p-0 dark:text-white dark:hover:bg-emerald-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-emerald-700"
                }
                >
                {navbarData.ctaButton.text}
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-rose-600 text-white text-xs rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                      {cartItemCount}
                    </span>
                    )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}