import getStat from "./getStat.js";

const drawStat = (taskList) => {
  console.log(taskList);
  const icons = {
    Task: '<img src="/src/img/Task.png" alt="icon" />',
    "Random Thought": '<img src="/src/img/Random.png" alt="icon" />',
    Idea: '<img src="/src/img/Idea.png" alt="icon" />',
  };
  const afterRow = document.querySelector(".categorylist");
  getStat(taskList).forEach((el) => {
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

export default drawStat;
