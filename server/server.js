const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const { connectDB } = require("./Database/connection");
const PORT = process.env.PORT || 8080;
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(bodyParser.json());

connectDB();

app.use("/", require("./Router/router"));
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
