let d = new Date();

document.getElementById("currentYear").textContent = d.getFullYear();

document.getElementById("lastModifiedDate").textContent = document.lastModified;

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("hide");
}