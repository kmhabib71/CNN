import React from "react";
import { Link } from "react-router-dom";

function MidCard({ link, imageSrc, tag, text }) {
  return (
    <Link to={link}>
      <div className="pb-2">
        <div className="relative w-305 h-171 group">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
          />
          {tag ? (
            <div className="absolute bottom-0 left-0 bg-white text-red-600 text-xs px-2 py-1 font-bold">
              {tag}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2 mt-2 hover:underline hover:text-gray-700">
            {text}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default MidCard;
