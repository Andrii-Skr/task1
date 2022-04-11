import { setTaskList } from "/src/app.js";
import { drawTable } from "./drawTable.js";

let eIndex = undefined;
const addEditHandler = (taskList) => {
  const formEdit = document.querySelector(".formEdit");
  const editBtn = document.querySelectorAll(".edit");
  const createNode = document.querySelector(".createNoteLeft .createNote");
  editBtn.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      formEdit.style.display = "flex";
      createNode.style.display = "none";
      el.style.display = "none";
      eIndex = e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
      document.querySelector(".nameEdit").value = taskList[eIndex].name;
      document.querySelector(".categoryEdit").value = taskList[eIndex].category;
      document.querySelector(".contentEdit").value = taskList[eIndex].content;
    });
  });
};

const addSaveHandler = (taskList) => {
  const saveBtn = document.querySelector(".save");
  const formEdit = document.querySelector(".formEdit");
  const createNode = document.querySelector(".createNoteLeft .createNote");
  saveBtn.addEventListener("click", () => {
    formEdit.style.display = "none";
    createNode.style.display = "block";

    taskList[eIndex].name = document.querySelector(".nameEdit").value;
    taskList[eIndex].category = document.querySelector(".categoryEdit").value;
    taskList[eIndex].content = document.querySelector(".contentEdit").value;
    taskList[eIndex].created = new Date().toLocaleDateString();

    setTaskList(taskList);
    drawTable(taskList);
  });
};

export { addEditHandler, addSaveHandler };
