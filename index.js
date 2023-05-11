const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req, "req");
  console.log(res, "res");
  res.status(200).send("Express server created!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
