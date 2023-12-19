import React from "react";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import PaymentOptions from "../components/About Us/Payment";
import { Support } from "../components/support/Support";
import { OurEvents } from "../components/About Us/OurEvents";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <PaymentOptions />
      <Support />
      <OurEvents/>
    </>
  );
};
