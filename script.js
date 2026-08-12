const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const revealItems = [...document.querySelectorAll(".reveal-up, .reveal-down, .reveal-zoom")];
const magneticItems = [...document.querySelectorAll(".magnetic")];
const counters = [...document.querySelectorAll("[data-count]")];
const sliders = [...document.querySelectorAll("[data-slider]")];

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-label", "Відкрити меню");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 5, 4) * 75}ms`;
  revealObserver.observe(item);
});

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count || "0");
      const start = performance.now();
      const duration = 1300;

      const tick = (now) => {
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

counters.forEach((counter) => counterObserver.observe(counter));

sliders.forEach((slider) => {
  const track = slider.querySelector(".review-track");
  const cards = [...slider.querySelectorAll(".review-card")];
  const next = slider.querySelector("[data-next]");
  const prev = slider.querySelector("[data-prev]");
  let active = 0;

  const moveTo = (index) => {
    if (!track || cards.length === 0) return;
    active = (index + cards.length) % cards.length;
    track.scrollTo({
      left: cards[active].offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  };

  next?.addEventListener("click", () => moveTo(active + 1));
  prev?.addEventListener("click", () => moveTo(active - 1));
  window.setInterval(() => moveTo(active + 1), 5400);
});

magneticItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.08}px, ${y * 0.1}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});
