const express = require("express");
const { request } = require("http");

const app = express();
const name = "Meshari Alhouli";

app.use("/meshari", (request, response) => {
  response.json({ message: `my name is ${name}` });
});

app.listen(8000, () => {
  console.log("the application is running on http://localhost:8000");
});
