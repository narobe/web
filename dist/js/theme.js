const themeToggle = document.querySelector(".--themetoggle--");
localStorage.theme = "dark_theme";
localStorage.theme == "dark_theme"
  ? (document.documentElement.classList = "dark")
  : (document.documentElement.classList = "light");

themeToggle.addEventListener("click", () => {
  document.querySelectorAll("*:not(.no-theme-transition)").forEach((el) => {
    el.style.transition = "500ms";
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
