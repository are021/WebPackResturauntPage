import Icon from "./ramenicon.png";
function _createNav() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const subDiv = document.createElement("div");
  const homeDiv = document.createElement("div");
  const menuDiv = document.createElement("div");
  const contactDiv = document.createElement("div");

  const myIcon = new Image();
  myIcon.src = Icon;

  menuDiv.classList.add("current-page");
  homeDiv.textContent = "Home";
  menuDiv.textContent = "Menu";
  contactDiv.textContent = "Contact";
  subDiv.appendChild(homeDiv);
  subDiv.appendChild(menuDiv);
  subDiv.appendChild(contactDiv);

  navBar.appendChild(myIcon);
  navBar.appendChild(subDiv);

  return navBar;
}
function _createMenu() {
  const body = document.createElement("div");
  body.classList.add("menu-body");

  const emptyDiv1 = document.createElement("div");
  const emptyDiv2 = document.createElement("div");
  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");

  // SubMenuItems
  const miso = document.createElement("div");
  const tonk = document.createElement("div");
  const shio = document.createElement("div");
  const sap = document.createElement("div");
  const ramy = document.createElement("div");

  miso.innerHTML =
    "Miso Ramen : $9.99 <br><span>A Delicious Ramen Soaked In Miso Broth, Comes with choice of egg</span>";
  tonk.innerHTML =
    "Tonkotsu Ramen : $11.99 <br><span>Creamy ramen, soaked in a thick Tonkotsu brot, Comes with choice of egg</span>";
  shio.innerHTML =
    "Shio Ramen : $9.99 <br><span>Salt Ramen, flavored with delicious seafood, Comes with choice of egg</span>";
  sap.innerHTML =
    "Sapporo Ramen : $10.99 <br><span>Delicious buttery and rich ramen, with choice or pork or chicken, Comes with choice of egg</span>";
  ramy.innerHTML =
    "Ramyeon Ramen : $10.99 <br><span>Delicious spicy ramen, with kimchi and/or gochujang, Comes with choice of egg</span>";

  menuItems.appendChild(miso);
  menuItems.appendChild(tonk);
  menuItems.appendChild(shio);
  menuItems.appendChild(sap);
  menuItems.appendChild(ramy);

  body.appendChild(emptyDiv1);
  body.appendChild(menuItems);
  body.appendChild(emptyDiv2);
  return body;
}

let createMenuPage = () => {
  const nav = _createNav();
  const menu = _createMenu();
  const content = document.getElementById("content")
  content.appendChild(nav);
  content.appendChild(menu);
};

export default createMenuPage;
