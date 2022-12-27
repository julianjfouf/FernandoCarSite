import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Logo from "../assets/fernando logo.jpg";

const Footer = () => {
  return (
    <div className="bg-black w-screen h-full overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center items-center text-white py-48">
        <a href="#home" className="relative group cursor-pointer">
          <img src={Logo} className="w-60" alt="" />
          <p className="absolute flex text-yellow-300 items-baseline top-[50%] opacity-0 left-[50%] group-hover:left-[100%] group-hover:opacity-100 transition-all duration-300">
            Top <FaArrowUp className="pt-1" />
          </p>
        </a>
        <ol className="flex my-5 mt-0">
          <li className="mr-4 link text-yellow-300 uppercase tracking-widest before:bg-yellow-300">
            <a href="#services">Services</a>
          </li>
          <li className="ml-4 mr-4 link text-yellow-300 uppercase tracking-widest before:bg-yellow-300">
            <a href="#about">About</a>
          </li>
          <li className="ml-4 link text-yellow-300 uppercase tracking-widest before:bg-yellow-300">
            <a href="#book">Contact</a>
          </li>
        </ol>
        <p className="text-center">
          &copy; Dano's Detailing | All Rights Reserved <br /> Powered by Julian
          Jfouf
        </p>
      </div>
    </div>
  );
};

export default Footer;
