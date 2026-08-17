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

const fieldDetails = {
  "luxury-retail": {
    title: "Люкс / Ритейл",
    text: "Вітрини для fashion, бутиків і преміальних продуктів, де продає не тиск, а атмосфера, довіра й акуратний шлях до покупки."
  },
  law: {
    title: "Право",
    text: "Напрям під майбутні юридичні кейси. Поки немає релевантної роботи, тому сфера лишається в каталозі нейтрально."
  },
  "it-saas": {
    title: "IT / SaaS",
    text: "Сайти для складних цифрових продуктів: AI, платформи, growth-сервіси й сервіси, які треба пояснити просто."
  },
  css: {
    title: "CSS",
    text: "Роботи, де фронтенд-подача тримає характер: типографіка, ритм, адаптивність, motion і точна композиція."
  },
  consulting: {
    title: "Консалтинг",
    text: "Експертні бренди, стратегічні студії й сервісні команди, яким потрібен сайт із ясним позиціонуванням."
  },
  medicine: {
    title: "Медицина",
    text: "Напрям під майбутні медичні сайти. Поки кейсів немає, без вигаданих прикладів і фальшивих історій."
  }
};

const projects = [
  {
    slug: "kursor-strategy",
    title: "Kursor Strategy",
    category: "Стратегічний консалтинг",
    fields: ["consulting", "css"],
    favorite: true,
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    year: "2026",
    description: "Корпоративний лендинг для студії стратегічного консалтингу: структура, послуги, процес і сильний перший екран без зайвого шуму.",
    caseSummary:
      "Кейс показує, як консультаційний бізнес може звучати впевнено: чітка пропозиція, візуальна система, швидкий шлях до розмови й акуратна адаптивність.",
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
    year: "2026",
    description: "Сайт для science та AI-консалтингу з темним візуальним тоном, великими прев'ю і зрозумілим поясненням експертизи.",
    caseSummary:
      "Vireon побудований навколо довіри до складної експертизи: спокійна структура, преміальні візуали й секції, які не перевантажують користувача.",
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
    year: "2026",
    description: "Концепт AI-стратегії та автоматизації для команд, яким потрібна не магія, а зрозумілий шлях від хаосу до системи.",
    caseSummary:
      "Сторінка пояснює AI-стратегію через короткі блоки, ясні акценти й швидку навігацію. Візуально це технологічний продукт без холодного корпоративного тону.",
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
    year: "2026",
    description: "Індустріальний сайт із великим візуальним ритмом, чітким позиціонуванням і відчуттям надійного сервісу.",
    caseSummary:
      "Aureon тримається на великому кадрі, стриманій палітрі та простій структурі: хто це, що роблять, чому їм можна довіряти.",
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
    year: "2026",
    description: "Спокійна digital brand system для експертної подачі: модульне повідомлення, м'який темп і чисті адаптивні блоки.",
    caseSummary:
      "Auralis працює як невелика бренд-система в форматі лендингу. Основний фокус — характер, ритм, повідомлення й відсутність зайвого декоративного шуму.",
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
    year: "2026",
    description: "Growth-focused сторінка з дружнім тоном, ясним повідомленням і простим шляхом до дії.",
    caseSummary:
      "Mentora — легший, людяніший напрям портфоліо: без важкої драматургії, але з нормальною структурою, зрозумілими секціями й живим візуальним образом.",
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
    year: "2026",
    description: "Fashion storefront із бутиковим настроєм, refined typography, product sections і м'яким luxury-відчуттям.",
    caseSummary:
      "Aurelia показує, як магазин може виглядати тихо й дорого: без агресивних банерів, із акцентом на образ, деталь і спокійну покупку.",
    url: "https://aurelia-xi-ten.vercel.app/",
    screenshots: ["/assets/portfolio/liora-banner.jpg"]
  },
  {
    slug: "liora",
    title: "Liora",
    category: "Fashion e-commerce",
    fields: ["luxury-retail"],
    favorite: false,
    technologies: ["E-commerce", "Catalog", "Responsive"],
    year: "2026",
    description: "E-commerce homepage для fashion-категорій із промо-банерами, каталогом і простішою shopping-first навігацією.",
    caseSummary:
      "Liora — практичніший e-commerce формат: промо-зона, категорії, швидке читання пропозиції та достатньо місця для майбутнього каталогу товарів.",
    url: "https://liora.vercel.app/",
    screenshots: ["/assets/portfolio/liora-banner.jpg"]
  }
];

const principles = [
  {
    title: "Спершу зрозуміти.",
    text: "Сайт починається не з кнопки й не з градієнта. Спочатку треба зрозуміти, що саме має стати ясним для людини, яка відкрила сторінку."
  },
  {
    title: "Без шаблонної мови.",
    text: "Тексти мають звучати як нормальна розмова про роботу: без порожніх слів, фальшивих метрик і декоративного шуму заради шуму."
  },
  {
    title: "Довести до живого стану.",
    text: "Портфоліо цінне тоді, коли за карткою стоїть живий сайт: адаптивний, відкритий, зрозумілий і готовий до наступних правок."
  }
];

const processSteps = [
  ["01.", "Зібрати сенс", "Фіксую, що сайт має пояснити, кому він потрібен і яка дія має бути очевидною."],
  ["02.", "Побудувати ритм", "Розкладаю сторінку на hero, докази, роботи, деталі й CTA так, щоб людина не губилася."],
  ["03.", "Зробити в коді", "Верстаю адаптивну систему компонентів, де нові роботи додаються через дані, а не через хаос у розмітці."],
  ["04.", "Перевірити наживо", "Збірка, браузер, mobile, wide desktop, direct routes і production deploy. Без цього сайт ще не готовий."]
];

const app = document.querySelector("#app");
const footer = document.querySelector("[data-footer]");
const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");

let activeField = "all";

const projectBySlug = (slug) => projects.find((project) => project.slug === slug);
const projectUrl = (project) => `/case/${project.slug}`;
const currentPath = () => window.location.pathname.replace(/\/$/, "") || "/";
const fieldLabel = (field) => fieldFilters.find((item) => item.value === field)?.label || field;
const fieldCount = (field) => (field === "all" ? projects.length : projects.filter((project) => project.fields.includes(field)).length);
const badgeList = (items) => items.map((item) => `<span>${item}</span>`).join("");
const numbered = (index) => `N° ${String(index + 1).padStart(2, "0")}`;
const firstProjectForField = (field) => projects.find((project) => project.fields.includes(field));

const createPreviewImage = (src, title, index) => `
  <img src="${src}" alt="${title} preview ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" />
`;

const renderHero = () => `
  <section class="hero hero-stage" aria-labelledby="hero-title">
    <div class="hero-background" aria-hidden="true">
      <img src="/assets/portfolio/vireon-hero.png" alt="" />
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content reveal-up">
      <p class="hero-kicker">— Портфоліо веброзробника · 2026</p>
      <h1 id="hero-title">Веброзробка, що тримає форму. <span>Без зайвого шуму.</span></h1>
      <p>
        Добірка живих сайтів: від AI-консалтингу до fashion e-commerce.
        Кожна робота має окремий кейс, прев'ю і посилання на production.
      </p>
      <a class="primary-link hero-cta" href="/projects" data-link>Подивитись роботи</a>
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
    <a class="project-main-image" href="${projectUrl(project)}" data-link aria-label="Відкрити кейс ${project.title}">
      ${createPreviewImage(project.screenshots[0], project.title, index)}
      <span class="project-field">${project.fields.map(fieldLabel).slice(0, 1).join("")}</span>
    </a>
    <div class="project-info">
      <div>
        <span>${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
      <div class="project-meta">
        <div>${badgeList(project.technologies.slice(0, 3))}</div>
        <span>${project.year}</span>
      </div>
    </div>
  </article>
`;

const renderFavorites = () => {
  const favorites = projects.filter((project) => project.favorite).slice(0, 3);

  return `
    <section class="section-block favorites" aria-labelledby="favorites-title">
      <div class="section-heading split reveal-up">
        <h2 id="favorites-title">Улюблені <span>роботи</span></h2>
        <a class="text-link" href="/projects" data-link>Усі проєкти</a>
      </div>
      <div class="favorite-grid">
        ${favorites.map((project, index) => renderProjectCard(project, { index })).join("")}
      </div>
    </section>
  `;
};

const renderFields = () => {
  const fields = fieldFilters.filter((field) => field.value !== "all");
  const highlighted = fields.find((field) => fieldCount(field.value) > 0) || fields[0];
  const highlightedProject = firstProjectForField(highlighted.value) || projects[0];

  return `
    <section class="section-block fields-section" aria-labelledby="fields-title">
      <div class="section-heading split reveal-up">
        <h2 id="fields-title">За сферами</h2>
        <a class="text-link" href="/projects" data-link>Усі напрями</a>
      </div>
      <div class="fields-layout">
        <article class="field-feature reveal-up" data-card-link="${projectUrl(highlightedProject)}" role="link" tabindex="0">
          <img src="${highlightedProject.screenshots[0]}" alt="${highlightedProject.title} field preview" />
          <div>
            <p class="hero-kicker">— ${numbered(0)} · Категорія</p>
            <h3>${fieldDetails[highlighted.value].title}</h3>
            <p>${fieldDetails[highlighted.value].text}</p>
            <a class="primary-link" href="/projects" data-link>Усі проєкти</a>
          </div>
        </article>
        <div class="field-list reveal-up">
          ${fields
            .map((field, index) => {
              const count = fieldCount(field.value);
              return `
                <button class="field-row ${count ? "" : "is-empty"}" type="button" data-field-shortcut="${field.value}" ${count ? "" : "disabled"}>
                  <span>${numbered(index)}</span>
                  <strong>${field.label}</strong>
                  <em>${count}</em>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
};

const renderManifest = () => `
  <section class="manifest-section" aria-label="Маніфест">
    <blockquote class="reveal-up">
      «Сайт має пояснювати роботу так, ніби поруч стоїть людина, яка справді розуміє бізнес:
      спокійно, точно і без зайвого театру».
    </blockquote>
    <p>— принцип PixelCraft · 2026</p>
  </section>
`;

const renderPrinciples = () => `
  <section class="section-block principles-section" aria-labelledby="principles-title">
    <h2 id="principles-title">Три принципи, яких тримається портфоліо.</h2>
    <div class="principle-grid">
      ${principles
        .map(
          (principle, index) => `
            <article class="principle-card reveal-up">
              <span>${["I.", "II.", "III."][index]}</span>
              <h3>${principle.title}</h3>
              <p>${principle.text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  </section>
`;

const renderHome = () => {
  app.innerHTML = `
    ${renderHero()}
    ${renderFavorites()}
    ${renderFields()}
    ${renderManifest()}
    ${renderPrinciples()}
  `;
};

const renderCatalog = () => {
  const visibleProjects = activeField === "all" ? projects : projects.filter((project) => project.fields.includes(activeField));

  app.innerHTML = `
    <section class="page-hero catalog-hero" aria-labelledby="catalog-title">
      <p class="hero-kicker">Головна / Портфоліо</p>
      <h1 id="catalog-title">Портфоліо, у якому кожна робота — окремий кейс.</h1>
      <p>Фільтруй за сферою, відкривай деталі, дивись прев'ю і переходь на живий сайт.</p>
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
    </section>
    <section class="catalog-section" aria-label="Проєкти">
      <div class="catalog-count">${visibleProjects.length} з ${projects.length} проєктів</div>
      ${
        visibleProjects.length
          ? `<div class="project-grid">${visibleProjects.map((project, index) => renderProjectCard(project, { index })).join("")}</div>`
          : `<div class="empty-state"><h2>У цій сфері поки немає роботи.</h2><p>Коли з'явиться релевантний кейс, він буде доданий через дані проєкту.</p></div>`
      }
    </section>
  `;
};

const renderAbout = () => `
  <section class="page-hero about-hero" aria-labelledby="about-title">
    <p class="hero-kicker">— Про підхід · PixelCraft</p>
    <h1 id="about-title">Один розробник, який робить сайт як систему, а не як макет.</h1>
    <p>Портфоліо зібране так, щоб кожен новий проєкт можна було додати через код: назва, опис, сфери, технології, прев'ю і live URL.</p>
  </section>
  <section class="section-block process-section" aria-labelledby="process-title">
    <h2 id="process-title">Процес — чотири фази, кожна зі своїм сенсом.</h2>
    <div class="process-list">
      ${processSteps
        .map(
          ([number, title, text]) => `
            <article class="process-row reveal-up">
              <span>${number}</span>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  </section>
  ${renderPrinciples()}
`;

const renderContacts = () => `
  <section class="page-hero contact-hero" aria-labelledby="contact-title">
    <p class="hero-kicker">— Контакт</p>
    <h1 id="contact-title">Є сайт, який треба зробити акуратно?</h1>
    <p>Напиши напряму. Без форми, без зайвих полів, без маленького театру навколо кнопки.</p>
    <div class="contact-actions">
      <a class="primary-link" href="mailto:${brandConfig.email}">Email</a>
      <a class="ghost-link strong" href="${brandConfig.github}" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </section>
`;

const renderCase = (slug) => {
  const project = projectBySlug(slug);

  if (!project) {
    app.innerHTML = `
      <section class="page-hero">
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
        <div class="case-copy reveal-up">
          <p class="hero-kicker">Case · ${project.category}</p>
          <h1 id="case-title">${project.title}</h1>
          <p>${project.description}</p>
          <div class="case-actions">
            <a class="primary-link" href="${project.url}" target="_blank" rel="noreferrer">Live сайт</a>
            <a class="ghost-link strong" href="/projects" data-link>Портфоліо</a>
          </div>
        </div>
        <div class="case-visual reveal-up">
          <img src="${project.screenshots[0]}" alt="${project.title} hero preview" />
        </div>
      </section>
      <section class="case-details">
        <div class="case-text reveal-up">
          <p class="hero-kicker">Опис</p>
          <h2>Що показує цей кейс</h2>
          <p>${project.caseSummary}</p>
        </div>
        <aside class="case-aside reveal-up">
          <div><span>Сфери</span><p>${project.fields.map(fieldLabel).join(" · ")}</p></div>
          <div><span>Технології</span><p>${project.technologies.join(" · ")}</p></div>
          <div><span>Посилання</span><a href="${project.url}" target="_blank" rel="noreferrer">${project.url.replace("https://", "")}</a></div>
        </aside>
      </section>
      <section class="case-preview-section" aria-label="${project.title} previews">
        <p class="hero-kicker">Прев'ю</p>
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
        <p>Портфоліо веброзробника з фокусом на живі сайти, чіткий текст і акуратну фронтенд-систему.</p>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <span>Навігація</span>
        <a href="/projects" data-link>Портфоліо</a>
        <a href="/about" data-link>Про підхід</a>
        <a href="/contacts" data-link>Контакти</a>
      </nav>
      <div class="footer-links" aria-label="Contact links">
        <span>Зв'язок</span>
        <a href="mailto:${brandConfig.email}">Email</a>
        <a href="${brandConfig.github}" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
    <div class="footer-word" aria-hidden="true">MYSHCHYSHYN</div>
  `;
};

const renderBrand = () => {
  document.querySelectorAll("[data-brand-name]").forEach((item) => {
    item.textContent = brandConfig.name;
  });
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
    { threshold: 0.1, rootMargin: "0px 0px -80px" }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 45}ms`;
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
  } else if (path === "/about") {
    app.innerHTML = renderAbout();
  } else if (path === "/contacts") {
    app.innerHTML = renderContacts();
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
  const shortcut = event.target.closest("[data-field-shortcut]");
  if (!shortcut || shortcut.disabled) return;
  activeField = shortcut.dataset.fieldShortcut || "all";
  navigate("/projects");
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
