let navLinks = document.querySelector(".nav-links");
let hamburger = document.querySelector(".hamburger");
let topBar = document.querySelector(".bar-1");
let middleBar = document.querySelector(".bar-2");
let lastBar = document.querySelector(".bar-3");
const links = document.querySelectorAll(".nav-links a");
const showLinks = () => {
    navLinks.classList.toggle("show-links");
    middleBar.classList.toggle("hidden");
    topBar.classList.toggle("transform-b2");
    lastBar.classList.toggle("transform-b3");

}
hamburger.addEventListener("click", showLinks)

// small form validation

const form = document.querySelector("form");
const submitStatus = document.querySelector(".submit-status");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitStatus.textContent = "Message sent successfully ✅";
    setTimeout(() => {
        submitStatus.textContent = "";
    }, 2000)
    form.reset();

})

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show-links");
    middleBar.classList.remove("hidden");
    topBar.classList.remove("transform-b2");
    lastBar.classList.remove("transform-b3");

    })
})