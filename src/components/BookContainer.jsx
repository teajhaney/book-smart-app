import React from "react";

const BookContainer = ({ image, title, authorName, price, onClick }) => {
  return (
    <div className="cursor-pointer  flex flex-col gap-5 " onClick={onClick}>
      <div className=" flex justify-center items-center aspect-[3/4]   bg-accents hover:border hover:border-primary">
        <img className=" h-[90%] w-[90%]" src={image} alt={title} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="max-md:text-sm font-bold">{title}</h1>
          <h1 className="text-xs">{authorName}</h1>
        </div>
        <h1 className="text-primary">$ {price.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default BookContainer;
