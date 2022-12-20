const list = document.querySelector(".list");
const listItems = document.querySelectorAll("nav ul li");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
  list.classList.toggle("open");
  listItems.forEach(function (listItem) {
    listItem.classList.add("animate");
  });
  close.classList.toggle("animate");
  overlay.classList.add('show-overlay')
});

close.addEventListener("click", function () {
  list.classList.remove("open");
  close.classList.remove("animate");
  listItems.forEach(function (listItem) {
    listItem.classList.remove("animate");
  });
  overlay.classList.remove('show-overlay')
});

overlay.addEventListener('click', function(){
    list.classList.remove("open");
    close.classList.remove("animate");
    listItems.forEach(function (listItem) {
      listItem.classList.remove("animate");
    });
    overlay.classList.remove('show-overlay');
})
