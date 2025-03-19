import React from "react";
import { GiBlackBook } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavigationComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-14 flex items-center transition-all duration-300 z-50 ${
        isScrolled ? "bg-secondary bg-opacity-75 not-last:shadow-md" : "bg-secondary"
      }`}>
      <div className="bodyContent w-full flex justify-between items-center text-textColor">
        {/* logo */}
        <NavLink to="/">
          <div className="flex gap-3 justify-between items-center text-3xl text-primary font-bold">
            <GiBlackBook />
            <h1>BookSmart</h1>
          </div>
        </NavLink>
        {/* navigation link */}
        <ul className="flex gap-5 items-center justify-center text-textColor font-bold max-md:hidden ">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-primary" : "")}>
            <li className="hover:text-primary hover:underline hover:decoration-primary">
              HOME
            </li>
          </NavLink>
          <li className="hover:text-primary hover:underline hover:decoration-primary">
            ABOUR
          </li>
          <li className="hover:text-primary hover:underline hover:decoration-primary">
            SELL YOUR BOOK
          </li>
          <li className="hover:text-primary hover:underline hover:decoration-primary">
            BLOG
          </li>
        </ul>
        {/* menu */}
        <div className="flex gap-3 items-center text-3xl text-primary font-bold">
          <IoMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavigationComponent;
