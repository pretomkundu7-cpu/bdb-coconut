const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".nav nav a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

const glow = document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("pointermove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}
