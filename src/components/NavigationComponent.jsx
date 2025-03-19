import { GiBlackBook } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { animateFromYtop } from "../constants.jsx";

const NavigationComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenu((prev) => !prev);
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-14 flex items-center transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-secondary bg-opacity-75 not-last:shadow-md"
          : "bg-secondary"
      }`}>
      <AnimatePresence>
        {isMenu && (
          <motion.div
            variants={animateFromYtop}
            viewport={{ once: false, amount: 0.1 }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-14 bg-secondary shadow-sm h-fit w-full px-3 py-5 rounded-b-2xl">
            {/* navigation link */}
            <ul
              onClick={handleMenuClick}
              className="flex flex-col gap-5  text-textColor font-bold  ">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "text-primary" : "")}>
                <li className="hover:text-primary hover:underline hover:decoration-primary">
                  HOME
                </li>
              </NavLink>
              <li className="hover:text-primary hover:underline hover:decoration-primary">
                ABOUT
              </li>
              <li className="hover:text-primary hover:underline hover:decoration-primary">
                SELL YOUR BOOK
              </li>
              <li className="hover:text-primary hover:underline hover:decoration-primary">
                BLOG
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
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
            ABOUT
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
          {isMenu ? (
            <RxCross2 onClick={handleMenuClick} className="cursor-pointer" />
          ) : (
            <IoMenu onClick={handleMenuClick} className="cursor-pointer" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationComponent;
