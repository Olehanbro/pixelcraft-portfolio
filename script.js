const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const reveals = [...document.querySelectorAll(".reveal")];
const counters = [...document.querySelectorAll("[data-count]")];
const slider = document.querySelector("[data-slider]");
const magneticItems = [...document.querySelectorAll(".magnetic")];

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  header?.classList.toggle("menu-visible", document.body.classList.contains("menu-open"));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    header?.classList.remove("menu-visible");
  });
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
  revealObserver.observe(element);
});

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count || 0);
      const start = performance.now();
      const duration = 1300;

      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(target * eased).toString();
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.6 }
);

counters.forEach(counter => counterObserver.observe(counter));

if (slider) {
  const slides = [...slider.querySelectorAll(".testimonial-card")];
  let active = 0;

  const show = next => {
    active = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle("active", index === active));
  };

  slider.querySelector("[data-next]")?.addEventListener("click", () => show(active + 1));
  slider.querySelector("[data-prev]")?.addEventListener("click", () => show(active - 1));
  window.setInterval(() => show(active + 1), 4800);
}

magneticItems.forEach(item => {
  item.addEventListener("pointermove", event => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});
