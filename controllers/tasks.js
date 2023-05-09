const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const getAllTasks = await Task.find({});
    res.status(200).json(getAllTasks);
  }
  catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  }
  catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

const getSingleTask = (req, res) => {
  res.send("get single task");
}

const updateTask = (req, res) => {
  res.send("update single task");
}

const deleteTask = (req, res) => {
  res.send("delete single task");
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}
