// ======================================
// LOVE START DATE (08 March 2025)
// ======================================
const startDate = new Date("2025-03-08T00:00:00");

// ======================================
// ENVELOPE OPEN (IMAGE VERSION - SMOOTH)
// ======================================
function openEnvelope() {
  const envelope = document.querySelector(".envelopeImage");
  const envelopeScreen = document.getElementById("envelopeScreen");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");

  // Small visual tap feedback
  if (envelope) {
    envelope.style.transform = "scale(1.08)";
    envelope.style.opacity = "0.9";
  }

  // Play music (mobile safe after tap)
  if (music) {
    music.play().catch(() => {});
  }

  // Smooth fade transition
  setTimeout(() => {
    envelopeScreen.classList.add("fadeOut");

    setTimeout(() => {
      envelopeScreen.style.display = "none";
      mainContent.style.display = "block";

      // Start typing letter after reveal
      startTypingLetter();

      // Start floating hearts after reveal (better performance)
      startHearts();

    }, 900);
  }, 400);
}

// ======================================
// ELEGANT LOVE TIMER (CLEAN FORMAT)
// ======================================
function updateLoveTime() {
  const now = new Date();
  const diff = now - startDate;

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const timerElement = document.getElementById("loveTime");

  if (timerElement) {
    timerElement.innerHTML =
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds with Babeyy ❤️`;
  }
}

// Start timer immediately + every second
updateLoveTime();
setInterval(updateLoveTime, 1000);

// ======================================
// CINEMATIC TYPING LETTER
// ======================================
const letterText = `My Babeyy,

From the moment you came into my life on 08.03.2025,
every day started feeling softer, warmer, and more meaningful.

Even though we are far away,
my heart stays with you in every second, every minute, every breath.

This little website is not just code,
it is a piece of my love, built only for you.

You are my peace, my comfort, and my forever person.

— Yours, always. ❤️`;

let letterIndex = 0;
let typingStarted = false;

function startTypingLetter() {
  if (typingStarted) return;
  typingStarted = true;
  typeLetter();
}

function typeLetter() {
  const typedElement = document.getElementById("typedLetter");
  if (!typedElement) return;

  if (letterIndex < letterText.length) {
    typedElement.innerHTML += letterText.charAt(letterIndex);
    letterIndex++;
    setTimeout(typeLetter, 32); // smooth cinematic speed
  }
}

// ======================================
// YES / NO LOVE GAME (MOBILE FRIENDLY)
// ======================================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

if (yesBtn && response) {
  yesBtn.addEventListener("click", () => {
    response.innerHTML = "I knew it, Babeyy 💖 Forever us.";
    triggerHeartBurst(); // bonus romantic effect
  });
}

function moveNoButton() {
  if (!noBtn) return;

  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 80;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Works on mobile + desktop
if (noBtn) {
  noBtn.addEventListener("touchstart", moveNoButton);
  noBtn.addEventListener("mouseover", moveNoButton);
}

// ======================================
// FLOATING HEARTS (PERFORMANCE OPTIMIZED)
// ======================================
let heartsInterval = null;

function startHearts() {
  if (heartsInterval) return;

  heartsInterval = setInterval(createHeart, 600);
}

function createHeart() {
  const heartsContainer = document.querySelector(".hearts");
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 18) + "px";
  heart.style.animationDuration = (6 + Math.random() * 6) + "s";

  heartsContainer.appendChild(heart);

  // Remove to prevent memory lag on mobile
  setTimeout(() => {
    heart.remove();
  }, 12000);
}

// ======================================
// SECRET MESSAGE SCROLL REVEAL
// ======================================
let secretShown = false;

window.addEventListener("scroll", () => {
  const secretSection = document.getElementById("secretSection");
  if (!secretSection || secretShown) return;

  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight - 120) {
    secretSection.classList.add("show");
    secretShown = true;
    triggerHeartBurst(); // romantic ending effect
  }
});

// ======================================
// EXTRA HEART BURST (ROMANTIC EFFECT)
// ======================================
function triggerHeartBurst() {
  const heartsContainer = document.querySelector(".hearts");
  if (!heartsContainer) return;

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 80);
  }
      }
