// script.js

// Smooth scroll to sections when clicking anchor links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
