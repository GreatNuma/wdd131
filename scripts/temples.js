// --- Hamburger Menu Toggle ---
const mainNav = document.querySelector('.navigation');
const hamburgerBtn = document.querySelector('#menu');

hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

// --- Dynamic Footer Dates ---
// Set current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;