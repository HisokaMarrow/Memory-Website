window.addEventListener("load", () => {
  const overlay = document.getElementById("memory-lock-overlay");
  const hasPlayed = sessionStorage.getItem("memorySiteIntroPlayed");

  if (!hasPlayed) {
    sessionStorage.setItem("memorySiteIntroPlayed", "true");

    overlay.style.display = "flex";
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";

    document.body.classList.add("intro-active");

    // Force repaint to ensure CSS animations fire correctly
    void overlay.offsetHeight;

    // Wait before starting fade-out
    setTimeout(() => {
      overlay.style.animation = "fadeOverlayOut 1s forwards";

      setTimeout(() => {
        overlay.style.display = "none";
        document.body.classList.remove("intro-active");

        const mainContent = document.querySelector(".page-content");
        if (mainContent) {
          mainContent.classList.add("fade-in");
        }
      }, 1000);
    }, 2500);
  } else {
    overlay.style.display = "none";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    document.body.classList.remove("intro-active");

    const mainContent = document.querySelector(".page-content");
    if (mainContent) {
      mainContent.classList.add("fade-in");
    }
  }
});
