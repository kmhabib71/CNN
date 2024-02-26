import React, { useEffect, useState } from "react";
import Header from "../Commmon/Header/Header";
import Footer from "../Commmon/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import ThirdAdv from "../Home/ThirdAdv";
import TenthSection from "../Home/TenthSection";
import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
import SmallHorizontalCard from "../components/Cards/SmallHorizontalCard";
import FileDisplay from "../Helpers/FileDisplay";
import axios from "axios";
function Article() {
  const { articleId } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/getNewsByArticleId/${articleId}`
        );
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchArticle();
  }, [articleId]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error:{error}</div>;
  const smallHorizontalCard = [
    {
      link: "/your-link-url",
      imageSrc: "images/Article/21.jpg",
      text: "Sununu endorses Haley, hoping to slow Trump’s march to ...",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/Article/22.jpg",
      text: "Here’s Nikki Haley’s path to the Republican ...",
      tag: "",
    },

    {
      link: "/your-link-url",
      imageSrc: "images/Article/23.jpg",
      text: "Opinion: The best way to keep Trump off the ballot",
      tag: "",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 p-4">
          <div className="title">
            <h1 className="text-4xl font-bold m-4 pb-4">{article.title}</h1>
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
                By <span className="underline">{article.authorName}</span> ,
                Alejandra Jaramillo and Alison Main, CNN
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
              <FileDisplay fileName={article.file} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: article.editorText }}
              className="article-text ml-2 md:ml-16 mr-2 md:mr-16 mt-4"></div>
            <ThirdAdv />
          </div>
          <TenthSection />
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="mt-12 md:mt-[12.5rem]">
            <ColumnHead columnHeadTag="MORE FROM CNN" />
          </div>
          <div>
            {smallHorizontalCard.map((card, index) => (
              <SmallHorizontalCard key={index} {...card} />
            ))}
          </div>
          <div className="mt-5">
            <Link to="/adv-link">
              <div className="w-full h-64 group mb-4">
                <div className="w-full h-full group">
                  <img
                    src="/images/Article/adv.png"
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="text-xs">Advertisement</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Article;
