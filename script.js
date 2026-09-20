let title = document.getElementById("app-title");
console.log(title);
title.textContent = "My ToDo App";
title.style.textDecoration="underline"
let taskList = document.getElementById("task-list");
let htmlTask = document.getElementById("html-task");
let htmlTasktest = document.getElementById("html-task-text");
htmlTasktest.style.color="azure"
let taskInput = document.getElementById("task-input");
let addTask = document.getElementById("add-task");
function setupTask(checkbox, text) {
    console.log("Task initialized");
    checkbox.addEventListener("change", function () {
        console.log("the checkbox changed");
        if (checkbox.checked) {
            console.log(true);
            text.style.textDecoration = "line-through";
        } else {
            console.log(false);
            text.style.textDecoration = "none";
        }
    });
}
setupTask(htmlTask, htmlTasktest);
let cssTask = document.getElementById("css-task")
let cssTasktest = document.getElementById("css-task-text")
let jsTask = document.getElementById("js-task")
let jsTasktest = document.getElementById("js-task-text")
cssTasktest.style.color="azure"
jsTasktest.style.color="azure"
setupTask(cssTask, cssTasktest)
setupTask(jsTask, jsTasktest)



addTask.addEventListener("click", function () {
    if (taskInput.value.trim().length === 0) {
        console.log("pls enter a value")
        return;
    }
    console.log(taskInput.value);
    let newTask = document.createElement("li");
    let newLabel = document.createElement("label");
    let newInput = document.createElement("input");
    newInput.type = "checkbox";
    let trimText=taskInput.value.trim()
    let newSpan = document.createElement("span");
    newSpan.textContent = trimText;
    newSpan.style.color="azure"
    
    newLabel.appendChild(newInput);
    newLabel.appendChild(newSpan);

    newTask.appendChild(newLabel);

    taskList.appendChild(newTask);

    setupTask(newInput, newSpan);
    taskInput.value="";
});