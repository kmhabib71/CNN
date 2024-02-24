import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Commmon/Header/Header";
import Footer from "../Commmon/Footer/Footer";
import ThirdAdv from "../Home/ThirdAdv";
import TenthSection from "../Home/TenthSection";
import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
import SmallHorizontalCard from "../components/Cards/SmallHorizontalCard";
import axios from "axios";
import FileDisplay from "../Helpers/FileDisplay";

function Article() {
  const smallHorizontalCard = [
    {
      link: "/your-link-url",
      imageSrc: "http://localhost:3000/images/Article/21.jpg",
      text: "Sununu endorses Haley, hoping to slow Trump’s march to ...",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "http://localhost:3000/images/Article/22.jpg",
      text: "Here’s Nikki Haley’s path to the Republican ...",
      tag: "",
    },

    {
      link: "/your-link-url",
      imageSrc: "http://localhost:3000/images/Article/23.jpg",
      text: "Opinion: The best way to keep Trump off the ballot",
      tag: "",
    },
  ];
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/getNewsByArticle/${articleId}`
        ); // Replace with your actual API endpoint
        const data = response.data;
        setArticle(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
                src="http://localhost:3000/images/Article/1auth.jpg"
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
          {/* Render related articles or small horizontal cards */}

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
                    src="http://localhost:3000/images/Article/adv.png"
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

// import React from "react";
// import Header from "../Commmon/Header/Header";
// import Footer from "../Commmon/Footer/Footer";
// import { Link } from "react-router-dom";
// import ThirdAdv from "../Home/ThirdAdv";
// import TenthSection from "../Home/TenthSection";
// import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
// import SmallHorizontalCard from "../components/Cards/SmallHorizontalCard";

// function Article() {
//   const smallHorizontalCard = [
//     {
//       link: "/your-link-url",
//       imageSrc: "http://localhost:3000/images/Article/21.jpg",
//       text: "Sununu endorses Haley, hoping to slow Trump’s march to ...",
//       tag: "",
//     },
//     {
//       link: "/your-link-url",
//       imageSrc: "http://localhost:3000/images/Article/22.jpg",
//       text: "Here’s Nikki Haley’s path to the Republican ...",
//       tag: "",
//     },

//     {
//       link: "/your-link-url",
//       imageSrc: "http://localhost:3000/images/Article/23.jpg",
//       text: "Opinion: The best way to keep Trump off the ballot",
//       tag: "",
//     },
//   ];

//   return (
//     <>
//       <Header />
//       <div className="flex flex-wrap">
//         <div className="w-full md:w-3/4 p-4">
//           <div className="title">
//             <h1 className="text-4xl font-bold m-4 pb-4">
//               Christie ramps up Haley criticism as he rejects calls to exit GOP
//               primary
//             </h1>
//           </div>
{
  /* <div className="author flex">
  <div className="w-10 h-10 rounded-full overflow-hidden">
    <img
      src="http://localhost:3000/images/Article/1auth.jpg"
      className="object cover w-full h-full"
      alt=""
    />
  </div>
  <div className="author-name-date">
    <div className="author-name text-base text-gray-600 pl-2">
      By <span className="underline">Omar Jimenez</span> , Alejandra Jaramillo
      and Alison Main, CNN
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
</div>;
          <div className="content pt-6">
            <div className="image-box bg-gray-100">
              <img
                src="http://localhost:3000/images/Article/11.webp"
                alt=""
                className="w-full"
              />
              <div className="heading-tag text-xs text-gray-600 py-5 drop-shadow-sm p-2 border-b border-gray-300">
                Former New Jersey Gov. Chris Christie speaks at an event in
                Nashua, New Hampshire, on October 13, 2023.
              </div>
            </div>
            <div className="article-text ml-2 md:ml-16 mr-2 md:mr-16 mt-4">
              <p className="font-bold">Durham, New Hampshire (CNN) </p>

              <p>
                <Link to="to-link" className="underline">
                  Chris Christie
                </Link>{" "}
                has a message for those calling for him to exit the Republican
                presidential primary to help consolidate the field against
                front-runner{" "}
                <Link to="to-link" className="underline">
                  Donald Trump
                </Link>
                : “I’m not going anywhere.”
              </p>
              <p>
                “If they were up here in New Hampshire and saw the crowds we
                were getting, the reaction we were getting, they wouldn’t
                honestly be able to say any of that,” the former New Jersey
                governor told CNN in an interview Friday.
              </p>
              <p>
                Christie, who is counting on a strong performance in the{" "}
                <Link to="to-link" className="underline">
                  first-in-the-nation primary
                </Link>{" "}
                on January 23 to buoy his campaign, has positioned himself as a
                “truth teller” in the race, drawing a contrast with Trump and
                often criticizing his onetime ally’s conduct.
              </p>
              <p>
                But he has struggled to register in the national polls and, a
                little over a month before voting begins in the GOP primary,
                several top party financiers looking to boost a Trump
                alternative are throwing their support behind former South
                Carolina Gov.{" "}
                <Link to="to-link" className="underline">
                  Nikki Haley
                </Link>
                .
              </p>
              <p>
                <Link to="to-link" className="underline">
                  Chris Christie
                </Link>{" "}
                has a message for those calling for him to exit the Republican
                presidential primary to help consolidate the field against
                front-runner{" "}
                <Link to="to-link" className="underline">
                  Donald Trump
                </Link>
                : “I’m not going anywhere.”
              </p>
              <p>
                “If they were up here in New Hampshire and saw the crowds we
                were getting, the reaction we were getting, they wouldn’t
                honestly be able to say any of that,” the former New Jersey
                governor told CNN in an interview Friday.
              </p>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/896122667?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  title="video (online-video-cutter.com)"></iframe>
              </div>

              <p>
                Christie, who is counting on a strong performance in the{" "}
                <Link to="to-link" className="underline">
                  first-in-the-nation primary
                </Link>{" "}
                on January 23 to buoy his campaign, has positioned himself as a
                “truth teller” in the race, drawing a contrast with Trump and
                often criticizing his onetime ally’s conduct.
              </p>
              <p>
                But he has struggled to register in the national polls and, a
                little over a month before voting begins in the GOP primary,
                several top party financiers looking to boost a Trump
                alternative are throwing their support behind former South
                Carolina Gov.{" "}
                <Link to="to-link" className="underline">
                  Nikki Haley
                </Link>
                .
              </p>
              <p>
                <Link to="to-link" className="underline">
                  Chris Christie
                </Link>{" "}
                has a message for those calling for him to exit the Republican
                presidential primary to help consolidate the field against
                front-runner{" "}
                <Link to="to-link" className="underline">
                  Donald Trump
                </Link>
                : “I’m not going anywhere.”
              </p>
              <p>
                “If they were up here in New Hampshire and saw the crowds we
                were getting, the reaction we were getting, they wouldn’t
                honestly be able to say any of that,” the former New Jersey
                governor told CNN in an interview Friday.
              </p>
              <p>
                Christie, who is counting on a strong performance in the{" "}
                <Link to="to-link" className="underline">
                  first-in-the-nation primary
                </Link>{" "}
                on January 23 to buoy his campaign, has positioned himself as a
                “truth teller” in the race, drawing a contrast with Trump and
                often criticizing his onetime ally’s conduct.
              </p>
              <p>
                But he has struggled to register in the national polls and, a
                little over a month before voting begins in the GOP primary,
                several top party financiers looking to boost a Trump
                alternative are throwing their support behind former South
                Carolina Gov.{" "}
                <Link to="to-link" className="underline">
                  Nikki Haley
                </Link>
                .
              </p>
            </div>
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
                    src="http://localhost:3000/images/Article/adv.png"
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

export default Article; */
}
