import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonComponent } from "../components/ExportComponents.jsx";

const BookDetailsPage = () => {
  const location = useLocation();
  const book = location.state?.books;
  return (
    <section className="h-fit">
      <div className="bodyContent py-20 flex flex-col gap-10 lg:flex-row  h-fit">
        {/* Book Image */}
        <div className="w-full flex lg:justify-center items-center">
          <div className="h-96 w-80 md:w-80 lg:h-150 lg:w-96">
            {" "}
            <img
              className="w-full h-full object-contain"
              src={book.imageURL}
              alt={book.bookTitle}
            />
          </div>
        </div>
        <ddiv className=" w-full flex flex-col justify-center gap-5 text-textColor">
          <h1 className="sectionHeadings">{book.bookTitle}</h1>
          <h1 className="text-xl">
            <span className="font-bold">Author: </span>
            {book.authorName}
          </h1>
          <h1 className="text-textColor/50">
            {" "}
            <span className="font-bold text-textColor">Description: </span>
            {book.bookDescription}
          </h1>
          <h1 className="text-textColor">
            {" "}
            <span className="font-bold">Category: </span>
            {book.category}
          </h1>
          {/* buttons */}
          <div className="flex gap-5">
            <ButtonComponent text={"Buy now"} className={"bg-primary"} />
            <ButtonComponent
              text={"Read pdf"}
              className={"bg-tertiary"}
              onClick={() =>
                window.open(book.bookPDFURL, "_blank", "noopener,noreferrer")
              }
            />
          </div>
        </ddiv>
      </div>
    </section>
  );
};

export default BookDetailsPage;
