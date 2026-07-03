// Dynamically populate the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Dynamically populate the last modified date in the footer
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;