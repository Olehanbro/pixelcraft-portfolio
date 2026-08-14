const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const dropdown = document.querySelector("[data-dropdown]");
const dropdownToggle = document.querySelector("[data-dropdown-toggle]");
const revealItems = [...document.querySelectorAll(".reveal-up, .reveal-down, .reveal-zoom")];
const counters = [...document.querySelectorAll("[data-count]")];
const faqItems = [...document.querySelectorAll(".faq-item")];
const sliders = [...document.querySelectorAll("[data-slider]")];
const heroStage = document.querySelector(".hero-stage");

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

dropdownToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = dropdown?.classList.toggle("is-open");
  dropdownToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

document.addEventListener("click", (event) => {
  if (!dropdown?.contains(event.target)) {
    dropdown?.classList.remove("is-open");
    dropdownToggle?.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -40px" }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
  revealObserver.observe(item);
});

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count || "0");
      const suffix = target === 95 ? "%" : "+";
      const start = performance.now();
      const duration = 1400;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(target * eased).toLocaleString()}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.45 }
);

counters.forEach((counter) => counterObserver.observe(counter));

faqItems.forEach((item) => {
  const button = item.querySelector("button");
  button?.addEventListener("click", () => {
    faqItems.forEach((other) => {
      if (other !== item) other.classList.remove("is-open");
    });
    item.classList.toggle("is-open");
  });
});

sliders.forEach((slider) => {
  const track = slider.querySelector("[data-slider-track]");
  const cards = [...slider.querySelectorAll(".story-card")];
  const prev = slider.querySelector("[data-prev]");
  const next = slider.querySelector("[data-next]");
  let index = 0;

  const moveTo = (nextIndex) => {
    if (!track || cards.length === 0) return;
    index = (nextIndex + cards.length) % cards.length;
    track.scrollTo({
      left: cards[index].offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  };

  prev?.addEventListener("click", () => moveTo(index - 1));
  next?.addEventListener("click", () => moveTo(index + 1));
  window.setInterval(() => moveTo(index + 1), 6200);
});

heroStage?.addEventListener("pointermove", (event) => {
  const rect = heroStage.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  heroStage.style.transform = `perspective(1200px) rotateX(${y * -2.4}deg) rotateY(${x * 3}deg)`;
});

heroStage?.addEventListener("pointerleave", () => {
  heroStage.style.transform = "";
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    if (input) input.value = "";
  });
});
