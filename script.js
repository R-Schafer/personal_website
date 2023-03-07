const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const footer = document.querySelector("footer");
const intro = document.querySelector(".intro");

function handleClick() {
  hideBlurbs();
  hideMobileMenu();
  hideImages();
  removeNoShow();
  intro.classList.add("hidden");
}

function hideBlurbs() {
  document.querySelectorAll("#blurb").forEach((blurb) => {
    blurb.classList.add("hidden");
  });
}

function hideMobileMenu() {
  menu_btn.classList.remove("is-active");
  mobile_menu.classList.remove("is-active");
}

function hideImages() {
  document.querySelectorAll("img").forEach((image) => {
    image.classList.add("hidden");
  });
}

// find chosen blurb, and hide it when the menu is open
function tempHideBlurb() {
  document.querySelectorAll("#blurb").forEach((blurb) => {
    if (blurb.classList.contains("no-show")) {
      blurb.classList.toggle("no-show");
    } else if (!blurb.classList.contains("hidden")) {
      blurb.classList.add("no-show");
    }
  });
}

function removeNoShow() {
  document.querySelectorAll("#blurb").forEach((blurb) => {
    if (blurb.classList.contains("no-show")) {
      blurb.classList.remove("no-show");
    }
  });
}

// selecting all elements with the same id and adding event listeners
// about
document.querySelectorAll("#about").forEach((item) => {
  item.addEventListener("click", function () {
    handleClick();
    document.querySelector(".about-image").classList.remove("hidden");
    document.querySelector(".about").classList.remove("hidden");
  });
});
// twitter
document.querySelectorAll("#twitter").forEach((item) => {
  item.addEventListener("click", function () {
    handleClick();
    document.querySelector(".twitter-image").classList.remove("hidden");
    document.querySelector(".twitter").classList.remove("hidden");
  });
});
// world
document.querySelectorAll("#world").forEach((item) => {
  item.addEventListener("click", function () {
    handleClick();
    document.querySelector(".world-image").classList.remove("hidden");
    document.querySelector(".world").classList.remove("hidden");
  });
});
// calculator
document.querySelectorAll("#calculator").forEach((item) => {
  item.addEventListener("click", function () {
    handleClick();
    document.querySelector(".calculator-image").classList.remove("hidden");
    document.querySelector(".calculator").classList.remove("hidden");
  });
});
// weather
document.querySelectorAll("#weather").forEach((item) => {
  item.addEventListener("click", function () {
    handleClick();
    document.querySelector(".weather-image").classList.remove("hidden");
    document.querySelector(".weather").classList.remove("hidden");
  });
});

// hamburger menu
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  intro.classList.toggle("no-show");

  // temp hide burb when menu is open
  tempHideBlurb();
});

footer.innerHTML = `Copyright © Rainey Schafer ${new Date().getFullYear()}`;
