import React from "react";
import About from "../components/About";
import Book from "../components/Book";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Book />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
