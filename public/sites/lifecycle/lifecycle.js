const header = document.querySelector("[data-lc-header]");
const menu = document.querySelector("[data-lc-menu]");
const menuToggle = document.querySelector("[data-lc-menu-toggle]");
const revealItems = [...document.querySelectorAll(".reveal")];

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-label", "Open menu");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  },
  { passive: true }
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -70px" }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
  revealObserver.observe(item);
});
