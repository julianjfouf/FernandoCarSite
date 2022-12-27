import React from "react";
import { FaAngleDown, FaCaretDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero h-screen overflow-hidden w-screen flex justify-center flex-col items-center">
      <div className="bg-black absolute top-0 left-0 w-screen h-full z-[-1] opacity-[0.75]"></div>
      <img
        style={{ objectFit: "cover" }}
        className="absolute top-0 left-0 h-screen w-screen bottom-0 z-[-2]"
        src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
        alt=""
      />
      <div className="z-10 flex flex-col items-center justify-center">
        <p
          className="text-md z-10 text-[#718096] font-semibold"
          style={{ textTransform: "capitalize", letterSpacing: "2px" }}
        >
          CAR DETAILING
        </p>
        <h1 className="text-white text-6xl z-10 text-center">
          Your car is in good hands at <br />
        </h1>
      </div>
      <span
        style={{
          fontFamily: "built titling",
          fontSize: "108px",
          zIndex: "10",
          color: "white",
          letterSpacing: "0px",
        }}
      >
        DANO'S DETAILING
      </span>

      <a
        href="#book"
        className="text-black text-3xl duration-300 mb-28 flex justify-center items-center bg-white z-10 rounded py-3 px-6 border border-1 border-black outline outline-1 outline-white hover:bg-black hover:text-white"
      >
        Book
      </a>
      <div className="absolute bottom-5 text-white animate-bounce">
        <FaAngleDown className="scale-[2] text-yellow-300" />
      </div>
    </div>
  );
};

export default Hero;
