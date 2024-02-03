import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./Article/Article";
import Register from "./AuthPages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
