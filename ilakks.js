document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-container .links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href'); 
        const targetSection = document.querySelector(targetId);

        if (window.location.hash === targetId) {
          
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
          });
        }
      });
    });
  
   
    const hireButton = document.querySelector('.btn button');
    if (hireButton) {
      hireButton.addEventListener('click', function() {
        alert('Thanks for considering me! Let\'s connect soon.');
      });
    }
  });
  
