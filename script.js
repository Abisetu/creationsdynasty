// 3D Parallax Background Effect
document.addEventListener("mousemove", (event) => {
    let x = (event.clientX / window.innerWidth - 0.5) * 10;
    let y = (event.clientY / window.innerHeight - 0.5) * 10;

    document.querySelector(".background").style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('.hidden');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Trigger on load as well

// Popup Contact Form Logic
const openFormBtn = document.getElementById("openFormBtn");
const contactPopup = document.getElementById("contactPopup");
const closePopupBtn = document.getElementById("closePopupBtn");

if (openFormBtn && contactPopup && closePopupBtn) {
    openFormBtn.addEventListener("click", () => {
        contactPopup.style.display = "flex";
    });

    closePopupBtn.addEventListener("click", () => {
        contactPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === contactPopup) {
            contactPopup.style.display = "none";
        }
    });
}
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openFormBtn');
    const popup = document.getElementById('contactPopup');
    const closeBtn = document.getElementById('closePopupBtn');
  
    // Open popup on button click
    openBtn.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
  
    // Close popup on close button click
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    // Close popup if clicking outside the popup content
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  
    // Scroll animation for About Us, Contact Us, and Social Section
    const sections = document.querySelectorAll('.about-us, .contact-us, .social-section');
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    sections.forEach(section => observer.observe(section));
  });
  document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.getElementById("closePopupBtn");
    const popup = document.getElementById("contactPopup");
  
    openBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });
  
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // Close popup on clicking outside the form
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  

