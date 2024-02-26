import React from "react";
import { Link } from "react-router-dom";
import MidCard from "../components/Cards/MidCard";
import TextOnly from "../components/Cards/TextOnly";
import UseNewsFetch from "../Commmon/FetchNews/UseNewsFetch";
import FileDisplay from "../Helpers/FileDisplay";
function Firstsection() {
  const {
    data: midCards,
    loading: loading1,
    error: error1,
  } = UseNewsFetch(null, null, "General", null, 3, "desc");
  const {
    data: breaking,
    loading: loading2,
    error: error2,
  } = UseNewsFetch(null, null, "Breaking", null, 2, "desc");
  const {
    data: textOnly,
    loading: loading3,
    error: error3,
  } = UseNewsFetch(null, null, "General", null, 6, "asc");
  const {
    data: liveUpdate,
    loading: loading4,
    error: error4,
  } = UseNewsFetch(null, null, "LiveUpdate", null, 1, "desc");
  // const MidCards = [
  //   {
  //     link: "/live/Israel-hamas-war",
  //     imageSrc: "images/FirstSection/analysis.jpg",
  //     text: "Rishi Sunak is picking a fight on the migration issue that he probably cannot win",
  //     tag: "Analysis",
  //   },
  //   {
  //     link: "/your-link-url",
  //     imageSrc: "images/FirstSection/news3.jpg",
  //     text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
  //     tag: "",
  //   },
  //   {
  //     link: "/your-link-url",
  //     imageSrc: "images/FirstSection/news2.jpg",
  //     text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
  //     tag: "",
  //   },
  //   // Add more cards as needed
  // ];

  // const textOnly = [
  //   {
  //     link: "/your-link-url",
  //     text: "iMichigan school shooter sentenced to life in prison without parole",
  //   },
  //   {
  //     link: "/your-link-url",
  //     text: "Six French teenagers convicted in connection with 2020 beheading of teacher Paty",
  //   },
  //   {
  //     link: "/your-link-url",
  //     text: "Appeals court maintains most of Trump gag order in federal election subversion case",
  //   },
  //   {
  //     link: "/your-link-url",
  //     text: "Ryan O’Neal, star of ‘Love Story’ and ‘Peyton Place,’ dead",
  //   },
  //   {
  //     link: "/your-link-url",
  //     text: "Wartime spread of drug-resistant infections in Ukraine is an ‘urgent crisis,’ CDC report says",
  //   },
  //   {
  //     link: "/your-link-url",
  //     text: "European Union agrees to regulate potentially harmful effects of artificial intelligence",
  //   },
  // ];

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-4 ">
          <Link
            to={`/${breaking && breaking.length > 0 ? breaking[1]._id : ""}`}>
            <div className="max-w-screen-md mx-auto p-8">
              <h1 className="text-5xl font-bold mb-4 text-black text-center hover:underline">
                {breaking && breaking.length > 0 ? breaking[1].title : ""}
              </h1>
              <div className="max-w-screen-md mx-auto mb-3">
                <div className="aspect-w-16 aspect-h-9">
                  {breaking && breaking.length > 0 ? (
                    <FileDisplay fileName={breaking[1].file} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <ul className="px-5">
            <li className="list-disc text-[1.02rem] my-3">
              <Link
                to={`/${
                  textOnly && textOnly.length > 0 ? textOnly[0]._id : ""
                }`}>
                {textOnly && textOnly.length > 0 && (
                  <div> {textOnly[0].title}</div>
                )}
              </Link>
            </li>
            <li className="list-disc text-[1.02rem] my-3">
              <Link
                to={`live/${
                  liveUpdate && liveUpdate.length > 0
                    ? liveUpdate[0].liveUpdateType
                    : ""
                }`}>
                {liveUpdate && liveUpdate.length > 0 && (
                  <div>
                    {" "}
                    <span className=" text-red-600 font-bold text-[1rem]">
                      Live Update:{" "}
                    </span>
                    {liveUpdate[0].title}
                  </div>
                )}
              </Link>
            </li>
            {midCards.map((newsItem, index) => (
              <Link to={`/${newsItem._id}`}>
                <li className="list-disc my-3">{newsItem.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-4 ">
          {midCards.map((card, index) => (
            <MidCard
              key={`cat1-${index}`}
              link={`/${card._id}`}
              imageSrc={card.file}
              text={card.title}
              tag={card.tag}
              db={true}
            />
          ))}
        </div>
        <div className="w-full md:w-1/3 p-4 ">
          <Link to="/news-link" className="relative w-305 h-171 group mb-4">
            <video
              autoPlay={true}
              muted
              playsinline
              loop
              controls
              className="w-full  rounded-sm">
              <source src="/videos/FirstSection/video.mp4" />
            </video>
          </Link>
          <div>
            <div className="mb-2 mt-4 font-bold text-xl hover:underline">
              Catch up on todays global news
            </div>
            <div>
              {textOnly.map((card, index) => (
                <TextOnly
                  key={`cat2-${index}`}
                  link={`/${card._id}`}
                  text={card.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstsection;
