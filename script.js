// Typing Effect
const text = "Innovative solutions for modern problems";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Scroll Button
function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}
function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}
// Scroll Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
// Get Started Button
function handleGetStarted() {
    alert("Welcome! Explore our features below 🚀");

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

// Join Now Button
function handleJoin() {
    alert("Thank you for joining CodeSphere! 🎉");
}
function showPopup(message) {
    let popup = document.getElementById("popup");
    popup.innerText = message;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

function handleGetStarted() {
    showPopup("Welcome! 🚀");
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

function handleJoin() {
    showPopup("Successfully Joined 🎉");
}

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));