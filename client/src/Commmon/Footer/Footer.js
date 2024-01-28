import React from "react";

function Footer({ SearchText }) {
  const handleInputChange = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-black p-4">
      <hr className="pb-5" />
      <div className="flex items-center p-2 mt-4">
        <input
          type="text"
          value={SearchText}
          className="h-8 px-2 w-full bg-white border-none rounded-1 outline-none"
          onChange={handleInputChange}
        />
        <button className="h-8 bg-white text-black px-2 rounded-r flex items-center font-bold">
          Search <span className="ml-1 font-bold text-2xl pb-1">&#8594;</span>
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
