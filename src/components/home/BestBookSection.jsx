/* eslint-disable no-unused-vars */
import React from "react";
import { animateFromYtop, books } from "../../constants.jsx";
import { motion } from "framer-motion";
import { BookContainer } from "../ExportComponents.jsx";
import { useNavigate } from "react-router-dom";
const BestBookSection = () => {
  const navigate = useNavigate();

  const handleBookClick = (books) => {
    navigate("/book-details-page", { state: { books } });
  };

  const displayedBooks = books.slice(0, 4);
  return (
    <section className="py-10 h-fit text-textColor">
      <div className="bodyContent flex flex-col  gap-10">
        <h1 className="sectionHeadings text-center">Best Seller Books</h1>
        {/* best sellers */}
        <motion.div
          variants={animateFromYtop}
          viewport={{ once: false, amount: 0.1 }}
          initial="hidden"
          whileInView="visible"
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

export default BestBookSection;
