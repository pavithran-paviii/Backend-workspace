const mongoose = require("mongoose");
const User = require("./Schema/Users");

async function createUsers() {
  const user = await User.create({ name: "pavithran", age: 24 });
  user.name = "mukesh";
  user.save();
  console.log(user, "user created");
}

createUsers();

mongoose
  .connect("mongodb://localhost:27017/test-db1-pavithran")
  .then((response) => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error?.message);
  });
