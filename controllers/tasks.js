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

const getSingleTask = async (req, res) => {
  try {
    const getSingleTask = await Task.findOne({_id: req.params.id});
    if (!getSingleTask)
      return res.status(404).json(`_id:${req.params.id} is not found`);
    res.status(200).json(getSingleTask);
  }
  catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      {
        new: true
      }
    );
    if (!updateTask)
      return res.status(404).json(`_id:${req.params.id} is not found`);
    res.status(200).json(updateTask);
  }
  catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findOneAndDelete({_id: req.params.id});
    if (!deleteTask)
      return res.status(404).json(`_id:${req.params.id} is not found`);
    res.status(200).json(deleteTask);
  }
  catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}
