window.onload = setTime;
let todoList = [];

function setName(item) {
  document.getElementById("name").innerHTML = item;
}

function addTodo() {
  todoList.push(document.getElementById("todoInput").value);
  console.log("todoList", todoList);
  showTodoList();
  document.getElementById("todoInput").value = "";
}

function showTodoList() {
  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    html += `<div class="totoItem">${todoList[i]}</div>`;
  }
  document.getElementById("todoListContainer").innerHTML = html;
  console.log("todoList onLoad", todoList);
}
let i = 0;
function setTime() {
  i++;
  let date = new Date();
  document.getElementById("currentTime").innerHTML = date;
  i % 2 === 0
    ? (document.body.style.backgroundColor = "green")
    : (document.body.style.backgroundColor = "orange");
  setTimeout(() => setTime(), 1000);
}
