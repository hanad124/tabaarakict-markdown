"use client";

import Hero from "@/pages/Home/Hero";
import About from "@/pages/Home/About";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import Services from "@/pages/Home/Services";
import Products from "@/pages/Home/Products";
import Portfolio from "./Portfolio";
import Clients from "./Clients";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollIndicator />
      <Hero />
      <About />
      <Services />
      <Products />
      <Portfolio />
      <Clients />
    </>
  );
}