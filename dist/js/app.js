const theme_toggle = document.querySelector("#theme_toggle");
const navItem = document.querySelectorAll("#nav-item");
const navItemActive = document.querySelector("#nav-item.on");
const navItemsWrapper = document.querySelector("#nav-items");
const navItemLink = document.querySelectorAll("#nav-item-wrap");
const navIndicator = document.querySelector("#nav-indicator");
const sections = document.querySelectorAll(".section");
const projectImage = document.querySelector("#project-image");
const imagePreview = document.querySelectorAll("#image-preview");
const form = document.querySelector("form");
const formName = document.querySelector("input[name='name']");
const formAdd = document.querySelector("input[name='address']");
const formMessage = document.querySelector("textarea[name='message']");

// On page load or when changing themes, best to add inline in `head` to avoid FOUC

// localStorage.theme = "dark_theme";
localStorage.theme == "dark_theme"
  ? (document.documentElement.classList = "dark")
  : (document.documentElement.classList = "light");

theme_toggle.addEventListener("click", () => {
  console.log("object");
  document.querySelectorAll("*:not(.no-theme-transition)").forEach((el) => {
    el.style.transition = "1800ms";
  });
  setTimeout(() => {
    document.querySelectorAll("*:not(.no-theme-transition)").forEach((el) => {
      el.style.transition = "all 0ms";
    });
  }, 2000);
  localStorage.theme == "dark_theme"
    ? (localStorage.theme = "light_theme")
    : (localStorage.theme = "dark_theme");
  localStorage.theme == "dark_theme"
    ? (document.documentElement.classList = "dark")
    : (document.documentElement.classList = "light");
});

// imagePreview.forEach((ip) => {
//   ip.addEventListener("click", (e) => {
//     projectImage.setAttribute("src", e.target.dataset.src);
//   });
// });

localStorage.cl = "false";

function navEvent(el) {
  const target = el;
  if (!target) return;
  navItem.forEach((n) => {
    n.classList.remove("on");
  });
  target.classList.add("on");
  target.closest("#nav-item-wrap").append(navIndicator);
}
navEvent(navItemActive);

navItemsWrapper.addEventListener("click", (e) => {
  localStorage.cl = "true";
  setTimeout(() => {
    localStorage.cl = "false";
  }, 600);
  navEvent(e.target.closest("#nav-item"));
});

navItemLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = e.target.closest(" #nav-item-wrap").getAttribute("href");
    // document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// sections.forEach((section) => {
//   function observed(entries) {
//     const [entry] = entries;
//     const current = section.dataset.navlink;
//     if (entry.isIntersecting && localStorage.cl !== "true") {
//       navEvent(document.querySelector(`.nav-item-${current}`));
//     }
//   }
//   const navObserver = new IntersectionObserver(observed, {
//     root: null,
//     threshold: 0.5,
//   });
//   navObserver.observe(section);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(formName.value, formAdd.value, formMessage.value);
//   sendMessage();
// });

// async function sendMessage() {
//   const url = `https://api.telegram.org/bot7683880675:AAEU8jWuT_Zjo6EVCuMGTQj2uzgpnmwAa84/sendMessage?chat_id=-4743606472&text=<b>Name:</b>%20${formName.value}%0A<b>Phone:</b>%20${formAdd.value}%0A<b>Message:</b>%20${formMessage.value}&parse_mode=HTML`;
//   const response = await fetch(url);
//   const data = await response.json();
//   if (response.ok) {
//     form.reset();
//     alert("form sent!");
//   } else {
//     alert("form not sent!");
//   }
// }
