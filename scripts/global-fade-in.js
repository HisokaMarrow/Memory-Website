// global-fade.js
window.addEventListener("load", () => {
  const main = document.querySelector("main");
  if (main) {
    main.classList.add("fade-in-on-load", "visible");
  }
});
