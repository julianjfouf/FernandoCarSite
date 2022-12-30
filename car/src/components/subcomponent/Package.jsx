import React from "react";

const Package = ({ title, description, selected, id, setSelected, price }) => {
  return (
    <div
      onClick={() => setSelected(id)}
      className={`border border-gray-200 shadow-md text-slate-400 p-8 relative rounded-lg flex flex-col gap-5 md:min-w-[400px] cursor-pointer hover:text-slate-500 duration-300 ${
        selected ? `translate-y-[-12px] border-yellow-600 !shadow-xl` : null
      }`}
    >
      <h1
        className={`md:text-4xl text-3xl font-bold ${selected ? `!text-yellow-600` : null}`}
      >
        {title}

        <span
          className={`absolute left-4 p-2 top-[-30px] bg-white ${selected ? `!text-yellow-600` : null}`}
        >
          {" $"}
          {price}
        </span>
      </h1>
      <ul
        className={`list-disc md:text-xl ${selected ? `!text-amber-500` : null}`}
      >
        <span className="font-semibold ml-3">Package Includes:</span>
        {description.map((point, index) => (
          <li key={index} className="block ml-6 max-w-xs">
            • {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Package;
