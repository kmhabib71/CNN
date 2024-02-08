const express = require("express");
const route = express.Router();
const controller = require("../Controller/controller");
const newsController = require("../Controller/newsController");

route.post("/api/register", controller.register);
route.post("/api/login", controller.login);
route.get("/api/isAuth", controller.isAuth);

// ..............News Route...........

route.get("/api/types", newsController.getNewsType);
route.get("/api/tags", newsController.getTags);
route.get(
  "/api/getLastFiveLiveUpdateNewsType",
  newsController.getLastFiveLiveUpdateNewsType
);
route.get("/api/getAllNewsCategories", newsController.getAllNewsCategories);
route.get(
  "/api/getsubcategories/:catName",
  newsController.getAllNewsSubCategories
);

// ..............News Route...........

module.exports = route;
