const navItem = document.querySelectorAll(".--navitem--:not(.--mobile--)");
const mobileNavItem = document.querySelectorAll(".--navitem--.--mobile--");
const navItemActive = document.querySelector(
  ".--navitem--:not(.--mobile--).on",
);
const mobileNavItemActive = document.querySelector(
  ".--navitem--.--mobile--.on",
);
const nav = document.querySelector(".--nav--:not(.--mobile--)");
const mobileNav = document.querySelector(".--nav--.--mobile--");

localStorage.cl = "false";

function navEvent(el, mob = false) {
  if (!el) return;
  localStorage.cl = "true";
  setTimeout(() => {
    localStorage.cl = "false";
  }, 600);
  if (mob) {
    mobileNavItem.forEach((n) => {
      n.classList.remove("on");
    });
    el.classList.add("on");
    return;
  }
  navItem.forEach((n) => {
    n.classList.remove("on");
  });
  el.classList.add("on");
}
navEvent(mobileNavItemActive, true ?? null);
navEvent(navItemActive ?? null);

nav.addEventListener("click", (e) => {
  navEvent(e.target.closest(".--navitem--"));
});
mobileNav.addEventListener("click", (e) => {
  navEvent(e.target.closest(".--navitem--"), true);
});

// navItem.forEach((item) => {
// item.addEventListener("click", (e) => {
// const targetSection = e.target.closest(".--navitem--").dataset.href;
// document
//   .querySelector(`.--section${targetSection}--`)
//   .scrollIntoView({ behavior: "smooth" });
// });
// });
