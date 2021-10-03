const express = require("express");
const app = express();
require("dotenv").config();

console.log(process.env.AWS_SECRET_KEY);

app.listen("5000", () => {
  console.log("Server has started on mongodb.");
});
