function openInvitation() {
  const home = document.getElementById('home');
  const envelope = document.getElementById('envelope');
  const invitation = document.getElementById('invitation');

  // Open envelope
  envelope.classList.add('open');

  // Hide home after envelope animation
  setTimeout(() => {
    home.classList.add('hide');
  }, 800);

  // Show invitation
  setTimeout(() => {
    invitation.classList.add('show');
  }, 1600);
}

function toggleItem(element) {
  element.parentElement.classList.toggle('active');
}
// Countdown Timer
function startCountdown() { 
  const weddingDate = new Date("July 25, 2026 00:00:00").getTime();

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) { 
      document.querySelector('.countdown').innerHTML = `
        <h3>مبروك! اليوم هو يوم الزفاف 💍</h3>
      `;
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);
}  
window.onload = startCountdown;
document.getElementById("message").value="";