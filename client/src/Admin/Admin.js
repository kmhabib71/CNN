import axios from "axios";
import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";
import CreateNews from "./CreateNews";

function Admin() {
  axios
    .get("http://localhost:8080/api/isAuth", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log("response is: ", response.data.userid);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div
      className="flex flex-col min-h-screen max-h-full dashboard w-full"
      style={{ backgroundColor: "#f1f5f9" }}>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news-management/create" element={<CreateNews />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
