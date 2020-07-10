// Modal Elements
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal__box");
const modalHeader = document.querySelector(".modal__header");
const modalTitle = document.querySelector(".modal__title");
const modalClose = document.querySelector(".modal__close");

// Buttons
const btnClose = document.querySelector(".modal__close");
const btnFadeIn = document.getElementById("fade-in");
const btnFadeInScale = document.getElementById("fade-in-scale");
const btnSlideIn = document.getElementById("slide-in");
const btnFullScreen = document.getElementById("fullscreen");

// Events
btnClose.addEventListener("click", close);
btnFadeIn.addEventListener("click", fadeIn);
btnFadeInScale.addEventListener("click", fadeInScale);
btnSlideIn.addEventListener("click", slideIn);
btnFullScreen.addEventListener("click", fullScreen);

// Animation Functions
function fadeIn() {
  TweenMax.to(modal, { autoAlpha: 1, duration: 0.5 });
}

function fadeInScale() {
  TweenMax.set(modalBox, { scale: 0 });
  TweenMax.to(modal, { autoAlpha: 1, duration: 0.5 });
  TweenMax.to(modalBox, {
    scale: 1,
    delay: 0.5,
    ease: Elastic.easeOut,
    duration: 1,
  });
}

function slideIn() {
  TweenMax.to(modal, { autoAlpha: 1, duration: 0.5 });
  TweenMax.from(modalBox, { autoAlpha: 0, top: 300, duration: 0.5 });
}

function fullScreen() {
  TweenMax.set(modal, { backgroundColor: "#fff", scale: 0 });
  TweenMax.set(modalClose, { color: "#333" });
  TweenMax.set([modalHeader, modalBox], { position: "initial" });
  TweenMax.set(modalTitle, { color: "#333", backgroundColor: "#fff" });
  TweenMax.to(modal, { autoAlpha: 1, scale: 1, duration: 0.2 });
}

function close() {
  TweenMax.set([modal, modalClose, modalBox, modalHeader, modalTitle], {
    clearProps: "all",
  });
  TweenMax.to(modal, { autoAlpha: 0, duration: 0.5 });
}
