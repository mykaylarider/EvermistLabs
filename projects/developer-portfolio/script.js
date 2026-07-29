// =======================================
// Evermist Labs
// Main JavaScript
// =======================================


// =======================================
// Typing Animation
// =======================================

const words = [
    "MyKayla Rider.",
    "a Software Developer.",
    "an AI Builder.",
    "an Entrepreneur.",
    "Always Learning."
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeWord() {

    if (!typing) return;

    if (charIndex < words[wordIndex].length) {

        typing.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWord, 100);

    } else {

        setTimeout(deleteWord, 1800);

    }

}

function deleteWord() {

    if (charIndex > 0) {

        typing.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteWord, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeWord, 400);

    }

}

typeWord();


// =======================================
// Dark Mode
// =======================================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "☀️ Light Mode";

        } else {

            themeButton.textContent = "🌙 Dark Mode";

        }

    });

}


// =======================================
// Scroll Reveal
// =======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =======================================
// Study Tracker
// =======================================

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

if (taskInput && addTask && taskList) {

    // ---------------------------
    // CLEAR OLD TASKS ONE TIME
    // ---------------------------

    localStorage.removeItem("studyTasks");

    taskList.innerHTML = "";

    function saveTasks() {

        localStorage.setItem("studyTasks", taskList.innerHTML);

    }

    function attachTaskEvents(li) {

        const taskText = li.querySelector("span");
        const deleteButton = li.querySelector(".delete-task");

        taskText.addEventListener("click", () => {

            taskText.classList.toggle("completed");

            saveTasks();

        });

        deleteButton.addEventListener("click", () => {

            li.remove();

            saveTasks();

        });

    }

    function createTask(text) {

        if (text.trim() === "") return;

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${text}</span>
            <button class="delete-task">❌</button>
        `;

        taskList.appendChild(li);

        attachTaskEvents(li);

        saveTasks();

    }

    addTask.addEventListener("click", () => {

        createTask(taskInput.value);

        taskInput.value = "";

    });

    taskInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            createTask(taskInput.value);

            taskInput.value = "";

        }

    });

}

console.log("🚀 Evermist Labs Loaded");