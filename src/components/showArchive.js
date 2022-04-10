import { drawTable } from "/src/app.js";
import { setArchiveState } from "/src/app.js";

const showArchive = (archiveState) => {
  document.querySelector(".btnRow .archiveAll").addEventListener("click", () => {
    archiveState = !archiveState;
    setArchiveState(archiveState);
    drawTable();
  });
};

export default showArchive;
