// ------- toggle -------
var navMain = document.querySelector(".page-header__nav");
var navToggle = document.querySelector(".toggle");

navMain.classList.remove("page-header__nav--nojs");

navMain.classList.add("page-header__nav--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("page-header__nav--closed")) {
    navMain.classList.remove("page-header__nav--closed");
    navToggle.classList.add("toggle--open");
  } else {
    navMain.classList.add("page-header__nav--closed");
    navToggle.classList.remove("toggle--open");
  }
});

// ------- pop-up -------
var link = document.querySelector(".main-product__button");
var linkCard = document.querySelectorAll(".product-card__button");
var popup = document.querySelector(".modal__block");
var overlay = document.querySelector(".modal__overlay");

if (link) {
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal__block--open");
    overlay.classList.add("modal__overlay--open");
  });
} else if (linkCard) {
  for (var i = 0; i < linkCard.length; i++) {
    linkCard[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal__block--open");
      overlay.classList.add("modal__overlay--open");
    });
  }
}

overlay.addEventListener("click", function() {
  popup.classList.remove("modal__block--open");
  overlay.classList.remove("modal__overlay--open");
});
