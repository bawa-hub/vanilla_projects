let box = document.querySelector(".product-container");
let nextButton = document.getElementById("nxt-btn");
let prevButton = document.getElementById("prev-btn");

// container width
const boxWidth = box.offsetWidth;

// total width of slider content
let totalWidth = 0;
const productElements = box.getElementsByClassName("mycard");
for (let i = 0; i < productElements.length; i++) {
  const productWidth = productElements[i].offsetWidth;
  totalWidth += productWidth;
}

// scroll position
let scrollPosition = box.scrollLeft;
showHideButtons(scrollPosition);

function btnpressprev() {
  scrollPosition -= box.offsetWidth;
  box.scrollLeft = scrollPosition;
  showHideButtons(scrollPosition);
}

function btnpressnext() {
  scrollPosition += box.offsetWidth;
  box.scrollLeft = scrollPosition;
  showHideButtons(scrollPosition);
}

function showHideButtons(scrollPosition) {
  const noProductsOnRight = totalWidth - boxWidth <= scrollPosition;
  if (noProductsOnRight) nextButton.style.display = "none";
  else nextButton.style.display = "block";

  const noProductsOnLeft = scrollPosition === 0;
  if (noProductsOnLeft) prevButton.style.display = "none";
  else prevButton.style.display = "block";
}
