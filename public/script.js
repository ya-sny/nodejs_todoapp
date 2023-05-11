const tasksDom = document.querySelector(".tasks");

const showTasks = async () => {
  try {
    //自作のAPIを叩く
    const {data: tasks} = await axios.get("/api/v1/tasks");
    //タスクを出力
    const allTasks = tasks.map((task) => {
      const {completed, _id, name} = task;
      return `
      <div class="single-task">
        <h5>
          <span><i class="fas fa-thin fa-check"></i></span>${name}
        </h5>
        <div class="task-links">
          <a class="edit-link" href="#">
            <i class="fas fa-thin fa-pen-to-square"></i>
          </a>
          <button type="button" class="delete-btn">
            <i class="fas fa-thin fa-trash"></i>
          </button>
        </div>
      </div>`
    }).join("");
    tasksDom.innerHTML = allTasks;
  }
  catch (err) {
    console.log(err);
  }
}

showTasks();
