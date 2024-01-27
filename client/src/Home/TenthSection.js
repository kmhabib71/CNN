import React from "react";

import MidCard from "../components/Cards/MidCard";
function TenthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/11.webp",
      text: "Windows Users Didn't Know This Simple Trick To Block All Ads (Do It Now)",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/21.webp",
      text: "Castle-Sized Cabin on Lake Tahoe Asks Nearly $50 Million—Glass Funiculars Included",
      tag: "",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/31.webp",
      text: "What Happens When Kamala Harris Lives in Your Condo Complex",
      tag: "",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/41.webp",
      text: "Incredible News: The Pain-Relieving Product that Changes Lives!",
      tag: "",
      horizontal: true,
    },
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
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">Paid Content</h2>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full md:w-3/3 p-4">
          <div className="flex flex-wrap">
            {midCards.map((card, index) => (
              <div key={index} className="w-full md:w-1/2 p-2">
                <MidCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Second Column (1 part) */}
      </div>
    </div>
  );
}

export default TenthSection;
