const header = document.querySelector("[data-op-header]");
const menuToggle = document.querySelector("[data-op-menu-toggle]");
const menu = document.querySelector("[data-op-menu]");
const reveals = [...document.querySelectorAll(".reveal")];
const accordionItems = [...document.querySelectorAll("[data-op-accordion] article")];

const closeMenu = () => {
  document.body.classList.remove("op-menu-open");
  menuToggle?.setAttribute("aria-label", "Open menu");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("op-menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
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

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -70px" }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 5, 4) * 64}ms`;
  revealObserver.observe(item);
});

accordionItems.forEach((item) => {
  item.querySelector("button")?.addEventListener("click", () => {
    accordionItems.forEach((entry) => entry.classList.toggle("is-open", entry === item));
  });
});
