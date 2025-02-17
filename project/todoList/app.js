const todoList = document.getElementById("todoList");
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const lis = document.querySelectorAll("li");
const deleteAll = document.getElementById("deleteAll");

addBtn.addEventListener("click", () => {
  if (!input.value) {
    return alert("todo filed is required");
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label class="flex items-center space-x-2 cursor-pointer">
      <input type="checkbox" class="peer hidden chick">
      <div class="w-4 h-4 rounded-md border-2 border-white peer-checked:border-white peer-checked:bg-white flex items-center justify-center transition">
        <svg class="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
    </label>
     <p class="text-white text-md font-[Poppins]">${input.value}</p>
  
<div class="flex gap-4 items-center justify-center">
     <button class="px-4 py-2 text-[12px] bg-white  rounded-xl cursor-pointer shadow-lg deleteBtn">Delete</button>
        <p class=" text-[12px] font-samebold text-red-600 font-[Poppins] doneState">Panding</p>
</div>
`;
  li.classList.add(
    "w-[50%]",
    "p-2",
    "py-4",
    "px-4",
    "bg-[#FFB200]",
    "shadow-lg",
    "rounded-lg",
    "flex",
    "justify-between",
    "items-center",
    "todo"
  );
  todoList.appendChild(li);
  input.value = "";
  const deleteBtn = li.querySelector(".deleteBtn");
  const isDone = li.querySelector(".doneState");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  const chick = li.querySelector(".chick");

  chick.addEventListener("change", (e) => {
    if (e.target.checked) {
      isDone.innerText = "completed";
      isDone.style.color = "green";
    } else {
      isDone.innerText = "Panding";
      isDone.style.color = "red";
    }
  });
});

deleteAll.addEventListener("click", () => {
  const lis = document.querySelectorAll(".todo");
  lis.forEach((li) => {
    li.remove();
  });
});
