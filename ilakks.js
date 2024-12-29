document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll functionality
    const navLinks = document.querySelectorAll('.nav-container .links a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Button alert
    document.querySelector('.btn button').addEventListener('click', function() {
      alert('Thanks for considering me! Let\'s connect soon.');
    });
  });
  
  
