import React from "react";
import {
  HeroSection,
  BestBookSection,
  ShortListSection, OtherBooksSection
} from "../components/ExportComponents";
const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <BestBookSection />
      <ShortListSection />
      <OtherBooksSection/>
    </main>
  );
};

export default HomePage;
