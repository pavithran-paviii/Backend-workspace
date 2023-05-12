const express = require("express");
const app = express();

const port = 3000;

let users = [];
let questions = [
  {
    question: "This is a sample question",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "answer 2",
  },
];

//create a login function

//create a signup function
app.post("/signup", (req, res) => {
  console.log(req, "req");
  console.log(res, "res");
});

//create a questions route which will return all questions array
app.get("/questions", (req, res) => {
  res.status(200).send(questions);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
