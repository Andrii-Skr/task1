import drawStat from "./drawStat.js";

const updateStat = (taskList) => {
  const statRow = document.querySelectorAll(".stat");

  statRow.forEach((el, i) => {
    statRow[i].remove();
  });
  drawStat(taskList);
};

export default updateStat;
