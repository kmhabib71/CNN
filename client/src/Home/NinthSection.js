import React from "react";

import { Link } from "react-router-dom";
import MidCard from "../components/Cards/MidCard";
function NinthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/NinthSection/11.jpg",
      text: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/NinthSection/12.jpg",
      text: "",
      tag: "",
    },
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/NinthSection/21.jpg",
      text: "",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/NinthSection/22.jpg",
      text: "",
      tag: "",
    },
  ];
  const midCards3 = [
    {
      link: "/your-link-url",
      imageSrc: "images/NinthSection/31.jpg",
      text: "",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/NinthSection/32.jpg",
      text: "",
      tag: "",
    },

    // Add more cards as needed
  ];
  // const midCards2 = [
  //   {
  //     link: "/your-link-url",
  //     imageSrc: "images/EighthSection/21.webp",
  //     text: "Watch Australian woman break world record for surfing giant wave",
  //     tag: "Watch",
  //   },
  //   {
  //     link: "/your-link-url",
  //     imageSrc: "images/EighthSection/22.webp",
  //     text: "New footage shows Alec Baldwin firing prop gun on 'Rust' set",
  //     tag: "Watch",
  //   },

  //   // Add more cards as needed
  // ];

  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">
        Photos You Should See
      </h2>
      <div className="flex">
        {/* First Column (2 parts) */}
        <div className="w-2/3 p-4 flex">
          <div className="w-1/3 p-2 ">
            {midCards.map((card, index) => (
              <MidCard key={index} {...card} />
            ))}
          </div>
          <div className="w-1/3 p-2 ">
            {midCards2.map((card, index) => (
              <MidCard key={index} {...card} />
            ))}
          </div>
          <div className="w-1/3 p-2 ">
            {midCards3.map((card, index) => (
              <MidCard key={index} {...card} />
            ))}
          </div>
        </div>

        {/* Second Column (1 part) */}
        <div className="w-1/3 p-4 ">
          {/* Content for the second column */}

          <Link to="/your-link-url">
            <div className=" relative w-305 h-171 group mb-4 ">
              {/* Replace 'videos/sample.mp4' with the path to your video file */}
              <div className="relative w-250 h-300 group">
                {/* Image */}
                <img
                  src="images/NinthSection/adv.jpg"
                  alt="analysis"
                  className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-400 opacity-0  ">
                  {/* Additional content can be added here, if needed */}
                </div>
                <div className=" text-xs">Advertisement</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NinthSection;
