const { Type, Category, Tag, News, User, Role } = require("../Model/model");
const mongodb = require("mongodb");
const uuid = require("uuid");

const client = new mongodb.MongoClient(
  "mongodb+srv://mohammedsaimuae:Flower71@cluster0.rbmepuu.mongodb.net/CNN?retryWrites=true&w=majority"
);

exports.assignRole = async function (req, res) {
  const { userId } = req.params;
  const { role } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's role
    user.role = role;

    // Save the updated user
    await user.save();

    res.status(200).json({ message: "Role assigned successfully" });
  } catch (error) {
    console.error("Error assigning role:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getRoles = async function (req, res) {
  // console.log("req.session.page_views is :", req.session.page_views);
  try {
    const role = await Role.find();
    res.json(role);
  } catch (error) {
    console.error("Error fetching role:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.users = async function (req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addCategory = async (req, res) => {
  const { name, subcategories, parentCategory } = req.body;
  console.log("subCat :", subcategories);
  console.log("parentCategory :", parentCategory);
  try {
    if (!subcategories) {
      const newCategory = new Category({ title: name });
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } else {
      // Find the parent category by its ID
      const category = await Category.findById(parentCategory);
      console.log("category get :", category);
      // Add the new subcategory to the subcategories array
      category.items.push({ name: subcategories });

      // Save the updated category
      const savedCategory = await category.save();

      res.status(201).json(savedCategory);
    }
  } catch (error) {
    console.error("Error adding category:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  console.log("categoryId is :", categoryId);
  try {
    await Category.findByIdAndDelete(categoryId);
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteSubcategory = async (req, res) => {
  const { categoryId, subcategoryId } = req.params;

  try {
    const category = await Category.findById(categoryId);
    category.items.pull(subcategoryId);
    await category.save();
    res.json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.AllCategoriesWithSubCategory = async function (req, res) {
  try {
    const categories = await Category.find().populate("items", "name");
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getting categories:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.filesForNewsByFilename = async function (req, res) {
  console.log("From filesForNewsByFilename");

  client.connect().then(() => {
    // Get the database and the GridFS bucket
    const db = client.db("CNN");
    const bucket = new mongodb.GridFSBucket(db);

    // Get the filename from the request params
    const filename = req.params.filename;
    console.log("filename is :", filename);
    // Find the file by filename
    async function handleFile() {
      const file = await bucket.find({ filename }).toArray();
      console.log("file is: ", file);

      if (file.length > 0) {
        const dataBuffer = [];
        const downloadStream = bucket.openDownloadStreamByName(filename);

        downloadStream.on("data", (chunk) => {
          dataBuffer.push(chunk);
        });

        downloadStream.on("end", () => {
          const data = Buffer.concat(dataBuffer);
          // Now 'data' contains the binary data of the file
          console.log("data is :", data);
          // Send the file data in the response
          res.send(data);
        });
      } else {
        console.log("File not found");
        // Handle accordingly, send an error response, etc.
      }
    }

    handleFile();
  });
};
exports.updateNews = async function (req, res) {
  console.log("filename is: ", req.body.filename);
  // Get the file object from req.file
  const newsIdToUpdate = req.body.id; // Replace with the actual ID of the news article you want to update
  if (req.file) {
    // Get the database
    const filename = req.body.filename;
    console.log("Mongodb connected");
    const db = client.db("cnn");

    const bucket = new mongodb.GridFSBucket(db);

    const file = req.file;
    const fileBuffer = file.buffer;

    // Find the existing file in GridFS by filename
    // const existingFile = await db.collection("fs.files").findOne({ filename });

    // if (!existingFile) {
    //   return res.status(404).json({ message: "File not found" });
    // }

    // const fileId = existingFile._id;
    const uniqueIdentifier = uuid.v4();

    // Create a new filename by combining the UUID and the original filename
    const newFilename = `${uniqueIdentifier}_${file.originalname}`;
    // Update the existing file in GridFS with the specified fileId
    // Instead of specifying fileId, let MongoDB generate a new _id
    const uploadStream = bucket.openUploadStream(newFilename);
    uploadStream.end(fileBuffer);

    uploadStream.on("error", (error) => {
      console.error(error);
      return res.status(500).json({ message: "Error updating image" });
    });

    uploadStream.on("finish", () => {
      News.findOneAndUpdate(
        { _id: newsIdToUpdate },
        {
          $set: {
            title: req.body.title,
            file: newFilename,
            newsCategory: req.body.newsCategory,
            subCategory: req.body.subCategory,
            type: req.body.type,
            editorText: req.body.editorText,
            authorName: req.body.authorName,
          },
        },
        { new: true } // Set to true if you want to return the modified document
      )
        .then((updatedNews) => {
          if (!updatedNews) {
            return res.status(404).send({
              message: `News article with id ${newsIdToUpdate} not found.`,
            });
          }
          res.send("News Updated Successfully.");
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while updating the news article.",
          });
        });

      return res.status(200).json({ message: "Image updated successfully" });
    });
  } else {
    News.findOneAndUpdate(
      { _id: newsIdToUpdate },
      {
        $set: {
          title: req.body.title,
          newsCategory: req.body.newsCategory,
          editorText: req.body.editorText,
          authorName: req.body.authorName,
        },
      },
      { new: true } // Set to true if you want to return the modified document
    )
      .then((updatedNews) => {
        if (!updatedNews) {
          return res.status(404).send({
            message: `News article with id ${newsIdToUpdate} not found.`,
          });
        }
        res.send("News Updated Successfully.");
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while updating the news article.",
        });
      });
  }
};

exports.getNewsById = async function (req, res) {
  const articleId = req.params.id;
  console.log("articleId is :", articleId);
  try {
    // Find the news document by id
    const news = await News.findById(articleId);
    // Return the news data
    res.send(news);
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};

exports.deleteNews = async function (req, res) {
  try {
    const newsId = req.params.id;
    // Implement the logic to delete the news item from the database
    await News.findByIdAndDelete(newsId);
    res.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
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
exports.addTag = async (req, res) => {
  const { name } = req.body;
  console.log("tag :", name);
  try {
    if (name) {
      const newTag = new Tag({ name });
      const savedTag = await newTag.save();
      res.status(201).json(savedTag);
    } else {
      res.status(500).json("Tag not found");
    }
  } catch (error) {
    console.error("Error adding tag:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.deleteTag = async (req, res) => {
  const { tagId } = req.params;
  console.log("tagId is :", tagId);
  try {
    await Tag.findByIdAndDelete(tagId);
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
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
