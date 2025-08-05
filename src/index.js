import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Select buttons (assuming they are the first three buttons in the header)
const buttons = document.querySelectorAll("header button");

buttons[0].textContent = "Home";
buttons[1].textContent = "Menu";
buttons[2].textContent = "Contact";

// Initial load
loadHome();

// Event listeners for tab switching
buttons[0].addEventListener("click", loadHome);
buttons[1].addEventListener("click", loadMenu);
buttons[2].addEventListener("click", loadContact);