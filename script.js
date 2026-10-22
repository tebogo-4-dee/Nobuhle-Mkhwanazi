// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Cursor spotlight
const glow = document.getElementById("glow");
window.addEventListener("pointermove", (e) => {
  glow.style.setProperty("--x", e.clientX + "px");
  glow.style.setProperty("--y", e.clientY + "px");
});

// Highlight the nav link of the section currently in view
const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((s) => observer.observe(s));
