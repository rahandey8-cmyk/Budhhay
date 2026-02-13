// ===============================
// LOVE START DATE (08 March 2025)
// ===============================
const startDate = new Date("2025-03-08T00:00:00");

// ===============================
// ENVELOPE OPEN FUNCTION (CINEMATIC + MOBILE SAFE)
// ===============================
function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const envelopeScreen = document.getElementById("envelopeScreen");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");

  // Open flap animation
  envelope.classList.add("open");

  // Play music after user tap (required for mobile)
  if (music) {
    music.play().catch(() => {});
  }

  // Fade out envelope and reveal main site
  setTimeout(() => {
    envelopeScreen.classList.add("fadeOut");

    setTimeout(() => {
      envelopeScreen.style.display = "none";
      mainContent.style.display = "block";

      // Start typing letter AFTER content appears
      startTypingLetter();

    }, 1000);
  }, 800);
}

// ===============================
// LOVE TIMER (CLEAN + ELEGANT)
// ===============================
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

// Start timer immediately and update every second
updateLoveTime();
setInterval(updateLoveTime, 1000);

// ===============================
// TYPING LETTER EFFECT (CINEMATIC)
// ===============================
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
    setTimeout(typeLetter, 35); // typing speed (lower = faster)
  }
}

// ===============================
// YES / NO LOVE GAME (MOBILE + DESKTOP)
// ===============================
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

  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 80;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Works on both phone and laptop
if (noBtn) {
  noBtn.addEventListener("touchstart", moveNoButton);
  noBtn.addEventListener("mouseover", moveNoButton);
}

// ===============================
// FLOATING HEARTS (FULL SCREEN + SOFT)
// ===============================
function createHeart() {
  const heartsContainer = document.querySelector(".hearts");
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Random animation duration (natural floating)
  heart.style.animationDuration = (6 + Math.random() * 6) + "s";

  // Random size for depth effect
  heart.style.fontSize = (14 + Math.random() * 20) + "px";

  heartsContainer.appendChild(heart);

  // Remove after animation to prevent lag
  setTimeout(() => {
    heart.remove();
  }, 12000);
}

// Generate hearts continuously (smooth, not spammy)
setInterval(createHeart, 500);
