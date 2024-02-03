import React from "react";
import { NavLink } from "react-router-dom";

function AuthFooter() {
  return (
    <div className="bg-black w-full px-4">
      <div className="bg-black w-full pt-8 pb-8 px-5 flex flex-col items-start text white border-t border-b border-gray-700">
        <div className=" w-full flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="images/Header/logo.png"
              alt=""
              className="w-auto h-8 mr-4"
            />
            <div className="font-bold text-2xl text-white">US</div>
          </div>
          <div className="flex items-center">
            <NavLink
              to="/Watch"
              className="text-white text-[0.937rem] font-bold ml-7">
              Watch
            </NavLink>
            <NavLink
              to="/Listen"
              className="text-white text-[0.937rem] font-bold ml-7">
              Listen
            </NavLink>
            <NavLink
              to="/live-tv"
              className="text-white text-[0.937rem] font-bold ml-7">
              Live TV
            </NavLink>
            <div className="border-r border-gray-500 w-1 h-6 mx-4"></div>\
            <div className="text-white text-[0.937rem] font-bold ">
              Follow CNN
            </div>
            <NavLink
              to="/facebook"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/Facebook.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/x"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img src="images/Footer/X.png" className="h-full w-full" alt="" />
            </NavLink>
            <NavLink
              to="/Instagram"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/Instagram.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/Tiktok"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/Tiktok.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/LinkedIn"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/LinkedIn.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <button className="border border-white rounded-xl px-4 py-2 ml-5 text-white hover:bg-gray-800">
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="text-white text-sm flex flex-wrap items-center justify-start w-full mt-4 ">
        <NavLink to="/terms-of-use">Terms of Use</NavLink>
        <NavLink to="/privacy-policy" className="ml-4">
          Privacy Policy
        </NavLink>
        <NavLink to="/Cookie-Settings" className="ml-4">
          Cookie Settings
        </NavLink>
        <NavLink to="/Ad-Choices" className="ml-4">
          Ad Choices
        </NavLink>
        <NavLink to="/About" className="ml-4">
          Accessibility & CC
        </NavLink>
        <NavLink to="/privacy-policy" className="ml-4">
          About
        </NavLink>
        <NavLink to="/Newsletters" className="ml-4">
          Newsletters
        </NavLink>
        <NavLink to="/Transcripts" className="ml-4">
          Transcripts
        </NavLink>
      </div>
      <div className="text-white text-sm mt-4">
        © 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights
      </div>
      <div className="text-white text-sm pb-6">
        Reserved. CNN Sans ™ & © 2016 Cable News Network.
      </div>
    </div>
  );
}

export default AuthFooter;
