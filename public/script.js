const tasksDOM = document.querySelector(".tasks");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");

const showTasks = async () => {
  try {
    //自作のAPIを叩く
    const {data: tasks} = await axios.get("/api/v1/tasks");

    //タスクが一つもない
    if (tasks.length < 1) {
      tasksDOM.innerHTML = `<h5 class"empty-list">タスクがありません</h5>`
      return;
    }

    //タスクを出力
    const allTasks = tasks.map((task) => {
      const {completed, _id, name} = task;
      return `
      <div class="single-task ${completed && "task-completed"}">
        <h5>
          <span><i class="${completed && "fas fa-thin fa-check"}"></i></span>${name}
        </h5>
        <div class="task-links">
          <a class="edit-link" href="edit.html?id=${_id}">
            <i class="fas fa-thin fa-pen-to-square"></i>
          </a>
          <button type="button" class="delete-btn" data-id="${_id}">
            <i class="fas fa-thin fa-trash"></i>
          </button>
        </div>
      </div>`
    }).join("");
    tasksDOM.innerHTML = allTasks;
  }
  catch (err) {
    console.log(err);
  }
};

showTasks();

formDOM.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = taskInputDOM.value;
  try {
    const {data: tasks} = await axios.get("/api/v1/tasks");
    if (tasks.length > 10) {
      formAlertDOM.style.display = "block";
      formAlertDOM.textContent = "タスク作成は10個までです。"
    }
    else {
      await axios.post("/api/v1/tasks", {name: name});
      showTasks();
      taskInputDOM.value = "";
      formAlertDOM.style.display = "block";
      formAlertDOM.textContent = "タスクを追加しました。";
      formAlertDOM.classList.add("text-success");
    }
  }
  catch (err) {
    console.log(err);
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML = "無効です。もう一度やり直してください。";
  }
  setTimeout(() => {
    formAlertDOM.style.display = "none";
    formAlertDOM.classList.remove("text-success");
  }, 3000);
});

tasksDOM.addEventListener("click", async (event) => {
  const element = event.target;
  if (element.parentElement.classList.contains("delete-btn")) {
    const id = element.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    }
    catch (err) {
      console.log(err);
    }
  }
});
