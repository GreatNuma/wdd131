// --- Hamburger Menu Toggle ---
// Fixed: Look for the 'nav' tag instead of '.navigation'
const mainNav = document.querySelector('nav');
const hamburgerBtn = document.querySelector('#menu');

hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

// --- Dynamic Footer Dates ---
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;