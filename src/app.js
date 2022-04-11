import showArchive from "./components/showArchive.js";
import updateStat from "./components/updateStat.js";
import drawStat from "./components/drawStat.js";
import { drawTable, getArchiveStateNow } from "./components/drawTable.js";
import { addSaveHandler } from "./components/addEditSaveHandler.js";

window.addEventListener("error", function (event) {
  console.error("global", event.error);
});

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
    content: "some text 22",
    dates: "",
    archive: false,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "some text 123",
    dates: "",
    archive: false,
  },
  {
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Random Thought",
    content: "some text 1.2.22",
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

const setTaskList = (list) => {
  taskList = list;
};

const init = (eIndex) => {
  const form = document.querySelector(".form");
  const createNode = document.querySelector(".createNoteLeft .createNote");

  document.querySelector(".deleteAll").addEventListener("click", () => {
    taskList = [];

    updateStat(taskList);
    drawTable(taskList);
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

      drawTable(taskList);
      updateStat(taskList);
    }
  });

  drawStat(taskList);
  drawTable(taskList);
  showArchive(taskList, getArchiveStateNow());
  addSaveHandler(taskList);
};
try {
  init();
} catch (error) {
  console.log("Error", error);
}

export { setTaskList };
