import React from "react";

import { Link } from "react-router-dom";
import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
import MidCard from "../components/Cards/MidCard";
import TextOnly from "../components/Cards/TextOnly";
function FifthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/FifthSection/11.jpg",
      text: "Woman who threw bowl of food at Chipotle worker sentenced to work 2 months in fast food job",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/FifthSection/21.jpg",
      text: "They bought a house in France for $20,000 without seeing it. Here’s what happened",
      tag: "",
    },

    // Add more cards as needed
  ];
  const textOnly = [
    {
      link: "/your-link-url",
      text: "Harvard, Penn and MIT presidents under fire over ‘despicable’ testimony on antisemitism and genocide",
    },
    {
      link: "/your-link-url",
      text: "Here’s where the minimum wage will increase next year",
    },
    {
      link: "/your-link-url",
      text: "Here’s why gas could drop below $3",
    },
    {
      link: "/your-link-url",
      text: "The Washington Post braces for historic 24-hour strike as journalists protest staff cuts and contract frustrations",
    },
    {
      link: "/your-link-url",
      text: "‘McDonald’s CEO: Bigger burgers are coming",
    },
  ];
  const textOnly2 = [
    {
      link: "/your-link-url",
      text: "They bought a house in France for $20,000 without seeing it. Here’s what happened",
    },
    {
      link: "/your-link-url",
      text: "‘Leaning tower’ in Italy on ‘high alert’ for collapse",
    },
    {
      link: "/your-link-url",
      text: "The spectacular African destination you’ve probably never heard of",
    },
    {
      link: "/your-link-url",
      text: "The Channel Tunnel’s passenger train service has a major problem. Now a radical shakeup might be on its way",
    },
    {
      link: "/your-link-url",
      text: "A beautiful ancient coastline that few travelers have heard of",
    },
  ];

  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">Featured Sections</h2>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="CNN BUSINESS" />
          {midCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly.map((card, index) => (
            <TextOnly key={index} {...card} />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          {/* Content for the second column */}
          <ColumnHead columnHeadTag="CNN TRAVEL" />
          {midCards2.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly2.map((card, index) => (
            <TextOnly key={index} {...card} />
          ))}
        </div>

        {/* Third Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          {/* Content for the third column */}
          <Link to="/your-link-url">
            {/* Replace 'videos/sample.mp4' with the path to your video file */}
            <div className="relative w-full h-full group">
              {/* Image */}
              <img
                src="images/FifthSection/fifthadv.jpg"
                alt="analysis"
                className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-400 opacity-0">
                {/* Additional content can be added here, if needed */}
              </div>
              <div className="text-xs">Advertisement</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
