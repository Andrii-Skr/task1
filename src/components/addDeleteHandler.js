import { drawTable } from "/src/app.js";
import updateStat from "./updateStat.js";
import { setTaskList } from "/src/app.js";

const addDeleteHandler = (taskList) => {
  const btnRow = document.querySelectorAll(".btnRow .delete");
  btnRow.forEach((el) => {
    el.addEventListener("click", (e) => {
      const dIndex = e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
      console.log(dIndex);
      taskList.splice(dIndex, 1);

      setTaskList(taskList);
      drawTable();
      updateStat(taskList);
    });
  });
};

export default addDeleteHandler;
