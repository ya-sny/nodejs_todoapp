const tasksDom = document.querySelector(".tasks");
const formDom = document.querySelector(".task-form");
const taskInputDom = document.querySelector(".task-input");
const formAlertDom = document.querySelector(".form-alert");

const showTasks = async () => {
  try {
    //自作のAPIを叩く
    const {data: tasks} = await axios.get("/api/v1/tasks");

    //タスクが一つもない
    if (tasks.length < 1) {
      tasksDom.innerHTML = `<h5 class"empty-list">タスクがありません</h5>`
      return;
    }

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
          <button type="button" class="delete-btn" data-id="${_id}">
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
};

showTasks();

formDom.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = taskInputDom.value;
  try {
    await axios.post("/api/v1/tasks", {name: name});
    showTasks();
    taskInputDom.value = "";
    formAlertDom.style.display = "block";
    formAlertDom.textContent = "タスクを追加しました。";
    formAlertDom.classList.add("text-success");
  }
  catch (err) {
    console.log(err);
    formAlertDom.style.display = "block";
    formAlertDom.innerHTML = "無効です。もう一度やり直してください。";
  }
  setTimeout(() => {
    formAlertDom.style.display = "none";
    formAlertDom.classList.remove("text-success");
  }, 3000);
});

tasksDom.addEventListener("click", async (event) => {
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
