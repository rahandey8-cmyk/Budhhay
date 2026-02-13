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

  // Tap feedback animation
  if (envelope) {
    envelope.style.transform = "scale(1.08)";
    envelope.style.opacity = "0.9";
  }

  // Play music (mobile safe after user interaction)
  if (music) {
    music.play().catch(() => {});
  }

  // Smooth transition
  setTimeout(() => {
    envelopeScreen.classList.add("fadeOut");

    setTimeout(() => {
      envelopeScreen.style.display = "none";
      mainContent.style.display = "block";

      // Start features after reveal
      startTypingLetter();
      startHearts();

    }, 900);
  }, 400);
}

// ======================================
// ELEGANT LOVE TIMER
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

// Start timer
updateLoveTime();
setInterval(updateLoveTime, 1000);

// ======================================
// CINEMATIC LETTER (TITLE + TYPING)
// ======================================
const letterTitle = "Happy Valentine’s Day my love ❤️";

const letterBody = `

On this special day, I just want you to know how much you truly mean to me 🥹💕
Every day with you feels like a beautiful dream, and I genuinely cherish every moment we share 💗

You are honestly one of the most precious things that ever happened to me 😁
No matter what the future brings, I feel calmer knowing that you are beside me, even from far away 🫂💝

Sometimes I really wonder how I got lucky enough to be with someone as kind, caring, and wonderful as you 😆
I love you so much, more than my words can properly explain ❤️

I adore everything about you…
your smile, your softness, the way you care about me,
and even the little things you do without realizing.

You mean the world to me 💗 and I truly cannot imagine my life without you 🥹

I want to spend my life cherishing you, supporting you,
and being there for you in every situation.

When you are sad, I want to be the one who comforts you.
When you are happy, I want to be the one who shares that happiness with you.

I promise to always be honest with you,
to be your safe place, your peace,
and your shoulder whenever you feel tired or overwhelmed.

I will always choose you, love you, and care for you sincerely 💝

With endless love,
Your bong 💌`;

let titleIndex = 0;
let bodyIndex = 0;
let typingStarted = false;

function startTypingLetter() {
  if (typingStarted) return;
  typingStarted = true;

  const typedElement = document.getElementById("typedLetter");
  if (!typedElement) return;

  // Create title element
  const titleElement = document.createElement("div");
  titleElement.className = "letterTitle";
  typedElement.appendChild(titleElement);

  typeTitle(titleElement);
}

function typeTitle(titleElement) {
  if (titleIndex < letterTitle.length) {
    titleElement.innerHTML += letterTitle.charAt(titleIndex);
    titleIndex++;
    setTimeout(() => typeTitle(titleElement), 50);
  } else {
    // After title finishes, start body typing
    const bodyElement = document.createElement("div");
    bodyElement.className = "letterBody";
    document.getElementById("typedLetter").appendChild(bodyElement);

    setTimeout(() => typeBody(bodyElement), 400);
  }
}

function typeBody(bodyElement) {
  if (bodyIndex < letterBody.length) {
    bodyElement.innerHTML += letterBody.charAt(bodyIndex);
    bodyIndex++;
    setTimeout(() => typeBody(bodyElement), 28);
  }
}

// ======================================
// YES / NO LOVE GAME
// ======================================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

if (yesBtn && response) {
  yesBtn.addEventListener("click", () => {
    response.innerHTML = "I knew it, Babeyy 💖 Forever us.";
    triggerHeartBurst();
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

if (noBtn) {
  noBtn.addEventListener("touchstart", moveNoButton);
  noBtn.addEventListener("mouseover", moveNoButton);
}

// ======================================
// FLOATING HEARTS (OPTIMIZED)
// ======================================
let heartsInterval = null;

function startHearts() {
  if (heartsInterval) return;
  heartsInterval = setInterval(createHeart, 600);
}

function createHeart() {
  const container = document.querySelector(".hearts");
  if (!container) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 18) + "px";
  heart.style.animationDuration = (6 + Math.random() * 6) + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
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
    triggerHeartBurst();
  }
});

// ======================================
// EXTRA HEART BURST (ROMANTIC CLIMAX)
// ======================================
function triggerHeartBurst() {
  for (let i = 0; i < 14; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 80);
  }
}
