// global-fade-in.js

window.addEventListener("load", () => {
  const mainContent = document.querySelector(".page-content") || document.querySelector("main") || document.body;

  // Always apply fade-in class when page loads
  if (mainContent) {
    mainContent.classList.add("fade-in");
  }
});
