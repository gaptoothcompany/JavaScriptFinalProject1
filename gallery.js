const defaultText = "Hover over an image below.";

function upDate(previewPic) {
  const display = document.getElementById("image");
  display.style.backgroundImage = "url('" + previewPic.src + "')";
  display.textContent = previewPic.alt;
}

function unDo() {
  const display = document.getElementById("image");
  display.style.backgroundImage = "url('')";
  display.textContent = defaultText;
}

window.addEventListener("load", addTabFocus);

function addTabFocus() {
  console.log("addTabFocus is running");
  const images = document.querySelectorAll(".preview");
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    img.setAttribute("tabindex", "0");
    img.addEventListener("mouseover", function () {
      upDate(img);
    });
    img.addEventListener("mouseleave", function () {
      unDo();
    });
    img.addEventListener("focus", function () {
      upDate(img);
    });
    img.addEventListener("blur", function () {
      unDo();
    });
  }
}
