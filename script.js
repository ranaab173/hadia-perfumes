// Set the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Countdown Timer Logic
const launchDate = new Date("August 14, 2025 00:00:00").getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    countdownElement.innerHTML = `
        <div class="countdown-item">
            ${days < 10 ? '0' + days : days}<span>Days</span>
        </div>
        <div class="countdown-item">
            ${hours < 10 ? '0' + hours : hours}<span>Hours</span>
        </div>
        <div class="countdown-item">
            ${minutes < 10 ? '0' + minutes : minutes}<span>Minutes</span>
        </div>
        <div class="countdown-item">
            ${seconds < 10 ? '0' + seconds : seconds}<span>Seconds</span>
        </div>
    `;

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = `<p class="text-3xl text-green-400 font-bold">We are LIVE!</p>`;
    }
}

// Update every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately

// Form Submission Logic (Client-side only)
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    newsletterMessage.textContent = 'Thank you for subscribing! We will notify you soon.';
    newsletterMessage.classList.remove('hidden');
    newsletterMessage.classList.add('text-green-400');
    newsletterForm.reset(); // Clear the form
    setTimeout(() => {
        newsletterMessage.classList.add('hidden');
    }, 5000); // Hide message after 5 seconds
});

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    contactMessage.textContent = 'Your message has been sent! We will get back to you shortly.';
    contactMessage.classList.remove('hidden');
    contactMessage.classList.add('text-green-400');
    contactForm.reset(); // Clear the form
    setTimeout(() => {
        contactMessage.classList.add('hidden');
    }, 5000); // Hide message after 5 seconds
});
