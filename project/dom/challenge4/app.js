let taskes = 0;
let completedTask = 0;
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const empty_list = document.querySelector(".empty-list");

addButton.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = `
        <input type="checkbox" class="complete-checkbox">
        <p>${taskInput.value}</p>
        <button class="delete-button">Delete</button>`;

  li.classList.add("task-item");

  taskList.appendChild(li);

  taskes++;

  if (taskes) {
    empty_list.hidden = true;
  } else {
    empty_list.hidden = false;
  }

  taskInput.value = "";

  totalTasks.innerText = `Total tasks: ${taskes}`;

  li.querySelector(".delete-button").addEventListener("click", () => {
    li.remove();
    taskes--;
    totalTasks.innerText = `Total tasks: ${taskes}`;
    if (taskes) {
      empty_list.hidden = true;
    } else {
      empty_list.hidden = false;
    }
  });

  li.querySelector(".complete-checkbox").addEventListener("input", (e) => {
    if (e.target.checked) {
      completedTask++;
      completedTasks.innerText = `Completed: ${completedTask}`;
      li.style.backgroundColor = "green"
    } else {
      completedTask--;
      completedTasks.innerText = `Completed: ${completedTask}`;
            li.style.backgroundColor = "white"
    }
  });
});
