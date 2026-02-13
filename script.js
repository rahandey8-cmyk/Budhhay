// LOVE START DATE (08 March 2025)
const startDate = new Date("2025-03-08T00:00:00");

// Envelope Open Function
function openEnvelope() {
  document.getElementById("envelopeScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  // Play music after user interaction (required for mobile autoplay rules)
  const music = document.getElementById("bgMusic");
  music.play();
}

// Live Love Timer
function updateLoveTime() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);

  document.getElementById("loveTime").innerHTML =
    weeks + " weeks, " +
    days + " days, " +
    hours + " hours, " +
    minutes + " minutes, " +
    seconds + " seconds with Babeyy ❤️";
}

setInterval(updateLoveTime, 1000);

// Yes/No Game (Mobile Friendly)
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = "I knew it, Babeyy 💖";
});

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random() * 100 + "px";
                       }
