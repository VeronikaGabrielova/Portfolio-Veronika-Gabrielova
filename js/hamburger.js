const line = document.getElementById("line");
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

//line display on page load
line.style.display = "block";

//Hamburger menu Open-Close
const toggleButton = () => {
navList.classList.toggle("show");

if (navList.classList.contains("show")) {
line.style.display = "none";
hamburgerButton.classList.add("open");
} else {
line.style.display = "block";
hamburgerButton.classList.remove("open");
}

if (!navList.classList.contains("show")) {
navList.classList.add("right-align");
} else {
navList.classList.remove("right-align");
}
};

hamburgerButton.addEventListener("click", toggleButton);

//Closing menu when screen is more than 1000px
const mediaQuery = window.matchMedia("(min-width: 1000px)");

const handleMediaChange = (event) => {
if (event.matches) {
navList.classList.remove("show");
line.style.display = "block";
navList.classList.remove("right-align");
}
};

mediaQuery.addEventListener("change", handleMediaChange);

//Animation of Line
window.addEventListener("load", () => {
document.body.classList.add("loaded");
});
