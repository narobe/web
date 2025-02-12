const navItem = document.querySelectorAll(".--navitem--:not(.--mobile--)");
const sections = document.querySelectorAll(".--section--");
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
function scrollToSection(el) {
  el.addEventListener("click", (e) => {
    const targetSection = e.target.closest(".--navitem--").dataset.href;
    document
      .querySelector(`.--section-${targetSection}--`)
      .scrollIntoView({ behavior: "smooth" });
  });
}

nav.addEventListener("click", (e) => {
  navEvent(e.target.closest(".--navitem--"));
});
mobileNav.addEventListener("click", (e) => {
  navEvent(e.target.closest(".--navitem--"), true);
});

navItem.forEach((item) => {
  scrollToSection(item);
});
mobileNavItem.forEach((item) => {
  scrollToSection(item);
});

sections.forEach((section) => {
  function observed(entries) {
    const [entry] = entries;
    const current = section.dataset.nav;
    let windowWidth = window.innerWidth <= 768;
    if (entry.isIntersecting) {
      navEvent(
        windowWidth
          ? document.querySelector(`.--navitem-${current}--.--mobile--`)
          : document.querySelector(`.--navitem-${current}--`),
        windowWidth,
      );
    }
  }
  const navObserver = new IntersectionObserver(observed, {
    root: null,
    threshold: 0.5,
  });
  navObserver.observe(section);
});
