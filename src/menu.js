function loadMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  const items = [
    "Grilled Salmon",
    "Classic Burger",
    "Caesar Salad",
    "Pasta Primavera",
    "Chocolate Lava Cake"
  ];
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
  });

  content.appendChild(header);
  content.appendChild(menuList);
}

export default loadMenu;