import React, { useState } from "react";
import {
  FaBars,
  FaCar,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Logo from "../assets/fernando logo.jpg";

const Navbar = ({ setMenu, menu }) => {
  return (
    <div
      id="home"
      className="z-[200] bg-transparent flex justify-between items-center text-white navigation py-2"
    >
      <div className="z-[200] container flex w-screen justify-between items-center mx-auto duration-300 px-5">
        <img
          src={Logo}
          className={`w-32 mt-5 ${menu ? `opacity-0` : null}`}
          alt=""
        />
        <ol className="hidden text-yellow-300 uppercase tracking-widest pr-20 md:!show md:!flex">
          <li className="mr-4 link before:bg-yellow-300">
            <a href="#services">Services</a>
          </li>
          <li className="ml-4 mr-4 link before:bg-yellow-300">
            <a href="#about">About</a>
          </li>
          <li className="ml-4 link before:bg-yellow-300">
            <a href="#book">Contact</a>
          </li>
        </ol>
        <ol className={`flex ${menu ? `opacity-0` : null}`}>
          <li className="mr-2">
            <a
              target="_blank"
              href="https://www.instagram.com/danosmobiledetailing/"
            >
              <FaInstagram className="hover:scale-[2] duration-300 instagram" />
            </a>
          </li>
          <li className="ml-2 mr-2">
            <a
              className="relative"
              target="_blank"
              href="https://www.tiktok.com/@danosdetailing?_t=8YWPjj4Ulna&_r=1"
            >
              <FaTiktok className="outline outline-1 outline-white rounded p-0.5 hover:scale-[2] peer duration-300 text-white z-10" />
              <FaTiktok className="hover:scale-[2] peer-hover:scale-[2] p-0.5 duration-300 text-blue-300 absolute top-0 z-[-1] translate-y-[-1px] translate-x-[-1px] peer-hover:translate-y-[-2px] peer-hover:translate-x-[-2px]" />
              <FaTiktok className="hover:scale-[2] peer-hover:scale-[2] p-0.5 duration-300 text-pink-500 absolute top-0 z-[-1] translate-y-[1px] translate-x-[1px] peer-hover:translate-y-[2px] peer-hover:translate-x-[2px]" />
            </a>
          </li>
        </ol>
        <div className="show md:hidden z-[200]">
          {menu ? (
            <FaTimes className="z-[200]" onClick={() => setMenu(false)} />
          ) : (
            <FaBars className="z-[200]" onClick={() => setMenu(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
