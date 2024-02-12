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
route.get("/newsList", newsController.newsList);

route.delete("/api/news/:id", newsController.deleteNews);
route.get("/getNewsByID/:id", newsController.getNewsById);
route.post("/api/updatenews", upload.single("file"), newsController.updateNews);
route.get(
  "/filesForNewsByFilename/:filename",
  newsController.filesForNewsByFilename
);
route.get(
  "/api/AllCategoriesWithSubCategory",
  newsController.AllCategoriesWithSubCategory
);
route.delete(
  "/api/deleteCategories/:categoryId",
  newsController.deleteCategory
);
route.delete(
  "/api/categories/:categoryId/subcategories/:subcategoryId",
  newsController.deleteSubcategory
);
route.post("/api/addCategories", newsController.addCategory);
route.post("/api/addTag", newsController.addTag);

route.delete("/api/deleteTag/:tagId", newsController.deleteTag);
route.get("/api/users", newsController.users);
route.get("/api/getRoles", newsController.getRoles);
route.post("/api/assignRole/:userId", newsController.assignRole);
route.delete(
  "/api/deleteUsersManually/:id",
  newsController.deleteUsersManually
);
route.get("/api/user/:userid", newsController.getUserbyID);
route.get("/api/isAuth", controller.isAuth);

route.post("/api/updateUserData/:userid", newsController.updateUserData);
route.get("/api/support", newsController.getSupportForm);
route.post("/api/support", newsController.supportForm);
// ..............News Route...........

module.exports = route;
