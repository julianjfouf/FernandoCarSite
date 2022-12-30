import React, { useState } from "react";
import About from "../components/About";
import Book from "../components/Book";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="">
      <Navbar setMenu={setMenu} menu={menu} />
      <Hero setMenu={setMenu} menu={menu} />
      {menu ? null : (
        <>
          <Services />
          <Book />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
