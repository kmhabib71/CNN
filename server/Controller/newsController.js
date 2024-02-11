const { Type, Category, Tag, News } = require("../Model/model");
const mongodb = require("mongodb");
const uuid = require("uuid");

const client = new mongodb.MongoClient(
  "mongodb+srv://mohammedsaimuae:Flower71@cluster0.rbmepuu.mongodb.net/CNN?retryWrites=true&w=majority"
);

exports.newsList = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;

    const options = {
      page: page,
      limit: pageSize,
      sort: { createdAt: -1 }, // Adjust the sorting based on your requirements
    };

    const paginatedNews = await News.paginate({}, options);
    res.json({
      news: paginatedNews.docs,
      totalPages: paginatedNews.totalPages,
    });
  } catch (error) {
    console.error("Error fetching news data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getLastFiveLiveUpdateNewsType = async function (req, res) {
  try {
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. " });
  }
};

exports.createNews = async function (req, res) {
  console.log("NewsData is :", req.body);

  try {
    if (req.file) {
      client.connect().then(() => {
        const db = client.db("CNN");
        const bucket = new mongodb.GridFSBucket(db);

        const file = req.file;
        console.log("File is :", file);
        const fileBuffer = file.buffer;
        const uniqueIdentifier = uuid.v4();

        const newFileName = `${uniqueIdentifier}_${file.originalname}`;

        bucket
          .openUploadStream(newFileName)
          .end(fileBuffer)
          .on("error", function (error) {
            console.log("Error uploading file", error);
            res.status(500).send({
              message: "Error uplading file",
              error: error.message,
            });
          })
          .on("finish", function (file) {
            const news = new News({
              title: req.body.title,
              file: newFileName,
              newsCategory: req.body.newsCategory,
              subCategory: req.body.subCategory,
              type: req.body.type,
              tag: req.body.tag,
              editorText: req.body.editorText,
              authorName: req.body.authorName,
              isLiveUpdate: req.body.isLiveUpdate,
              liveUpdateType: req.body.liveUpdateType,
              liveUpdateHeadline: req.body.liveUpdateHeadlinie,
            });
            news
              .save(news)
              .then((data) => {
                res.status(200).send("News Submitted Successfull");
              })
              .catch((error) => {
                res.status(500).send({
                  message: "Error saving news",
                  error: error.message,
                });
              });
            console.log("News Submitted Successfull");
          });
      });
    } else {
      const news = new News({
        title: req.body.title,
        newsCategory: req.body.newsCategory,
        subCategory: req.body.subCategory,
        type: req.body.type,
        tag: req.body.tag,
        editorText: req.body.editorText,
        authorName: req.body.authorName,
        isLiveUpdate: req.body.isLiveUpdate,
        liveUpdateType: req.body.liveUpdateType,
        liveUpdateHeadline: req.body.liveUpdateHeadlinie,
      });
      news
        .save(news)
        .then((data) => {
          res.status(200).send("News Submitted Successfull");
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error saving news",
            error: error.message,
          });
        });
    }
  } catch (error) {
    console.log("Internal server error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.getTags = async function (req, res) {
  try {
    const allTags = await Tag.find();
    res.json(allTags);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
exports.getNewsType = async function (req, res) {
  try {
    const allTypes = await Type.find();
    res.json(allTypes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. " });
  }
};

exports.getAllNewsCategories = async function (req, res) {
  try {
    const categories = await Category.find({}, "title");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
exports.getAllNewsSubCategories = async function (req, res) {
  const selectedCategory = req.params.catName;
  try {
    const category = await Category.findOne({ title: selectedCategory });
    if (!category) {
      return res.status(404).json({ error: "Category Not Found." });
    }

    res.json(category.items);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
