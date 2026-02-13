// LOVE START DATE (08 March 2025)
const startDate = new Date("2025-03-08T00:00:00");

// ENVELOPE OPEN (Mobile Friendly + Music Play)
function openEnvelope() {
  const envelopeScreen = document.getElementById("envelopeScreen");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");

  // Hide envelope and show main content smoothly
  envelopeScreen.style.display = "none";
  mainContent.style.display = "block";

  // Play music after user interaction (required for mobile browsers)
  if (music) {
    music.play().catch(() => {
      console.log("Music autoplay blocked until interaction.");
    });
  }
}

// IMPROVED LOVE TIMER (Clean Format)
function updateLoveTime() {
  const now = new Date();
  const diff = now - startDate;

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const timerElement = document.getElementById("loveTime");

  if (timerElement) {
    timerElement.innerHTML =
      days + " days, " +
      hours + " hours, " +
      minutes + " minutes, " +
      seconds + " seconds with Babeyy ❤️";
  }
}

// Update timer every second
setInterval(updateLoveTime, 1000);
updateLoveTime(); // run immediately on load


// YES / NO GAME (Mobile + Desktop)
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

if (yesBtn && response) {
  yesBtn.addEventListener("click", () => {
    response.innerHTML = "I knew it, Babeyy 💖 Forever us.";
  });
}

function moveNoButton() {
  if (!noBtn) return;

  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 50;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Works for both mobile touch and mouse
if (noBtn) {
  noBtn.addEventListener("touchstart", moveNoButton);
  noBtn.addEventListener("mouseover", moveNoButton);
}


// FLOATING HEARTS ACROSS FULL SCREEN (Smooth & Random)
function createHeart() {
  const heartsContainer = document.querySelector(".hearts");
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Random animation duration (for natural movement)
  heart.style.animationDuration = (6 + Math.random() * 6) + "s";

  // Random size for depth effect
  heart.style.fontSize = (14 + Math.random() * 22) + "px";

  heartsContainer.appendChild(heart);

  // Remove heart after animation to prevent lag
  setTimeout(() => {
    heart.remove();
  }, 12000);
}

// Generate hearts continuously
setInterval(createHeart, 400);
