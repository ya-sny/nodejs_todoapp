const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/v1/tasks", (req, res) => {
  res.send("get all tasks");
});

app.post("/api/v1/tasks", (req, res) => {
  res.send("create task");
})

app.get("/api/v1/tasks/:id", (req, res) => {
  res.send("get single task");
})

app.patch("/api/v1/tasks/:id", (req, res) => {
  res.send("update single task");
})

app.delete("/api/v1/tasks/:id", (req, res) => {
  res.send("delete single task");
})

app.listen(PORT, console.log("server start"));
