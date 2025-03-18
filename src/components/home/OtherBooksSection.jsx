/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateFromYbottom, books } from "../../constants";
import { motion } from "framer-motion";
import { BookContainer } from "../ExportComponents";
import { useNavigate } from "react-router-dom";

const OtherBooksSection = () => {
  const navigate = useNavigate();

  const handleBookClick = (books) => {
    navigate("/book-details-page", { state: { books } });
  };

  const displayedBooks = books.slice(4);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="py-10 h-fit text-textColor">
      <div className="bodyContent flex flex-col  gap-10">
        <h1 className="sectionHeadings text-center">Other Books</h1>
        {/* best sellers */}
        <motion.div
          variants={animateFromYbottom}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {displayedBooks.map((displayedBook) => (
            <BookContainer
              onClick={() => handleBookClick(displayedBook)}
              key={displayedBook.id}
              image={displayedBook.imageURL}
              title={displayedBook.bookTitle}
              authorName={displayedBook.authorName}
              price={displayedBook.bookPrice}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OtherBooksSection;
