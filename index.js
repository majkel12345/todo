const input = document.querySelector(".input");
const form = document.querySelector(".form");
const todos = document.querySelector(".todo");

class List {
  addItem(text) {
    // const text = input.value;
    const newTodo = document.createElement("li");
    newTodo.classList.add("addedTodo");
    newTodo.innerText = text;

    todos.appendChild(newTodo);

    input.value = "";
    newTodo.addEventListener("click", () => {
      newTodo.remove();
    });
  }

  removeItem() {
    remove();
  }
}

const list = new List();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.addItem(input.value);
});
