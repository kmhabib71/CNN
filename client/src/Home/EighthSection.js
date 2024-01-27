import React from "react";

import MidCard from "../components/Cards/MidCard";
function EighthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/11.webp",
      text: "'She wasn't too interested in talking': Cop pulls over 2-year-old",
      tag: "Watch",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/12.webp",
      text: "Sheep rescued after spending years at bottom of sea cliff",
      tag: "Watch",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/21.webp",
      text: "Watch Australian woman break world record for surfing giant wave",
      tag: "Watch",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/EighthSection/22.webp",
      text: "New footage shows Alec Baldwin firing prop gun on 'Rust' set",
      tag: "Watch",
    },

    // Add more cards as needed
  ];

  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">Watch It</h2>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full md:w-1/2 p-4">
          {midCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full md:w-1/2 p-4">
          {/* Content for the second column */}
          {midCards2.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EighthSection;
