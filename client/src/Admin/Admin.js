import axios from "axios";
import React from "react";

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

  return <div>Admin</div>;
}

export default Admin;
