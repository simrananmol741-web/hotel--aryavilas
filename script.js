// ================================
// Smooth Scroll for Navigation
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ================================
// Image Gallery Slider
// ================================
let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Initialize gallery
if (images.length > 0) {
    showImage(currentIndex);
    setInterval(nextImage, 5000); // auto change every 5s
}

// ================================
// Booking Form Validation
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const checkin = document.getElementById("checkin").value;
            const checkout = document.getElementById("checkout").value;
            const guests = document.getElementById("guests").value;

            if (!name || !email || !checkin || !checkout || !guests) {
                alert("Please fill in all fields before booking!");
                return;
            }

            if (new Date(checkin) >= new Date(checkout)) {
                alert("Checkout date must be after check-in date.");
                return;
            }

            alert(`Thank you, ${name}! Your booking request has been received.`);
            form.reset();
        });
    }
});

// ================================
// Simple Scroll Animations
// ================================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
});
