import Icon from "./ramenicon.png";
import Ramen from "./ramen_guy.webp";
import Naruto from "./naruto.webp";
function _createNav() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const subDiv = document.createElement("div");
  const homeDiv = document.createElement("div");
  const menuDiv = document.createElement("div");
  const contactDiv = document.createElement("div");

  const myIcon = new Image();
  myIcon.src = Icon;

  homeDiv.classList.add("current-page");
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

function _createLeftBar() {
  const left = document.createElement("div");
  left.classList.add("left-bar");

  const hours = document.createElement("div");
  const mf = document.createElement("div");
  const sat = document.createElement("div");
  const sun = document.createElement("div");
  hours.textContent = "Hours of Operation";
  mf.textContent = "Monday - Friday : 9:00am - 9:00pm";
  sat.textContent = "Saturday : 8:00am - 11:00pm";
  sun.textContent = "Sunday : Closed";

  left.appendChild(hours);
  left.appendChild(mf);
  left.appendChild(sat);
  left.appendChild(sun);

  const coty = document.createElement("div");
  const customer = document.createElement("div");
  customer.textContent = "Customer of The Year";

  const myIcon = new Image();
  myIcon.src = Naruto;

  const quote = document.createElement("div");
  quote.classList.add("quote");
  quote.innerHTML =
    "I love the Ramen here. As Hokage, I'm often really busy, so having a place like this to relax is the best! <span>-- Naruto Uzumaki, Hokage of Konoha</span>";

  coty.appendChild(customer);
  coty.appendChild(myIcon);
  coty.appendChild(quote);

  left.appendChild(coty);

  return left;
}

function _createRightBar() {
  const right = document.createElement("div");
  right.classList.add("right-bar");
  const header = document.createElement("h1");
  header.textContent = "ichiraku Ramen";
  const quote = document.createElement("div");
  quote.classList.add("quote");
  quote.innerHTML =
    "Top Quality Ramen, Guranteed Fresh, All The Time! <span>-- The Ramen Guy</span>";

  const myIcon = new Image();
  myIcon.src = Ramen;

  right.appendChild(header);
  right.appendChild(quote);
  right.appendChild(myIcon);

  return right;
}

function _createBody() {
  const body = document.createElement("div");
  body.classList.add("body");

  const leftBar = _createLeftBar();
  const rightBar = _createRightBar();

  body.appendChild(leftBar);
  body.appendChild(rightBar);
  return body;
}

let createHomePage = () => {
  const navBar = _createNav();
  const body = _createBody();
  const content = document.getElementById("content");
  content.appendChild(navBar);
  content.appendChild(body);
};

export default createHomePage;
