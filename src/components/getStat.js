const getStat = (taskList) => {
  const statList = taskList.reduce((acc, el) => {
    if (!(el.category in acc)) {
      acc[el.category] = { active: 0, archive: 0 };
    }
    if (el.archive) {
      acc[el.category].archive++;
    } else {
      acc[el.category].active++;
    }
    return acc;
  }, {});

  return Object.entries(statList).map(([key, stat]) => {
    return { category: key, ...stat };
  });
};

export default getStat;
