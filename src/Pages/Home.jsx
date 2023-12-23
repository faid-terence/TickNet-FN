import React from "react";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import PaymentOptions from "../components/About Us/Payment";
import { Support } from "../components/support/Support";
import { OurEvents } from "../components/About Us/OurEvents";
import { OurServices } from "../components/Our Services/OurServices";
import { SubscribeForm } from "../components/Subscribe/SubscribeForm";
import { Footer } from "../components/Footer/Footer";
import { Testimonials } from "../components/Testimonials/Testimonials";


export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <PaymentOptions />
      <Support />
      <OurEvents />
      <OurServices />
      <Testimonials />
      <SubscribeForm />
      <Footer />

    </>
  );
};
