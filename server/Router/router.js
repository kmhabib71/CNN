const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer();
const controller = require("../Controller/controller");
const newsController = require("../Controller/newsController");

route.post("/api/register", controller.register);
route.post("/api/login", controller.login);
route.get("/api/isAuth", controller.isAuth);

// ..............News Route...........
const { connectDB } = require("../Database/connection");
route.get("/api/types", newsController.getNewsType);
route.post("/api/createnews", upload.single("file"), function (req, res, next) {
  newsController.createNews(req, res, next, connectDB.client);
});
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
