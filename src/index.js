import loadInitialPage from "./initial-loaded-page";
import loadMenu from "./menu-load";
import loadContact from "./contact-load";


(() => {
    const content = document.querySelector("#content");
    const home = document.querySelector(".nav li:nth-child(1)");
    const menu = document.querySelector(".nav li:nth-child(2)");
    const contact = document.querySelector(".nav li:nth-child(3)");

    menu.addEventListener("click", () => {
        content.textContent = "";
        loadMenu();
    })

    home.addEventListener("click", () => {
        content.textContent = "";
        loadInitialPage();
    })

    contact.addEventListener("click", () => {
        content.textContent = "";
        loadContact();
    })
    loadInitialPage();
})()