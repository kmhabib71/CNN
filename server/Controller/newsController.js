const { Type, Category } = require("../Model/model");

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
