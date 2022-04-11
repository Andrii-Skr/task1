import { drawTable } from "./drawTable.js";
import updateStat from "./updateStat.js";
import { setTaskList } from "/src/app.js";

const addArchiveHandler = (taskList) => {
  const btnArchive = document.querySelectorAll(".btnRow .archive");

  btnArchive.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      const index = e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
      console.log(index);
      taskList[index].archive = !taskList[index].archive;
      setTaskList(taskList);
      drawTable(taskList);
      updateStat(taskList);
    });
  });
};

export default addArchiveHandler;
