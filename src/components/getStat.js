const getStat = (taskList) => {
  console.log(taskList);
  const statList = {};
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].archive === true) {
      if (taskList[i].category in statList) {
        statList[taskList[i].category].archive += 1;
      } else {
        statList[taskList[i].category] = {
          archive: 1,
          active: 0,
        };
      }
    } else {
      if (taskList[i].category in statList) {
        statList[taskList[i].category].active += 1;
      } else {
        statList[taskList[i].category] = {
          active: 1,
          archive: 0,
        };
      }
    }
  }

  return Object.entries(statList).map(([key, stat]) => {
    return { category: key, ...stat };
  });
};

export default getStat;
