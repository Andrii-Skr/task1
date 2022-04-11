import addArchiveHandler from "./addArchiveHandler.js";
import deleteAll from "./deleteAll.js";
import { addEditHandler } from "./addEditSaveHandler.js";
import addDeleteHandler from "./addDeleteHandler.js";

let archiveState = !true;
const icons = {
  Task: '<img src="/src/img/Task.png" alt="icon" />',
  "Random Thought": '<img src="/src/img/Random.png" alt="icon" />',
  Idea: '<img src="/src/img/Idea.png" alt="icon" />',
};
const getArchiveStateNow = () => {
  return archiveState;
};

const setArchiveState = (state) => {
  archiveState = state;
};

const drawTable = (taskList) => {
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
        e.match(/^\d{1,2}[.-/]\d{1,2}[.-/](\d{2}|\d{4})$/) !== null
          ? (el.dates = e)
          : (el.dates = "")
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
  addEditHandler(taskList);
  addDeleteHandler(taskList);
};

export { drawTable, setArchiveState, getArchiveStateNow };
