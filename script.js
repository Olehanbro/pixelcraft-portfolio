const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const reveals = [...document.querySelectorAll(".reveal")];
const counters = [...document.querySelectorAll("[data-count]")];
const sliders = [...document.querySelectorAll("[data-slider]")];
const magneticItems = [...document.querySelectorAll(".magnetic")];
const cardStage = document.querySelector(".card-stage");

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  header?.classList.toggle("menu-visible", document.body.classList.contains("menu-open"));
  menuToggle.setAttribute("aria-label", document.body.classList.contains("menu-open") ? "Close menu" : "Open menu");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    header?.classList.remove("menu-visible");
    menuToggle?.setAttribute("aria-label", "Open menu");
  });
});

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    form.classList.add("submitted");
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
  element.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  revealObserver.observe(element);
});

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count || 0);
      const start = performance.now();
      const duration = 1400;

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
  { threshold: 0.55 }
);

counters.forEach(counter => counterObserver.observe(counter));

sliders.forEach(slider => {
  const track = slider.querySelector(".testimonial-track");
  const cards = [...slider.querySelectorAll(".testimonial-card")];
  const next = slider.querySelector("[data-next]");
  const prev = slider.querySelector("[data-prev]");
  let active = 0;

  const scrollToCard = index => {
    if (!track || cards.length === 0) return;
    active = (index + cards.length) % cards.length;
    track.scrollTo({ left: cards[active].offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  next?.addEventListener("click", () => scrollToCard(active + 1));
  prev?.addEventListener("click", () => scrollToCard(active - 1));

  window.setInterval(() => scrollToCard(active + 1), 5200);
});

magneticItems.forEach(item => {
  item.addEventListener("pointermove", event => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.1}px, ${y * 0.14}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

if (cardStage) {
  window.addEventListener("pointermove", event => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 6;
    cardStage.style.marginLeft = `${x}px`;
    cardStage.style.marginBottom = `${y}px`;
  }, { passive: true });
}
