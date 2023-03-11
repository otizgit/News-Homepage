const list = document.querySelector(".list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", showSideBar);

close.addEventListener("click", removeSideBar);

overlay.addEventListener("click", removeSideBar);

function showSideBar() {
  list.classList.toggle("open");
  overlay.classList.add("show-overlay");
}

function removeSideBar() {
  list.classList.remove("open");
  overlay.classList.remove("show-overlay");
}
