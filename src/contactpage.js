import Icon from "./ramenicon.png";
import Map from "./konohamap.jpeg";
function _createNav() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const subDiv = document.createElement("div");
  const homeDiv = document.createElement("div");
  const menuDiv = document.createElement("div");
  const contactDiv = document.createElement("div");

  const myIcon = new Image();
  myIcon.src = Icon;

  contactDiv.classList.add("current-page");
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

function _createMenuBody() {
  const body = document.createElement("div");
  body.classList.add("menu-body");

  const dummy1 = document.createElement("div");
  const dummy2 = document.createElement("div");
  const page = _innerPage();

  body.appendChild(dummy1);
  body.appendChild(page);
  body.appendChild(dummy2);
  return body;
}

function _innerPage() {
  const page = document.createElement("div");
  page.classList.add("contact-page");

  const map = document.createElement("div");
  map.classList.add("map");
  const ad = document.createElement("div");
  ad.innerText = "Address : 123 Genin Street";
  const myIcon = new Image();
  myIcon.src = Map;
  map.appendChild(ad);
  map.appendChild(myIcon);

  //Contact-Info
  const info = document.createElement("div");
  info.classList.add("contact-info");
  const head = document.createElement("h1");
  head.innerText = "Contact Us!";
  const phone = document.createElement("div");
  const email = document.createElement("div");
  const deliv = document.createElement("div");
  phone.innerText = "Phone : 800 - InstantRamen";
  email.innerText = "Email : 123ichirakufree.konoha.org";
  deliv.innerText = "Delivery : We now do Doordash!";

  info.appendChild(head);
  info.appendChild(phone);
  info.appendChild(email);
  info.appendChild(deliv);

  page.appendChild(map);
  page.appendChild(info);

  return page;
}

let createContactPage = () => {
  const nav = _createNav();
  const body = _createMenuBody();
  const content = document.getElementById("content");

  content.appendChild(nav);
  content.appendChild(body);
};

export default createContactPage;
