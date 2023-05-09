const express = require("express");
const app = express();
const taskRoute =require("./routes/tasks")
const PORT = 3000;

app.use("/api/v1/tasks", taskRoute);

app.listen(PORT, console.log("server start"));
