const dropdownElementList = document.querySelectorAll('dropdown-toggle')
const dropdownList = [dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

const carousel = new bootstrap.Carousel('1PRENDI')

document.getElementById("buttonCarousel2").onclick = function () {
    location.href = "./info.html";
};

document.getElementById("buttonCarousel3").onclick = function () {
    location.href = "./info.html";
};