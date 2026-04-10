// TAB SYSTEM
function openTab(event, tabId) {
  let contents = document.querySelectorAll(".tab-content");
  let buttons = document.querySelectorAll(".tab-btn");

  contents.forEach(c => c.classList.remove("active"));
  buttons.forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}

// COUNTDOWN (April 19 meet)
const meetDate = new Date("April 19, 2026 08:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = meetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h until next meet`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
