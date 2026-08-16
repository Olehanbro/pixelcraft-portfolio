const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-label", "Відкрити меню");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  },
  { passive: true }
);

const revealItems = [...document.querySelectorAll(".reveal-up")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px" }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 5, 4) * 55}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
