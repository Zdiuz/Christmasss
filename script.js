// JavaScript for Interactive Features

// Modal Logic
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".close-btn");
const bannerButton = document.querySelector(".banner button");

bannerButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Carousel Auto Scroll
const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach(carousel => {
    let isScrolling;
    carousel.addEventListener("scroll", () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            carousel.scrollBy({ left: 200, behavior: "smooth" });
        }, 3000);
    });
});
