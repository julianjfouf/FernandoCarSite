import React, { useState, useEffect } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Book = () => {
  const [show, setShow] = useState(false);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showw");
        setShow(true);
      }
    });
  });

  useEffect(() => {}, [show]);

  const hiddenElements = document.querySelectorAll(".hidee");
  hiddenElements.forEach((el) => observer.observe(el));
  return (
    <div
      id="book"
      className="flex flex-col justify-center h-screen items-center bg-black text-white"
    >
      <p className="section__subtitle">BOOKING</p>
      <h1 className="text-6xl font-bold mb-2 lg:text-center">
        Book an Appointment!
      </h1>
      <p className="text-[#718096] font-semibold text-[18px] my-5">
        We'd love to work with you!
      </p>
      <div className="bg-white p-16 rounded-lg mt-10">
        <div className="p-2">
          <span className="leading-3 tracking-widest font-semibold text-yellow-600">
            EMAIL
          </span>
          <p className="mb-6 text-gray-700">danosmobiledetailing@gmail.com</p>
          <span className="leading-3 tracking-widest font-semibold text-yellow-600">
            PHONE
          </span>
          <p className="mb-6 text-gray-700">209-278-9098</p>
          <span className="leading-3 tracking-widest font-semibold text-yellow-600">
            SOCIAL MEDIA
          </span>
          <p className="mb-4 flex items-center justify-center gap-5 text-gray-700">
            <div className="flex items-center">
              <a
                target="_blank"
                href="https://www.instagram.com/danosmobiledetailing/"
              >
                <FaInstagram className="instagram text-white" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/danosmobiledetailing/"
                className="pl-1 z-10 cursor-pointer hover:text-blue-400 duration-300"
              >
                @danosmobiledetailing
              </a>
            </div>
            <div className="flex items-center">
              <a
                className="relative text-black z-10"
                target="_blank"
                href="https://www.tiktok.com/@danosdetailing?_t=8YWPjj4Ulna&_r=1"
              >
                <FaTiktok className="p-0.5 outline outline-1 bg-black outline-white rounded text-white z-[1]" />
                <FaTiktok className="p-0.5 text-blue-300 absolute z-[-1] top-0 translate-y-[-1px] translate-x-[-1px]" />
                <FaTiktok className="p-0.5 text-pink-500 absolute z-[-1] top-0 translate-y-[1px] translate-x-[1px]" />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@danosdetailing?_t=8YWPjj4Ulna&_r=1"
                className="pl-1 z-10 cursor-pointer hover:text-blue-400 duration-300"
              >
                @danosdetailing
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;

{
  /* <form className="flex w-full gap-4">
          <div>
            <div className="relative">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  class="peer ... border border-1 focus:outline-0 text-slate-700 p-2 shadow-sm"
                  placeholder="John Doe"
                  required
                />
                <p class="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid name.
                </p>
              </label>
            </div>
            <div className="relative mt-2">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  class="peer ... border border-1 focus:outline-0 text-slate-700 p-2 shadow-sm"
                  placeholder="email@example.com"
                  name="email"
                  required
                />
                <p class="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
            </div>
            <div className="relative mt-2">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Phone
                </span>
                <input
                  type="text"
                  class="peer ... border border-1 focus:outline-0 text-slate-700 p-2 shadow-sm"
                  placeholder="(555) 555-5555"
                  name="number"
                  required
                />
                <p class="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid phone number.
                </p>
              </label>
            </div>
            <button
              type="submit"
              className="bg-slate-700 w-min py-2 px-4 rounded-sm shadow-sm mt-4"
            >
              Book
            </button>
          </div>
          <div>
            <ol className="flex flex-col justify-around h-full">
              <li
                onClick={() => setSelected(1)}
                className={`border duration-300 border-1 border-gray-200 rounded text-slate-400 p-4 shadow-sm cursor-pointer ${
                  selected === 1
                    ? `bg-yellow-600 !text-white shadow-inner`
                    : null
                }`}
              >
                <h1>Package 1</h1>
                <p className="max-w-[200px] my-5">
                  Exterior Cleaning, including windows, mirrors, doors
                </p>
                <p>Price: $20.00</p>
              </li>
              <li
                onClick={() => setSelected(2)}
                className={`border duration-300 border-1 border-gray-200 rounded text-slate-400 p-4 shadow-sm cursor-pointer ${
                  selected === 2
                    ? `bg-yellow-600 !text-white shadow-inner`
                    : null
                }`}
              >
                <h1>Package 2</h1>
                <p className="max-w-[200px] my-5">
                  Exterior Cleaning, including windows, mirrors, doors
                </p>
                <p>Price: $40.00</p>
              </li>
            </ol>
          </div>
        </form> */
}
