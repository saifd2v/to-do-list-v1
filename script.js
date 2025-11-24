let addTaskButton = document.querySelector(".add-task");
let taskInput = document.querySelector(".task-input");
let displayTask = document.querySelector(".display-tasks");

function addTask() {
    let task = taskInput.value.trim();
    if (task === "") return;

    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = `
                <div class="task-info">${task}</div>
                <button class="del-button"">
                    <i class="fa-solid fa-trash-can"></i>
                </button>`

    newTask.querySelector(".del-button").addEventListener("click", () => removeTask(newTask));
    displayTask.appendChild(newTask)
    taskInput.value = '';
}

function removeTask(task) {
    task.classList.toggle("remove");

    setTimeout(() => {
        task.remove();
    }, 300);
}

addTaskButton.onclick = () => addTask();
taskInput.addEventListener("keypress", (k) => {
    if (k.key === "Enter") addTask();
});