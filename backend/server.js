const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/fdla");

app.use("/api", require("./routes/post.routes"));

app.listen(8000, () => {
  console.log("Server running on port 8000");
});