function imageItem(imageCount, prefix, title, renderer, ext) {
  if (renderer) {
    let imageUrl = `dist/img/${title}/${prefix}${imageCount}.${ext}`;
    let ip = `<div
    class="--image-preview-- shrink-0 grow max-w-12 bg-theme-121 h-12 w-12 rounded-sm bg-cover bg-center bg-no-repeat"
    data-for=${title}
    style="background-image: url(${imageUrl})"
    data-src="${imageUrl}"
    ></div>`;
    ip = document.createElement("div");
    ip.classList =
      "--image-preview-- shrink-0 grow max-w-12 bg-theme-121 h-12 w-12 rounded-sm bg-cover bg-center bg-no-repeat";
    renderer.appendChild(ip);
    ip.setAttribute("data-src", `${imageUrl}`);
    ip.setAttribute("data-for", title);
    ip.setAttribute("style", `background-image:  url(${imageUrl});`);
    ip.setAttribute("data-id", `${title}${imageCount}`);
  }
}
function loopImagePreviews(imageCount, prefix, title, ext) {
  let renderer = document.querySelector(`.--${title}--.--image-preview-wrap--`);
  for (let index = 1; index <= imageCount; index++) {
    imageItem(index, prefix, title, renderer, ext);
  }
}

function prevImages(imageWrap, ext) {
  let el = document.querySelector(`.${imageWrap}.--image-preview-wrap--`);
  let imageCount = el.dataset.imagecount;
  let title = el.dataset.title;
  let prefix = el.dataset.prefix;
  loopImagePreviews(imageCount, prefix, title, ext);
}
prevImages("--store-app--", "jpg");
prevImages("--we-study--", "jpg");
const imagePreview = document.querySelectorAll(".--image-preview--");
imagePreview.forEach((ip) => {
  ip.addEventListener("click", (e) => {
    let i = e.target.closest(".--image-preview--").dataset.for;
    const image = document.querySelector(`.--${i}--.--image--`);
    image.setAttribute("src", e.target.dataset.src);
  });
});
