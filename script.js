const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const reveals = document.querySelectorAll(".reveal");
const slider = document.querySelector("[data-slider]");

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  header?.classList.toggle("menu-visible", document.body.classList.contains("menu-open"));
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;
  revealObserver.observe(element);
});

if (slider) {
  const slides = [...slider.querySelectorAll(".testimonial")];
  const dots = [...slider.querySelectorAll(".slider-dots button")];
  let active = 0;

  const showSlide = next => {
    active = next;
    slides.forEach((slide, index) => slide.classList.toggle("active", index === active));
    dots.forEach((dot, index) => dot.classList.toggle("active", index === active));
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  window.setInterval(() => showSlide((active + 1) % slides.length), 4200);
}
