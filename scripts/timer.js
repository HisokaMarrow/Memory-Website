let timerInterval = null;
let timeLeft = 0;
let isPaused = false;
let pauseCallback = null;
let gameHasEnded = false; // Prevents callback after manual stop

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function startGameTimer(seconds, onEndCallback) {
  const timerDisplay = document.getElementById("game-timer");
  timeLeft = seconds;
  isPaused = false;
  gameHasEnded = false;

  if (timerDisplay) timerDisplay.textContent = formatTime(timeLeft);

  clearInterval(timerInterval); // Reset timer if restarting

  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      if (timerDisplay) timerDisplay.textContent = formatTime(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        if (!gameHasEnded && typeof onEndCallback === 'function') {
          onEndCallback();
        }
      }
    }
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  gameHasEnded = true;
}

function togglePauseTimer() {
  isPaused = !isPaused;
  if (!isPaused && pauseCallback) {
    pauseCallback();
    pauseCallback = null;
  }
}

function waitWhilePaused() {
  return new Promise(resolve => {
    if (!isPaused) resolve();
    else pauseCallback = resolve;
  });
}

// NEW: Get time left in seconds (used to decide if final item fits)
function getGameTimeRemaining() {
  return timeLeft;
}

// NEW: Extend the timer internally (used to ensure last item shows fully)
function extendGameTimer(extraSeconds) {
  timeLeft += extraSeconds;
}

// Expose functions globally
window.startGameTimer = startGameTimer;
window.stopGameTimer = stopGameTimer;
window.togglePauseTimer = togglePauseTimer;
window.waitWhilePaused = waitWhilePaused;
window.getGameTimeRemaining = getGameTimeRemaining;
window.extendGameTimer = extendGameTimer;