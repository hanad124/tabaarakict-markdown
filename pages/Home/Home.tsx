// "use client";

import Hero from "@/pages/Home/Hero";
import About from "@/pages/Home/About";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import Services from "@/pages/Home/Services";
import Products from "@/pages/Home/Products";
import Portfolio from "./Portfolio";
import Testtimonials from "./Testtimonials";
import FunFact from "@/pages/Home/FunFact";
// import Blogs from "./Blogs";
import Brands from "./Brands";
import Banner from "./Banner";
// import GetPosts from "./GetPosts";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Hero />
      <About />
      <Services />
      <Products />
      <Portfolio />
      <Testtimonials />
      <FunFact />
      {/* <GetPosts /> */}
      {/* <Blogs /> */}
      <Brands />
      <Banner />
    </>
  );
}
