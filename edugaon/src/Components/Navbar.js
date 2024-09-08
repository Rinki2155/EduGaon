"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const yearsCompleted = currentYear - startYear;

  return (
    <nav className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-4xl font-bold ml-4 md:ml-[60px]">
          <Link href="/">EduGaon</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:items-center md:space-x-8 text-black mt-4 md:mt-0 mr-4 md:mr-[50px] md:ml-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-black items-center  text-[18px]">
            <li>
              <Link href="/" className="mr-[50px] text-center">
                <span className="text-5xl text-white font-bold font-moreSugar">
                  {yearsCompleted}
                </span>

                <sup className="text-2xl font-Bimbo">yrs</sup>
              </Link>
            </li>
            <li>
              <Link
                href="/success-story"
                className="block py-2 md:py-0 md:inline-block hover:text-white"
              >
                Success Story
              </Link>
            </li>
            <li>
              <Link
                href="/enterprise"
                className="block py-2 md:py-0 md:inline-block hover:text-white"
              >
                Enterprise
              </Link>
            </li>
            <li>
              <Link
                href="/career-support"
                className="block py-2 md:py-0 md:inline-block hover:text-white"
              >
                Career Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
