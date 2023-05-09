const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks")
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

app.use("/api/v1/tasks", taskRoute);
app.use(express.static("./public"));

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, console.log("server start"));
  }
  catch (err) {
    console.log(err);
  }
}

start();
