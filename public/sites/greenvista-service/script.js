const menuButton = document.querySelector("[data-menu-toggle]");

menuButton?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll("[data-menu] a").forEach((link) => {
  link.addEventListener("click", () => document.body.classList.remove("menu-open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal-up").forEach((element) => observer.observe(element));
