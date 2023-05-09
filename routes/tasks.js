const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all tasks");
});

router.post("/", (req, res) => {
  res.send("create task");
})

router.get("/:id", (req, res) => {
  res.send("get single task");
})

router.patch("/:id", (req, res) => {
  res.send("update single task");
})

router.delete("/:id", (req, res) => {
  res.send("delete single task");
})

module.exports = router;
