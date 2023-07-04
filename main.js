let todosList = [];
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

const renderList = () => {
  todoList.innerHTML = "";
  let content = "";
  todosList.forEach((todo) => {
    const completedClass = todo.status ? "completed" : "";
    const li = document.createElement("li");
    li.id = todo.id;
    li.className = completedClass;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.status;
    checkbox.onchange = () => toggleTodoStatus(todo.id);

    const span = document.createElement("span");
    span.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(todo.id);
    deleteButton.disabled = !todo.status;

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
};

const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    date: new Date(),
    text: text,
    status: false,
  };
  todosList.push(newTodo);
  renderList();
};

const deleteTodo = (id) => {
  todosList = todosList.filter((todo) => todo.id !== id);
  renderList();
};

const toggleTodoStatus = (id) => {
  todosList.forEach((todo) => {
    if (todo.id === id) {
      todo.status = !todo.status;
    }
  });
  renderList();
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    addTodo(todoText);
    todoInput.value = "";
  }
});
