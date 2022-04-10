const deleteAll = () => {
  document.querySelectorAll(".todolist .row").forEach((el, i) => {
    if (el.getAttribute("data-index") !== null) {
      el.remove();
    }
  });
};

export default deleteAll;
