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
    const rowStat = `<div class="cell">${icons[el.category]}</div> <div class="cell">${
      el.category
    }</div><div class="cell">${el.active}</div><div class="cell">${el.archive}</div>`;
    addRowStat.innerHTML = rowStat;
    afterRow.append(addRowStat);
  });
};

export default drawStat();
