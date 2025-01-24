import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface SubMenuItem {
  name: string;
  link: string;
}

interface DropDownProps {
  name: string;
  subMenu: SubMenuItem[];
}

export default function DropDown({ name, subMenu }: DropDownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-controls="dropdown-menu"
        className="flex items-center justify-between w-full py-2 px-3 text-emerald-600 rounded lg:border-0 lg:p-0 lg:w-auto dark:text-white"
      >
        {name}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        id="dropdown-menu"
        className={`absolute z-20 left-0 lg:-left-10 top-12 ${
          isDropdownOpen ? "block" : "hidden"
        } font-normal rounded-lg shadow min-w-[250px] w-full transition-all duration-300`}
      >
        <ul className="py-2 p-4 lg:p-0 border border-emerald-100 rounded-lg bg-emerald-50 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-emerald-800 lg:dark:bg-emerald-900 lg:dark:text-emerald-600 dark:border-emerald-700">
          {subMenu.map((subItem, index) => (
            <li key={index}>
              <Link
                to={subItem.link}
                onClick={closeDropdown} // Close dropdown when a category is clicked
                className="block py-2 px-3 text-emerald-600 rounded hover:bg-emerald-100 lg:hover:bg-transparent lg:hover:text-emerald-700 dark:text-white dark:hover:bg-emerald-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-emerald-700"
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}