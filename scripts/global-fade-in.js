// global-fade-in.js

window.addEventListener("load", () => {
  const overlay = document.getElementById("memory-lock-overlay");
  const mainContent = document.querySelector(".page-content");
  const hasPlayed = sessionStorage.getItem("memorySiteIntroPlayed");

  if (!overlay || !mainContent) return; // Guard for missing elements

  if (!hasPlayed) {
    sessionStorage.setItem("memorySiteIntroPlayed", "true");

    overlay.style.display = "flex";
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    document.body.classList.add("intro-active");

    // Force repaint to trigger animation
    void overlay.offsetHeight;

    setTimeout(() => {
      overlay.style.animation = "fadeOverlayOut 1s forwards";

      setTimeout(() => {
        overlay.style.display = "none";
        document.body.classList.remove("intro-active");
        mainContent.classList.add("fade-in");
      }, 1000);
    }, 2500);
  } else {
    overlay.style.display = "none";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    document.body.classList.remove("intro-active");
    mainContent.classList.add("fade-in");
  }
});
