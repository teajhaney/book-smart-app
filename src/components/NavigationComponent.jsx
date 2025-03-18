import React from "react";
import { GiBlackBook } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <nav className=" bg-secondary h-14 flex items-center ">
      <div className="bodyContent w-full flex justify-between items-center text-textColor">
        {/* logo */}
        <div className="flex gap-3 justify-between items-center text-3xl text-primary font-bold">
          <GiBlackBook />
          <h1>BookSmart</h1>
        </div>
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
