const express = require("express");

const app = express();

const port = 3000;

app.get("/", function (request, response) {
  response.end("Hello World");
});

app.listen(port, function () {
  console.log("Server running on port", +port);
});
