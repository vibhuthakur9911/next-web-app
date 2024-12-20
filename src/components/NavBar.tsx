"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Button from "@/components/utils/Button"
// import { headers } from "next/headers";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-10 ">
    <nav className="bg-customGreen text-white py-2 ">
      <div className="container mx-auto flex justify-between items-center px-2 md:px-0  leading-normal xl:text-xl font-medium md:text-[15px]">
        {/* Logo */}
        <div className="">
          <Image
            src="/img/logo.svg" // Path relative to the public folder
            alt="Hawley Farm Logo"
            width={215}
            height={95}
            priority
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Header Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center gap-6 absolute md:static sm:absolute sm:top-28 left-0 w-full md:w-auto bg-customGreen md:bg-transparent z-10 `}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 gap-6 ">
            {/* Dropdown Menu */}
            <li className="relative group">
              <Link href="/accommodation" className="flex items-center gap-1">
                Accommodation{" "}
                <span>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </Link>
              {/* Dropdown Items */}
              <ul
                className="absolute invisible
               opacity-0 
               
               translate-y-2 
               shadow-gray-400/70 
               group-hover:visible 
               group-hover:opacity-100 
               group-hover:translate-y-0 
               transition-all 
               duration-500 
               bg-customGreen 
               text-white 
               text-end 
               shadow-2xl 
               py-2 
               w-64"
              >
                <li>
                  <Link
                    href="/accommodation/cider-press"
                    className="block px-4 py-2  border-b border-solid border-white"
                  >
                    Cider Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accommodation/rooms"
                    className="block px-4 py-2  border-b  border-solid border-white"
                  >
                    The Stables
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accommodation/suites"
                    className="block px-4 py-2"
                  >
                    Wagon House
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link href={``} className="flex items-center gap-1">
              Things to do{" "}
                <span>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </Link>
              {/* Dropdown Items */}
              <ul
                className="absolute invisible
               opacity-0 
               
               translate-y-2 
               shadow-gray-400/70 
               group-hover:visible 
               group-hover:opacity-100 
               group-hover:translate-y-0 
               transition-all 
               duration-500 
               bg-customGreen 
               text-white 
               text-end 
               shadow-2xl 
               py-2 
               w-64"
              >
                <li>
                  <Link
                    href="/things-to-do/on-the-farm"
                    className="block px-4 py-2  border-b border-solid border-white"
                  >
                    On the farm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/things-to-do/explore-east-devon"
                    className="block px-4 py-2  border-b  border-solid border-white"
                  >
                    Explore East Devon
                  </Link>
                </li>
                <li>
                  <Link
                    href="/things-to-do/what-if-its-rain"
                    className="block px-4 py-2  border-b  border-solid border-white"
                  >
                    What if it rains?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/things-to-do/walk-from-the-farm"
                    className="block px-4 py-2"
                  >
                    Walks from the farm
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <Link href="/things-to-do">Things to do</Link>
            </li> */}
            <li>
              <Link href="/availability-booking">Availability & Booking</Link>
            </li>
            <li>
              <Link href="/faq">Guest Info / FAQs</Link>
            </li>
            <li>
              <Link href="/guest-info">Contact us</Link>
            </li>
          </ul>
          {/* Book Now Button */}
          <div className="mt-4 md:mt-0 ">
            <button
              className="bg-white 
            transition-all 
            duration-500 
            hover:bg-black 
            hover:text-white 
            text-darkCustomGreen 
            px-4 
            py-2 
            rounded  
            border 
            border-solid 
            border-darkCustomGreen 
            font-medium"
            >
              Book Now
            </button>
            {/* <Button text="Book Now" href="/" className=""/> */}
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
