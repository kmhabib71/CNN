import React from "react";
import { Link } from "react-router-dom";

function MidCard({ link, imageSrc }) {
  return (
    <Link to={link}>
      <div className="">
        <div className="relative w-305 h-171 group">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
          />
        </div>
        <div>
          <h4></h4>
        </div>
      </div>
    </Link>
  );
}

export default MidCard;
