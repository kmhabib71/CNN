const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use("/", require("./Router/router"));
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
