// Scroll to plans section
function scrollToPlans() {
    document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
}

// Form submission simulation
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your changes have been saved!");
});
