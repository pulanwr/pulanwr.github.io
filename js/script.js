// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika history di klik
document.querySelector("#history-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik dilaur sidebar untuk menghilangkan nav
const history = document.querySelector("#history-menu");

document.addEventListener("click", function (e) {
  if (!history.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
