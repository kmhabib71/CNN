import React from "react";
import Header from "../Commmon/Header/Header";
import Firstsection from "./Firstsection";
import SecondSection from "./SecondSection";
import ThirdAdv from "./ThirdAdv";
import FourthSection from "./FourthSection";

function Home() {
  return (
    <>
      <Header />
      <Firstsection />
      <SecondSection />
      <ThirdAdv />
      <FourthSection />
      {/* <Footer />  */}
    </>
  );
}

export default Home;
