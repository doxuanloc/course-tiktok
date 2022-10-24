import React from "react";
import dynamic from "next/dynamic";
const CategorySlider = dynamic(
  () => import("../Elements/Slider/CategorySlider"),
  {
    ssr: false,
  }
);
import CounterSection from "./CounterSection";
import HeroSectionTwo from "./HeroSectionTwo";

const HomeMain = () => {
  return (
    <main>
      <HeroSectionTwo />
      <CounterSection />
      <CategorySlider />
    </main>
  );
};

export default HomeMain;
