const brandConfig = {
  name: "PixelCraft",
  email: "sashamischishin2005@gmail.com",
  github: "https://github.com/Olehanbro",
  ownerPortrait: {
    // Replace this path with a real portrait later, for example: "/assets/owner-portrait.jpg".
    image: "",
    alt: "Portrait of the portfolio owner"
  }
};

const fieldFilters = [
  { label: "Усі", value: "all" },
  { label: "Люкс / ритейл", value: "luxury-retail" },
  { label: "Право", value: "law" },
  { label: "IT / SaaS", value: "it-saas" },
  { label: "CSS", value: "css" },
  { label: "Консалтинг", value: "consulting" },
  { label: "Медицина", value: "medicine" }
];

const fieldCopy = {
  "luxury-retail": "Бутик-ритейл, fashion і преміальні e-commerce вітрини з фокусом на образ, довіру й акуратну покупку.",
  law: "Поки немає окремого юридичного кейсу. Сфера лишається в каталозі як майбутній напрям.",
  "it-saas": "AI, SaaS, growth-платформи та технологічні продукти, де важливі ясність, довіра й пояснення складної цінності.",
  css: "Проєкти, де сильна візуальна система та ручна front-end подача тримають перше враження.",
  consulting: "Стратегія, бренд-системи, AI-консалтинг і корпоративні лендинги для експертних команд.",
  medicine: "Поки немає окремого медичного кейсу. Сфера лишається неактивною до появи релевантної роботи."
};

const projects = [
  {
    slug: "kursor-strategy",
    title: "Kursor Strategy",
    category: "Стратегічний консалтинг",
    fields: ["consulting", "css"],
    favorite: true,
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    description:
      "Оригінальний корпоративний лендинг для студії стратегічного консалтингу: синій акцент, сильний hero, послуги, процес, кейси та відгуки.",
    caseSummary:
      "Кейс демонструє окремий консультаційний бренд із власною типографікою, абстрактною hero-композицією, структурою послуг і прямим шляхом до розмови.",
    url: "https://kursor-strategy.vercel.app/",
    screenshots: ["/assets/portfolio/kursor-strategy-og.png", "/assets/portfolio/kursor-strategy-home.png"]
  },
  {
    slug: "vireon",
    title: "Vireon",
    category: "AI-консалтинг",
    fields: ["it-saas", "consulting"],
    favorite: true,
    technologies: ["Landing", "Responsive", "Vercel"],
    description:
      "Преміальний сайт для science та AI-консалтингу з кінематографічними biotech-візуалами, адаптивними секціями й polished service storytelling.",
    caseSummary:
      "Сайт для AI-консалтингу з акцентом на довіру до складної експертизи, преміальну подачу і виразні технологічні прев'ю.",
    url: "https://vireon-drab.vercel.app/",
    screenshots: ["/assets/portfolio/vireon-live-og.png", "/assets/portfolio/vireon-hero.png", "/assets/vireon-hero.png"]
  },
  {
    slug: "lumora",
    title: "Lumora",
    category: "AI-стратегія",
    fields: ["it-saas", "consulting"],
    favorite: true,
    technologies: ["Landing", "Strategy", "Responsive"],
    description:
      "Концепт AI-стратегії, автоматизації та аналітичного консалтингу для команд, яким потрібні практичний рух і зрозуміліші системи.",
    caseSummary:
      "Лендинг пояснює AI-стратегію, автоматизацію й аналітику через спокійну структуру, чіткі блоки цінності та live-подачу.",
    url: "https://lumora-xi-two.vercel.app/",
    screenshots: ["/assets/portfolio/lumora-live-og.png", "/assets/portfolio/lumora-og.png"]
  },
  {
    slug: "aureon",
    title: "Aureon",
    category: "Будівельний сервіс",
    fields: ["css"],
    favorite: true,
    technologies: ["Landing", "Brand", "Responsive"],
    description:
      "Сайт для construction та industrial delivery з упевненим позиціонуванням, чіткою подачею і преміальним візуальним ритмом.",
    caseSummary:
      "Індустріальний сайт із сильною візуальною впевненістю, великими прев'ю та прямим live-посиланням без додаткових вигаданих метрик.",
    url: "https://aureon-liard.vercel.app/",
    screenshots: ["/assets/portfolio/aureon-og.png", "/assets/portfolio/vireon-hero.png"]
  },
  {
    slug: "auralis",
    title: "Auralis",
    category: "Бренд-системи",
    fields: ["consulting", "css"],
    favorite: true,
    technologies: ["Brand", "Landing", "Responsive"],
    description:
      "Спокійна digital brand system із модульним повідомленням, адаптивними секціями та polished consultancy-style презентацією.",
    caseSummary:
      "Бренд-система у форматі сайту: модульне повідомлення, стримана композиція та адаптивні секції для консультаційної подачі.",
    url: "https://auralis-lac.vercel.app/",
    screenshots: ["/assets/portfolio/auralis-live-og.png", "/assets/portfolio/auralis-og.png"]
  },
  {
    slug: "mentora",
    title: "Mentora",
    category: "Growth-платформа",
    fields: ["it-saas"],
    favorite: true,
    technologies: ["Landing", "Growth", "Responsive"],
    description:
      "Growth-focused landing page із ясним повідомленням, впевненими секціями та approachable conversion flow.",
    caseSummary:
      "Growth-focused сторінка з простим шляхом до дії, чітким позиціонуванням і дружньою подачею без зайвої складності.",
    url: "https://mentora-sigma-brown.vercel.app/",
    screenshots: ["/assets/portfolio/mentora-live-og.png", "/assets/portfolio/mentora-hero.jpeg"]
  },
  {
    slug: "aurelia",
    title: "Aurelia",
    category: "Quiet luxury boutique",
    fields: ["luxury-retail"],
    favorite: true,
    technologies: ["E-commerce", "Fashion", "Responsive"],
    description:
      "Fashion storefront with refined typography, boutique product sections, lookbook feel, and soft luxury mood.",
    caseSummary:
      "Fashion storefront із бутик-настроєм, refined typography, product sections і візуальним ритмом для преміального ритейлу.",
    url: "https://aurelia-xi-ten.vercel.app/",
    screenshots: ["/assets/portfolio/aurelia-og.png", "/assets/portfolio/liora-banner.jpg"]
  },
  {
    slug: "liora",
    title: "Liora",
    category: "Fashion e-commerce",
    fields: ["luxury-retail"],
    favorite: false,
    technologies: ["E-commerce", "Catalog", "Responsive"],
    description:
      "Modern e-commerce homepage for fashion categories, promotional banners, and shopping-first navigation.",
    caseSummary:
      "E-commerce homepage для fashion-категорій із банерами, навігацією для покупки та зрозумілою промо-структурою.",
    url: "https://liora.vercel.app/",
    screenshots: ["/assets/portfolio/liora-banner.jpg", "/assets/portfolio/aurelia-og.png"]
  }
];

const app = document.querySelector("#app");
const footer = document.querySelector("[data-footer]");
const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");

let activeField = "all";

const fieldCount = (field) => (field === "all" ? projects.length : projects.filter((project) => project.fields.includes(field)).length);
const projectBySlug = (slug) => projects.find((project) => project.slug === slug);
const projectUrl = (project) => `/case/${project.slug}`;
const fieldLabel = (field) => fieldFilters.find((item) => item.value === field)?.label || field;
const currentPath = () => window.location.pathname.replace(/\/$/, "") || "/";

const createPreviewImage = (src, title, index) => `
  <img src="${src}" alt="${title} preview ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" />
`;

const badgeList = (items) => items.map((item) => `<span>${item}</span>`).join("");

const renderHero = () => `
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-banner">
      <div class="hero-copy reveal-up">
        <p class="hero-kicker">Portfolio N° 01 · Web development · 2026</p>
        <h1 id="hero-title">Сайти, що виглядають впевнено.</h1>
        <a class="primary-link" href="/projects" data-link>Дивитися роботи</a>
      </div>
      <div class="hero-art reveal-up" aria-label="Місце для портретного фото власника">
        <figure class="portrait-frame" data-owner-portrait>
          <div class="portrait-placeholder">
            <span>Фото</span>
            <small>майбутній портрет</small>
          </div>
        </figure>
      </div>
    </div>
  </section>
`;

const renderProjectCard = (project, { featured = false, index = 0 } = {}) => `
  <article
    class="project-card reveal-up ${featured ? "featured" : ""}"
    data-card-link="${projectUrl(project)}"
    role="link"
    tabindex="0"
    aria-label="Відкрити кейс ${project.title}"
  >
    <div class="project-gallery">
      <a class="project-main-image" href="${projectUrl(project)}" data-link aria-label="Відкрити кейс ${project.title}">
        ${createPreviewImage(project.screenshots[0], project.title, index)}
      </a>
      <div class="project-thumbs" aria-label="${project.title} screenshots">
        ${project.screenshots.slice(0, 3).map((src, imageIndex) => createPreviewImage(src, project.title, imageIndex)).join("")}
      </div>
    </div>
    <div class="project-info">
      <div class="project-title-row">
        <div>
          <span>${project.category}</span>
          <h3>${project.title}</h3>
        </div>
        <a class="visit-button" href="${projectUrl(project)}" data-link aria-label="Відкрити кейс ${project.title}">↗</a>
      </div>
      <p>${project.description}</p>
      <div class="project-meta">
        <div>${badgeList(project.technologies)}</div>
        <a href="${projectUrl(project)}" data-link>Кейс</a>
      </div>
    </div>
  </article>
`;

const renderHome = () => {
  const favorites = projects.filter((project) => project.favorite).slice(0, 7);

  app.innerHTML = `
    ${renderHero()}
    <section class="section-block favorites" aria-labelledby="favorites-title">
      <div class="section-heading reveal-up">
        <p class="eyebrow">Улюблені роботи</p>
        <h2 id="favorites-title">Добірка сайтів, що найкраще показують діапазон портфоліо.</h2>
        <a class="text-link" href="/projects" data-link>Усі проєкти</a>
      </div>
      <div class="favorite-grid">
        ${favorites.map((project, index) => renderProjectCard(project, { featured: index === 0, index })).join("")}
      </div>
    </section>
  `;
};

const renderCatalog = () => {
  const visibleProjects = activeField === "all" ? projects : projects.filter((project) => project.fields.includes(activeField));

  app.innerHTML = `
    <section class="catalog-hero" aria-labelledby="catalog-title">
      <p class="hero-kicker">Catalog · ${projects.length} live projects</p>
      <h1 id="catalog-title">Усі проєкти</h1>
      <p>Повний каталог робіт PixelCraft із фільтрами за сферами. Порожні напрями залишені нейтральними, без вигаданих кейсів.</p>
    </section>
    <section class="catalog-section" aria-label="Фільтри й проєкти">
      <div class="catalog-toolbar">
        <div class="filter-bar" aria-label="Фільтри за сферами">
          ${fieldFilters
            .map((field) => {
              const count = fieldCount(field.value);
              const disabled = field.value !== "all" && count === 0;
              return `<button class="filter-button" type="button" data-field="${field.value}" aria-pressed="${
                field.value === activeField
              }" ${disabled ? "disabled" : ""}>${field.label}<span>${count}</span></button>`;
            })
            .join("")}
        </div>
        <p>${visibleProjects.length} з ${projects.length} проєктів</p>
      </div>
      ${
        visibleProjects.length
          ? `<div class="project-grid">${visibleProjects.map((project, index) => renderProjectCard(project, { index })).join("")}</div>`
          : `<div class="empty-state"><h2>У цій сфері поки немає роботи.</h2><p>Коли з'явиться релевантний кейс, він буде доданий у цей каталог через дані проєкту.</p></div>`
      }
    </section>
  `;
};

const renderCase = (slug) => {
  const project = projectBySlug(slug);

  if (!project) {
    app.innerHTML = `
      <section class="catalog-hero">
        <p class="hero-kicker">404 · case not found</p>
        <h1>Кейс не знайдено</h1>
        <a class="primary-link" href="/projects" data-link>До каталогу</a>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <article class="case-page">
      <section class="case-hero" aria-labelledby="case-title">
        <div class="case-hero-copy reveal-up">
          <p class="hero-kicker">Case · ${project.category}</p>
          <h1 id="case-title">${project.title}</h1>
          <p>${project.description}</p>
          <div class="case-actions">
            <a class="primary-link" href="${project.url}" target="_blank" rel="noreferrer">Live сайт</a>
            <a class="ghost-link strong" href="/projects" data-link>Каталог</a>
          </div>
        </div>
        <div class="case-hero-media reveal-up">
          <img src="${project.screenshots[0]}" alt="${project.title} hero preview" />
        </div>
      </section>
      <section class="case-details">
        <div class="case-text reveal-up">
          <p class="eyebrow">Опис</p>
          <h2>Що показує цей кейс</h2>
          <p>${project.caseSummary}</p>
        </div>
        <aside class="case-aside reveal-up">
          <div>
            <span>Сфери</span>
            <p>${project.fields.map(fieldLabel).join(" · ")}</p>
          </div>
          <div>
            <span>Технології / формат</span>
            <p>${project.technologies.join(" · ")}</p>
          </div>
          <div>
            <span>Посилання</span>
            <a href="${project.url}" target="_blank" rel="noreferrer">${project.url.replace("https://", "")}</a>
          </div>
        </aside>
      </section>
      <section class="case-preview-section" aria-label="${project.title} previews">
        <p class="eyebrow">Прев'ю</p>
        <div class="case-preview-grid">
          ${project.screenshots.map((src, index) => `<img src="${src}" alt="${project.title} preview ${index + 1}" loading="lazy" />`).join("")}
        </div>
      </section>
    </article>
  `;
};

const renderFooter = () => {
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="brand footer-logo" href="/" data-link data-brand-name>${brandConfig.name}</a>
        <p>Портфоліо веброзробника з добіркою живих сайтів, каталогом робіт і case-сторінками.</p>
      </div>
      <div class="footer-cta">
        <span>— Співпраця</span>
        <h2>Є ідея для наступної роботи?</h2>
        <a class="primary-link" href="mailto:${brandConfig.email}">Написати</a>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="/" data-link>Головна</a>
        <a href="/projects" data-link>Усі проєкти</a>
      </nav>
      <div class="footer-links" aria-label="Contact links">
        <a href="mailto:${brandConfig.email}">Email</a>
        <a href="${brandConfig.github}" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <p class="footer-copy">© 2026. Selected websites and live project links.</p>
    </div>
    <div class="footer-word" aria-hidden="true">MYSHCHYSHYN</div>
  `;
};

const renderBrand = () => {
  document.querySelectorAll("[data-brand-name]").forEach((item) => {
    item.textContent = brandConfig.name;
  });

  const ownerPortrait = document.querySelector("[data-owner-portrait]");
  if (ownerPortrait && brandConfig.ownerPortrait.image) {
    ownerPortrait.innerHTML = `<img src="${brandConfig.ownerPortrait.image}" alt="${brandConfig.ownerPortrait.alt}" />`;
  }
};

const observeRevealItems = () => {
  const revealItems = [...document.querySelectorAll(".reveal-up")].filter((item) => !item.classList.contains("is-visible"));

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
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
    revealObserver.observe(item);
  });
};

const setActiveNav = () => {
  const path = currentPath();
  document.querySelectorAll("[data-link]").forEach((link) => {
    const href = new URL(link.getAttribute("href"), window.location.origin).pathname.replace(/\/$/, "") || "/";
    link.classList.toggle("is-active", href === path);
  });
};

const renderRoute = () => {
  const path = currentPath();
  const caseMatch = path.match(/^\/case\/([^/]+)$/);

  if (path === "/projects") {
    renderCatalog();
  } else if (caseMatch) {
    renderCase(caseMatch[1]);
  } else {
    activeField = "all";
    renderHome();
  }

  renderFooter();
  renderBrand();
  setActiveNav();
  observeRevealItems();
  document.body.classList.remove("menu-open");
  window.scrollTo(0, 0);

  if (window.location.hash) {
    requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
  }
};

const navigate = (href) => {
  const url = new URL(href, window.location.origin);
  history.pushState({}, "", `${url.pathname}${url.hash}`);
  renderRoute();
};

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-link]");
  if (!link) return;

  const url = new URL(link.href);
  if (url.origin !== window.location.origin) return;
  event.preventDefault();
  navigate(`${url.pathname}${url.hash}`);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-field]");
  if (!button || button.disabled) return;
  activeField = button.dataset.field || "all";
  renderCatalog();
  observeRevealItems();
});

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-card-link]");
  if (!card || event.target.closest("a, button")) return;
  navigate(card.dataset.cardLink);
});

document.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-card-link]");
  if (!card || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  navigate(card.dataset.cardLink);
});

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

window.addEventListener("popstate", renderRoute);
window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  },
  { passive: true }
);

renderRoute();
