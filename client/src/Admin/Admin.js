import axios from "axios";
import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";
import CreateNews from "./CreateNews";
import NewsList from "./NewsList";
import UpdateNews from "./UpdateNews";
import ManageCategories from "./ManageCategories";
import ManageTag from "./ManageTags";
import ManageRole from "./ManageRole";
import ManageUser from "./ManageUser";

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
            <Route path="/news-management/NewsList" element={<NewsList />} />
            <Route
              path="/news-management/manage-categories"
              element={<ManageCategories />}
            />
            <Route path="/news-management/manage-tag" element={<ManageTag />} />
            <Route
              path="/user-management/manage-role"
              element={<ManageRole />}
            />
            <Route
              path="/user-management/manage-user"
              element={<ManageUser />}
            />
            <Route
              path="/news-management/update/:id"
              element={<UpdateNews />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
