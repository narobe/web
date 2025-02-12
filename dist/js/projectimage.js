const image = document.querySelector(".--image--");
const imagePreview = document.querySelectorAll(".--image-preview--");
imagePreview.forEach((ip) => {
  ip.addEventListener("click", (e) => {
    image.setAttribute("src", e.target.dataset.src);
  });
});
