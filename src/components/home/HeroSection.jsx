
import React from "react";
import { animateFromXright, animateFromXleft } from "../../constants";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className=" bg-secondary py-20">
      <div className="bodyContent grid grid-cols-1 md:grid-cols-2 justify-center gap-5">
        <motion.div
          variants={animateFromXleft}
          initial="hidden"
          animate="visible"
          exit="hidden">
          <div className="flex flex-col max-md:items-center gap-5 sectionHeadings">
            <h1 className="text-3xl font-bold ">
              Buy books the smart way <br />
              <span className="text-primary">For the best prices</span>
            </h1>
            <p className="text-sm text-textColor/50 max-md:text-center">
              find and read more books you'll love abd keeep tarcks of books you
              want to read. Be part of the wordl largest community of book
              lovers
            </p>
          </div>
        </motion.div>
        {/* banner */}
        <motion.div
          variants={animateFromXright}
          initial="hidden"
          animate="visible"
          exit="hidden">
          <div className="flex justify-center">
            <div className="h-62 w-fit rounded-lg">
              {" "}
              <img
                src="/book1.png"
                alt="banner"
                className="object-cover h-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
