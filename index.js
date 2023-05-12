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

//middleware to handle req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create a login function
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const logincheck = users.some(
    (user) => user?.email === email && user.password === password
  );
  if (logincheck) {
    res.status(200).send("Login succesful");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

//create a signup function
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.status(200).send(req.body);
});

//create a questions route which will return all questions array
app.get("/questions", (req, res) => {
  res.status(200).send(questions);
});

//get all users data for testing purpose
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
