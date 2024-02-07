import axios from "axios";
import React from "react";
import Sidebar from "./Sidebar";

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
    <div className="flex flex-col min-h-screen max-h-full dashboard w-full">
      <div className="flex">
        <Sidebar />
        <div></div>
      </div>
    </div>
  );
}

export default Admin;
