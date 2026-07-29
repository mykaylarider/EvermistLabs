const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", addNewTask);

taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addNewTask();
    }

});

function addNewTask() {

    const task = taskInput.value.trim();

    if (task === "") return;

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = task;

    // ⭐ NEW: Click task to complete it
    text.style.cursor = "pointer";

    text.addEventListener("click", () => {

        text.classList.toggle("completed");

    });

    const button = document.createElement("button");
    button.textContent = "🗑️";

    button.style.background = "#ff5c5c";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "10px 14px";
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {

        li.remove();

    });

    li.appendChild(text);
    li.appendChild(button);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

}