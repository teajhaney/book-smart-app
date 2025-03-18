import React from "react";
import ButtonComponent from "../ButtonComponent";

const ShortListSection = () => {
  return (
    <section className="bg-secondary h-60 flex justify-center items-center">
      <div className="bodyContent flex">
        <div className="w-full flex flex-col gap-5">
          <h1 className="sectionHeadings">
            2025 National Book Awards for Fiction Shortlist
          </h1>
          <ButtonComponent text={"Explore now"} className={"bg-primary"} />
        </div>
        <div className="max-md:hidden w-full flex items-center justify-center">
          <div className="h-40 w-40">
            <img
              className="w-full h-full object-contain"
              src="/awardbooks.png"
              alt="awards"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortListSection;
