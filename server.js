const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes (check route)
app.use(require("./routes/apiRoutes.js"));
app.use(require(".routes/htmlRoutes"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});