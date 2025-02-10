const navItem = document.querySelectorAll(".--navitem--");
const navItemActive = document.querySelector(".--navitem--.on");
const nav = document.querySelector(".--nav--");

localStorage.cl = "false";

function navEvent(el) {
  if (!el) return;
  const target = el;
  navItem.forEach((n) => {
    n.classList.remove("on");
  });
  target.classList.add("on");
}
navEvent(navItemActive ?? null);

nav.addEventListener("click", (e) => {
  localStorage.cl = "true";
  setTimeout(() => {
    localStorage.cl = "false";
  }, 600);
  navEvent(e.target.closest(".--navitem--"));
});

// navItem.forEach((item) => {
// item.addEventListener("click", (e) => {
// const targetSection = e.target.closest(".--navitem--").dataset.href;
// document
//   .querySelector(`.--section${targetSection}--`)
//   .scrollIntoView({ behavior: "smooth" });
// });
// });
