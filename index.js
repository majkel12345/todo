const input = document.querySelector(".input");
const form = document.querySelector(".form");
const todos = document.querySelector(".todo");

class List {
  addItem(text) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove__btn");
    removeButton.innerText = "X";

    const editButton = document.createElement("button");
    editButton.classList.add("edit__btn");
    editButton.innerText = "edit";

    const newTodo = document.createElement("input");
    newTodo.classList.add("addedTodo");
    newTodo.type = "text";
    newTodo.value = text;
    newTodo.disabled = true;

    todos.appendChild(newDiv);
    newDiv.appendChild(newTodo);
    newDiv.appendChild(editButton);
    newDiv.appendChild(removeButton);

    input.value = "";

    removeButton.addEventListener("click", () => {
      this.removeItem(newDiv);
    });

    editButton.addEventListener("click", () => {
      this.editItem(newTodo);
      if (!newTodo.disabled) {
        editButton.innerText = "change";
        editButton.style.backgroundColor = "green";
      } else {
        editButton.innerText = "edit";
        editButton.style.backgroundColor = "blue";
      }
    });
  }

  editItem(item) {
    if (item.disabled) {
      item.disabled = false;
    } else {
      item.innerText = item.value;
      item.disabled = true;
    }
  }

  removeItem(item) {
    todos.removeChild(item);
  }
}

const list = new List();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value !== "") list.addItem(input.value);
});
