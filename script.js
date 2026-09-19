let title = document.getElementById("app-title");
console.log(title)
title.textContent="my todo app";
let htmlTask = document.getElementById("html-task");
let htmlTasktest=document.getElementById("html-task-text")
htmlTask.addEventListener("change",function(){
    console.log("the checkbox changed");
    if (htmlTask.checked) {
        console.log(true)
        htmlTasktest.style.textDecoration="line-through";
    } else {
        console.log(false)
        htmlTasktest.style.textDecoration="none"
    }
})