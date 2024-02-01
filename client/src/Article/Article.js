import React from "react";
import Header from "../Commmon/Header/Header";
import Footer from "../Commmon/Footer/Footer";

function Article() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 p-4">
          <div className="title">
            <h1 className="text-4xl font-bold m-4 pb-4">
              Christie ramps up Haley criticism as he rejects calls to exit GOP
              primary
            </h1>
          </div>
          <div className="author flex">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/images/Article/1auth.jpg"
                className="object cover w-full h-full"
                alt=""
              />
            </div>
            <div className="author-name-date">
              <div className="author-name text-base text-gray-600 pl-2">
                By <span className="underline">Omar Jimenez</span> , Alejandra
                Jaramillo and Alison Main, CNN
              </div>
              <div className="publish-date text-base text-gray-600 pl-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="pl-2">
                  5 minute read Published 9:10 AM EST, Sat December 9, 2023
                </span>
              </div>
            </div>
          </div>
          <div className="content pt-6">
            <div className="image-box bg-gray-100">
              <img src="/images/Article/11.webp" alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4"></div>
      </div>
      <Footer />
    </>
  );
}

export default Article;
