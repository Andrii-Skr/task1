import showArchive from "./components/showArchive.js";
import updateStat from "./components/updateStat.js";
import drawStat from "./components/drawStat.js";
import addDeleteHandler from "./components/addDeleteHandler.js";
import deleteAll from "./components/deleteAll.js";
import addArchiveHandler from "./components/addArchiveHandler.js";

window.addEventListener("error", function (event) {
  console.error("global", event.error);
});

let eIndex = undefined;
let archiveState = !true;
let taskList = [
  {
    name: "shop list",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "bred,shugar",
    dates: "",
    archive: false,
  },
  {
    name: "Books",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "buy 'how to learn js for a 5 min'",
    dates: "",
    archive: false,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Idea",
    content: "some text",
    dates: "",
    archive: true,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Random Thought",
    content: "some text 23.01.22",
    dates: "",
    archive: false,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "some text",
    dates: "",
    archive: false,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "some text",
    dates: "",
    archive: false,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Random Thought",
    content: "some text",
    dates: "",
    archive: false,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "some text 10.01.2020",
    dates: "",
    archive: false,
  },
];
const icons = {
  Task: '<img src="/src/img/Task.png" alt="icon" />',
  "Random Thought": '<img src="/src/img/Random.png" alt="icon" />',
  Idea: '<img src="/src/img/Idea.png" alt="icon" />',
};

const addEditHandler = () => {
  const formEdit = document.querySelector(".formEdit");

  const editBtn = document.querySelectorAll(".edit");
  const createNode = document.querySelector(".createNoteLeft .createNote");
  editBtn.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      formEdit.style.display = "flex";
      createNode.style.display = "none";
      const a = formEdit.b();
      el.style.display = "none";
      eIndex = e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
      document.querySelector(".nameEdit").value = taskList[eIndex].name;
      document.querySelector(".categoryEdit").value = taskList[eIndex].category;
      document.querySelector(".contentEdit").value = taskList[eIndex].content;
    });
  });
};

const addSaveHandler = () => {
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

    drawTable();
  });
};

const setArchiveState = (state) => {
  archiveState = state;
};
const setTaskList = (list) => {
  taskList = list;
};

const drawTable = () => {
  deleteAll();

  const afterRow = document.querySelector(".todolist");
  taskList.forEach((el, i) => {
    if (el.archive !== archiveState) return;

    const addRow = document.createElement("div");
    addRow.setAttribute("data-index", i);
    addRow.className = "row";

    el.content
      .split(" ")
      .forEach((e) =>
        e.match(/^\d{2}[.-/]\d{2}[.-/](\d{2}|\d{4})$/) !== null ? (el.dates = e) : (el.dates = "")
      );

    const row = `<div class="cell">${icons[el.category]}</div>
          <div class="cell">${el.name}</div> 
          <div class="cell">${el.created}</div> 
          <div class="cell">${el.category}</div> 
          <div class="cell">${el.content}</div> 
          <div class="cell">${el.dates}</div> 
          <div class="cell btnRow"> 
            <div class="myBtn edit"><img src="/src/img/edit.png" alt="edit" title='edit'/></div> 
            <div class="myBtn archive"><img src="/src/img/archiveBlack.png" alt="archive" title='add to archive/remove from archive'/></div> 
            <div class="myBtn delete"><img src="/src/img/binBlack.png" alt="delete" title='delete'/></div>
          </div>`;

    addRow.innerHTML = row;
    afterRow.append(addRow);
  });

  addArchiveHandler(taskList);
  addEditHandler();
  addDeleteHandler(taskList);
};

const init = (eIndex) => {
  const form = document.querySelector(".form");
  const createNode = document.querySelector(".createNoteLeft .createNote");

  document.querySelector(".deleteAll").addEventListener("click", () => {
    taskList = [];

    updateStat(taskList);
    drawTable();
  });

  createNode.addEventListener("click", () => {
    form.style.display = "flex";
    createNode.style.display = "none";
    document.querySelector(".name").value = "";
    document.querySelector(".content").value = "";
  });
  const formCreateNode = document.querySelector(".form .createNote");

  formCreateNode.addEventListener("click", () => {
    form.style.display = "none";
    createNode.style.display = "block";

    const nameNode = form.querySelector(".name").value;
    if (
      document.querySelector(".name").value !== "" ||
      document.querySelector(".content").value !== ""
    ) {
      taskList.push({
        name: document.querySelector(".name").value,
        category: document.querySelector(".category").value,
        content: document.querySelector(".content").value,
        created: new Date().toLocaleDateString(),
        dates: "",
        archive: false,
      });

      drawTable();
      updateStat(taskList);
    }
  });

  drawStat(taskList);
  drawTable();
  showArchive(archiveState);
  addSaveHandler();
};
try {
  init();
} catch (error) {
  console.log("Error", error);
}

export { drawTable, setArchiveState, setTaskList };
