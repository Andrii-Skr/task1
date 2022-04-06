document.body.onload = addElement;
//var my_div = (newDiv = null);

function addElement() {
  // Создаём новый элемент div
  // и добавляем в него немного контента

  var newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1>Привет!</h1>";

  // Добавляем только что созданный элемент в дерево DOM

  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}
