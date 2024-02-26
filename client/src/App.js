import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./Article/Article";
import Register from "./AuthPages/Register";
import Login from "./AuthPages/Login";
import Admin from "./Admin/Admin";
import Search from "./Search/Search";
import LiveNews from "./LiveNews/LiveNews";
import Category from "./CategoryPage/Category";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:articleId" element={<Article />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/:searchText" element={<Search />} />
          <Route path="/Admin/*" element={<Admin />} />
          <Route path="/live/:liveUpdateType" element={<LiveNews />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
