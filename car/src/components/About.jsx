import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const About = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(" showw");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidee");
  hiddenElements.forEach((el) => observer.observe(el));
  return (
    <div
      id="about"
      className="py-20 flex flex-col justify-center items-center container mx-auto"
    >
      <p className="section__subtitle">BACKGROUND</p>
      <h1 className="text-6xl font-bold text-gray-900 mb-2">About Us</h1>
      <div className="flex gap-8 bg-black text-white p-8 items-center my-24 rounded shadow-lg">
        <img
          className="max-h-[480px] rounded shadow-lg border-1 border border-slate-500"
          src="https://cdn.discordapp.com/attachments/699485073509974056/1056154600014610474/About_me_pic.png"
          alt=""
        />
        <p className="max-w-[400px] text-xl p-8 leading-[48px]">
          At 17 years old, Fernando Zepeda founded Dano's Detailing as a way to
          raise money for college expenses. Offering
          <span className="text-yellow-500 font-semibold">
            {" "}
            premium detailing services
          </span>{" "}
          in the form of{" "}
          <span className="text-yellow-500 font-semibold">
            {" "}
            basic packages
          </span>{" "}
          &{" "}
          <span className="text-yellow-500 font-semibold">
            {" "}
            monthly services
          </span>
          , Dano's Detailing prioritizes an{" "}
          <span className="text-yellow-500 font-semibold">
            {" "}
            exceptional job
          </span>{" "}
          with the{" "}
          <span className="text-yellow-500 font-semibold">
            {" "}
            utmost care
          </span>{" "}
          for both you & your car.
        </p>
      </div>
      {/* <div
        id="contact"
        className="fernando translate-y-[300px] bg-black text-white flex justify-around rounded-3xl shadow-xl border border-1 border-slate-700 p-8 my-8 w-full z-[1] text-center"
      >
        <div className="w-[30%]">
          <h3 className="p-2 text-2xl text-center font-semibold">
            Get in touch!
          </h3>
          <div className="p-2">
            <span className="leading-3 tracking-widest text-yellow-600">
              EMAIL
            </span>
            <p className="mb-4">FernandoZepeda@gmail.com</p>
            <span className="leading-3 tracking-widest text-yellow-600">
              PHONE
            </span>
            <p className="mb-4">(209)209-2092</p>
            <span className="leading-3 tracking-widest text-yellow-600">
              SOCIAL MEDIA
            </span>
            <p className="mb-4 flex items-center justify-center gap-5">
              <div className="flex items-center">
                <a className="relative" href="">
                  <FaTiktok className="p-0.5 outline outline-1 outline-white rounded text-white z-[10]" />
                  <FaTiktok className="p-0.5 text-blue-300 absolute z-[-1] top-0 translate-y-[-1px] translate-x-[-1px]" />
                  <FaTiktok className="p-0.5 text-pink-500 absolute z-[-1] top-0 translate-y-[1px] translate-x-[1px]" />
                </a>
                <a
                  href=""
                  className="pl-1 z-10 cursor-pointer hover:text-blue-400 duration-300"
                >
                  @FernandoZepeda
                </a>
              </div>
              <div className="flex items-center">
                <a className="" href="">
                  <FaInstagram className="instagram" />
                </a>
                <a
                  href=""
                  className="pl-1 z-10 cursor-pointer hover:text-blue-400 duration-300"
                >
                  @FernandoZepeda
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center">
          <h3 className="p-2 text-2xl text-center font-semibold">
            Join our newsletter for updates!
          </h3>
          <div className="w-full relative bg-white shadow-sm border border-1 border-slate-900 rounded-full mt-5">
            <input
              placeholder="email@example.com"
              type="text"
              className="focus:outline-0 w-full p-4 text-slate-900 text-xl"
              name="email"
              id=""
            />
            <button
              type="submit"
              className="absolute right-0 bg-yellow-600 p-4 w-24 shadow-md text-xl"
            >
              Join!
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
