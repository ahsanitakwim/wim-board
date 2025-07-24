// === To-Do List ===
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text !== "") {
    addTodo(text);
    todoInput.value = "";
  }
});

function addTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const actions = document.createElement("div");
  actions.className = "actions";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔️";
  doneBtn.title = "Selesai";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.title = "Hapus";
  delBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  actions.appendChild(doneBtn);
  actions.appendChild(delBtn);
  li.appendChild(actions);
  todoList.appendChild(li);
}

// === Notes ===
const notesArea = document.getElementById("note-area");

notesArea.addEventListener("input", () => {
  localStorage.setItem("notes", notesArea.value);
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("notes");
  if (saved) notesArea.value = saved;

  // Dark mode setting on load
  if (localStorage.getItem("darkMode") === "enabled") {
    setDarkMode(true);
  }
});

// === Dark Mode ===
const toggleBtn = document.getElementById("toggle-dark");
const body = document.body;

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled");
  }
}

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");
  setDarkMode(!isDark);
});
