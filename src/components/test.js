function addElement(text) {
  // Создаём новый элемент div
  // и добавляем в него немного контента
  let my_div = null;
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<h1>${text}</h1>`;

  // Добавляем только что созданный элемент в дерево DOM

  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}

export default addElement;
