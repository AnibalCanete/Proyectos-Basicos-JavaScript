
// Element.getBoundingClientRect() - The Method Returns The Size of An Element and Its Position Relative To The Viewport
// pageYOffset is a read - The Only Window Property That Returns The Number of Pixels The Document Has Been Shifted Vertically
// slice - Extracts a Section From a String Without Modifying The Original String
// offsetTop - A Number That Represents The Top Position of The Element in Pixels

// Set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Close Links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// Fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    // Setup Back To Top Link

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// Smooth Scroll
// Select Links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent Default
        e.preventDefault();
        // Navigate To Specific Spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // Close
        linksContainer.style.height = 0;
    });
});
