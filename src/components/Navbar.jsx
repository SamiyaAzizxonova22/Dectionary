import React, { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import logo from "../icons/iconoir_book.svg";
import moon from "../icons/darkMode.svg";

function Navbar() {
  const [selected, setSelected] = useState(false);
  const [selectT, setSelectT] = useState();
  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState('light')

  const dropdown = document.getElementById('dropdown')
  const handleClick = (e) => {
    console.log(e);
    if (dropdown.classList === 'hidden') {
      dropdown.classList.remove('hidden')
      console.log('not hidden');
    } else if (dropdown.classList === 'hidden') {
      dropdown.classList.add('hidden')
      console.log('hidden');
    }

  }

  return (
    <div>
      <div className="flex justify-between pt-12">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={handleClick}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-lg font-bold dark:text-white bg-transparent focus:outline-none focus:ring-0  rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:focus:ring-0"
            type="button"
          >
            button{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="purple"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className="z-10 hidden divide-y divide-gray-100 shadow w-44 bg-white rounded-lg drop-shadow-[0_5px_30px_rgba(0,0,0,0.1)] dark:bg-[#1F1F1F] dark:shadow-[ 0_5px_30px_rgba(164,69,237,0.1)]"
          >
            <ul
              className="p-2 text-sm text-gray-700 dark:text-gray-200 rounded-xl   w-44"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 text-lg font-bold font-sans">
                  Sans Serif
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-lg font-bold font-serif">
                  Serif
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2  text-lg font-bold font-mono">
                  Mono
                </a>
              </li>
            </ul>
          </div>

          {/* darkMode */}


          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          </label>

          <div>
            <img src={moon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
