const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const port = 3000;

let users = [];
let questions = [
  {
    question: "This is a sample question",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: "answer 2",
  },
];

//functions
function findUserByUsername(email) {
  let user = users.find((eachuser) => eachuser?.email == email);
  return user;
}

function createUser(email, password) {
  const user = new User(email, password);
  users.push(user);
  return user;
}

//class to create user object
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

//middleware to handle req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create a login function
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = findUserByUsername(email);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user?.password);
    if (isPasswordValid) {
      res.status(200).send("Login successful!!");
    } else {
      res.status(401).send("Invalid username/password");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

//create a signup function
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (findUserByUsername(email)) {
    return res.status(409).send("User already exist!!");
  }

  try {
    //password hashing
    //higher the salt more secure hash will be
    const salt = 8;
    const passwordHash = await bcrypt.hash(password, salt);
    const user = createUser(email, passwordHash);

    res.status(200).send("User created succesful");
  } catch (error) {
    res.status(500).send("Internal server error!!");
  }

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
