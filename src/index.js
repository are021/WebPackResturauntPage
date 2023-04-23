import main from "./mainpage.js";
import menu from "./menupage.js";
import cpage from "./contactpage.js";

// menu();

main();

let addNewPageListeners = () => {
    const home =  document.querySelector("#content > .navbar > div > div:nth-child(1)");
    home.addEventListener('click', ()=>{
        document.querySelector("body").removeChild(document.getElementById("content"));

        const content = document.createElement("div");
        content.setAttribute("id","content");
        document.querySelector("body").appendChild(content);
        main();
        addNewPageListeners();
    });

    const about =  document.querySelector("#content > .navbar > div > div:nth-child(2)");
    about.addEventListener('click', ()=>{
        document.querySelector("body").removeChild(document.getElementById("content"));

        const content = document.createElement("div");
        content.setAttribute("id","content");
        document.querySelector("body").appendChild(content);
        menu();
        addNewPageListeners();
    });
    const contact =  document.querySelector("#content > .navbar > div > div:nth-child(3)");
    contact.addEventListener('click', ()=>{
        document.querySelector("body").removeChild(document.getElementById("content"));

        const content = document.createElement("div");
        content.setAttribute("id","content");
        document.querySelector("body").appendChild(content);
        cpage();
        addNewPageListeners();
    });
};     
addNewPageListeners();
