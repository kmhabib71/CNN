const { Type } = require("../Model/model");

exports.getNewsType = async function (req, res) {
  try {
    const allTypes = await Type.find();
    res.json(allTypes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
