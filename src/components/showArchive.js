import { drawTable, setArchiveState } from "./drawTable.js";

const showArchive = (taskList, archiveState) => {
  document.querySelector(".btnRow .archiveAll").addEventListener("click", () => {
    archiveState = !archiveState;
    setArchiveState(archiveState);
    drawTable(taskList);
  });
};

export default showArchive;
