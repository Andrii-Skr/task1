//import drawStat from "./components/drawStat.js";
let eIndex = undefined;
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
];
const icons = {
  Task: '<img src="/src/img/Task.png" alt="icon" />',
  "Random Thought": '<img src="/src/img/Random.png" alt="icon" />',
  Idea: '<img src="/src/img/Idea.png" alt="icon" />',
};

const archiveAll = () => {
  document.querySelector(".btnRow .archiveAll").addEventListener("click", () => {
    taskList.forEach((task, i) => {
      taskList[i].archive = true;
    });
    drawTable();
    updateStat();
  });
};

const updateStat = () => {
  const statRow = document.querySelectorAll(".stat");

  statRow.forEach((el, i) => {
    statRow[i].remove();
  });
  drawStat();
};

const addArchiveHandler = () => {
  const btnArchive = document.querySelectorAll(".btnRow .archive");

  btnArchive.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      const index = e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
      taskList[index].archive = true;

      drawTable();
      updateStat();
    });
  });
};

const addEditHandler = () => {
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
      console.log("edit", eIndex);
    });
  });
};

const saveNote = () => {
  const saveBtn = document.querySelector(".save");
  const formEdit = document.querySelector(".formEdit");
  const createNode = document.querySelector(".createNoteLeft .createNote");
  saveBtn.addEventListener("click", () => {
    console.log("save", eIndex);
    formEdit.style.display = "none";
    createNode.style.display = "block";

    taskList[eIndex].name = document.querySelector(".nameEdit").value;
    taskList[eIndex].category = document.querySelector(".categoryEdit").value;
    taskList[eIndex].content = document.querySelector(".contentEdit").value;
    taskList[eIndex].created = new Date().toLocaleDateString();

    drawTable();
  });
};

const drawStat = () => {
  const afterRow = document.querySelector(".categorylist");
  const statList = {};
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].archive === true) {
      if (taskList[i].category in statList) {
        statList[taskList[i].category].archive += 1;
      } else {
        statList[taskList[i].category] = {
          category: taskList[i].category,
          archive: 1,
          active: 0,
        };
      }
    } else {
      if (taskList[i].category in statList) {
        statList[taskList[i].category].active += 1;
      } else {
        statList[taskList[i].category] = {
          category: taskList[i].category,
          active: 1,
          archive: 0,
        };
      }
    }
  }
  Object.values(statList).forEach((el) => {
    const addRowStat = document.createElement("div");
    addRowStat.className = "row stat";

    const rowStat = `<div class="cell">${icons[el.category]}</div> 
    <div class="cell">${el.category}</div>
    <div class="cell">${el.active}</div>
    <div class="cell">${el.archive}</div>`;

    addRowStat.innerHTML = rowStat;
    afterRow.append(addRowStat);
  });
};

const addDeleteHandler = () => {
  const btnRow = document.querySelectorAll(".btnRow .delete");
  btnRow.forEach((el, i) => {
    btnRow[i].addEventListener("click", (e) => {
      const dIndex = e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
      console.log(dIndex);
      taskList.splice(dIndex, 1);

      drawTable();
      updateStat();
    });
  });
};

const deleteAll = () => {
  document.querySelectorAll(".todolist .row").forEach((el, i) => {
    if (el.getAttribute("data-index") !== null) {
      el.remove();
    }
  });
};

const drawTable = () => {
  deleteAll();

  const afterRow = document.querySelector(".todolist");
  taskList.forEach((el, i) => {
    if (el.archive === true) return;

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
      <div class="myBtn edit"><img src="/src/img/edit.png" alt="bin" /></div> 
      <div class="myBtn archive"><img src="/src/img/archiveBlack.png" alt="bin" /></div> 
      <div class="myBtn delete"><img src="/src/img/binBlack.png" alt="bin" /></div>
    </div>`;

    addRow.innerHTML = row;
    afterRow.append(addRow);
  });

  addArchiveHandler();
  addEditHandler();
  addDeleteHandler();
};

const init = (eIndex) => {
  const form = document.querySelector(".form");
  const createNode = document.querySelector(".createNoteLeft .createNote");

  document.querySelector(".deleteAll").addEventListener("click", () => {
    taskList = [];

    updateStat();
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
        arhive: false,
      });

      updateStat();
      drawTable();
    }
  });

  drawStat();
  archiveAll();

  drawTable();
  saveNote();
};

init();
