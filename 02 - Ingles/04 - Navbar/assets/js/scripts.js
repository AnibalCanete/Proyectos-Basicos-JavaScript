// classList - Display / Gets All Classes
// contains - Check The Class List For A Specific Class
// add - Add Class
// remove - Remove Class
// toggle - Toggle Class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
