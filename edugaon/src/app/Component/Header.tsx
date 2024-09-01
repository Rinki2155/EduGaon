"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/common.module.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const startYear = 2018;
    const currentYear = new Date().getFullYear();
    const yearsCompleted = currentYear - startYear;

    return (
        <nav className={`${styles.mainHeading} p-4`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-bold ml-[60px]">
                    <Link href="/">EduGaon</Link>
                </div>
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
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className=
                        {`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 text-black mr-[50px]`}
                >
                    <ul className="md:flex md:space-x-8 text-black items-center font-bold">
                        <li>
                            <Link href="/" className='mr-[50px]'>                               
                            <span className={`text-5xl text-white font-bolder ${styles.fontMoreSugar}`}>{yearsCompleted}</span>
                                <sup className={`text-2xl ${styles.fontBimbo}`}>yrs</sup>
                            </Link>
                        </li>
                        <li>
                            <Link href="/success-story">Success Story</Link>
                        </li>
                        <li>
                            <Link href="/enterprise">Enterprise</Link>
                        </li>
                        <li>
                            <Link href="/career-support" className='mr-[40px]'>Career Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
