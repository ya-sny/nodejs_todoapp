const getAllTasks = (req, res) => {
  res.send("get all tasks");
}

const createTask = (req, res) => {
  res.send("create task");
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
