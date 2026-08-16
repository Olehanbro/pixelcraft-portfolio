const brandConfig = {
  name: "PixelCraft",
  email: "sashamischishin2005@gmail.com",
  github: "https://github.com/Olehanbro",
  ownerPortrait: {
    // Replace this path with a real portrait later, for example: "assets/owner-portrait.jpg".
    image: "",
    alt: "Portrait of the portfolio owner"
  }
};

const projects = [
  {
    title: "Vireon",
    category: "AI consulting",
    tags: ["ai", "strategy", "live"],
    description:
      "High-end science and AI consulting site with cinematic biotech visuals, responsive sections, and polished service storytelling.",
    url: "https://vireon-drab.vercel.app/",
    screenshots: [
      "assets/portfolio/vireon-live-og.png",
      "assets/portfolio/vireon-hero.png",
      "assets/vireon-hero.png"
    ]
  },
  {
    title: "Lumora",
    category: "AI strategy studio",
    tags: ["ai", "strategy", "live"],
    description:
      "AI strategy, automation, and analytics consulting concept for teams that need practical momentum and clearer systems.",
    url: "https://lumora-xi-two.vercel.app/",
    screenshots: ["assets/portfolio/lumora-live-og.png", "assets/portfolio/lumora-og.png"]
  },
  {
    title: "Aureon",
    category: "Construction delivery",
    tags: ["brand", "live"],
    description:
      "Construction and industrial delivery website with strong project confidence, precise positioning, and premium visual rhythm.",
    url: "https://aureon-liard.vercel.app/",
    screenshots: ["assets/portfolio/aureon-og.png", "assets/portfolio/vireon-hero.png"]
  },
  {
    title: "Auralis",
    category: "Brand systems",
    tags: ["brand", "strategy", "live"],
    description:
      "Calm digital brand system with modular messaging, adaptive sections, and a polished consultancy-style presentation.",
    url: "https://auralis-lac.vercel.app/",
    screenshots: ["assets/portfolio/auralis-live-og.png", "assets/portfolio/auralis-og.png"]
  },
  {
    title: "Mentora",
    category: "Growth platform",
    tags: ["brand", "live"],
    description:
      "Guidance and growth-focused landing page with clear messaging, confident sections, and approachable conversion flow.",
    url: "https://mentora-sigma-brown.vercel.app/",
    screenshots: ["assets/portfolio/mentora-live-og.png", "assets/portfolio/mentora-hero.jpeg"]
  },
  {
    title: "Aurelia",
    category: "Quiet luxury boutique",
    tags: ["commerce", "live"],
    description:
      "Fashion storefront with refined typography, boutique product sections, lookbook feel, and soft luxury mood.",
    url: "https://aurelia-xi-ten.vercel.app/",
    screenshots: ["assets/portfolio/aurelia-og.png", "assets/portfolio/liora-banner.jpg"]
  },
  {
    title: "Liora",
    category: "Fashion e-commerce",
    tags: ["commerce", "live"],
    description:
      "Modern e-commerce homepage for fashion categories, promotional banners, and shopping-first navigation.",
    url: "https://liora.vercel.app/",
    screenshots: ["assets/portfolio/liora-banner.jpg", "assets/portfolio/aurelia-og.png"]
  }
];

const filters = [
  { label: "Усі", value: "all" },
  { label: "AI / Strategy", value: "ai" },
  { label: "Brand", value: "brand" },
  { label: "E-commerce", value: "commerce" },
  { label: "Live", value: "live" }
];

const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const projectMount = document.querySelector("[data-projects]");
const filterMount = document.querySelector("[data-filters]");
const visibleCount = document.querySelector("[data-visible-count]");
const featuredStrip = document.querySelector("[data-featured-strip]");
const contactActions = document.querySelector("[data-contact-actions]");
const ownerPortrait = document.querySelector("[data-owner-portrait]");

let activeFilter = "all";

const externalLinkLabel = (title) => `Відкрити live сайт ${title}`;

const createPreviewImage = (src, title, index) => `
  <img
    src="${src}"
    alt="${title} preview ${index + 1}"
    loading="${index === 0 ? "eager" : "lazy"}"
  />
`;

const renderProjectCard = (project, index) => {
  const previewImages = project.screenshots.map((src, imageIndex) => createPreviewImage(src, project.title, imageIndex));
  const tagList = project.tags.map((tag) => `<span>${tag}</span>`).join("");

  return `
    <article class="project-card reveal-up ${index === 0 ? "featured" : ""}" data-tags="${project.tags.join(" ")}">
      <div class="project-gallery">
        <a class="project-main-image" href="${project.url}" target="_blank" rel="noreferrer" aria-label="${externalLinkLabel(
          project.title
        )}">
          ${previewImages[0]}
        </a>
        <div class="project-thumbs" aria-label="${project.title} screenshots">
          ${previewImages.slice(0, 3).join("")}
        </div>
      </div>
      <div class="project-info">
        <div class="project-title-row">
          <div>
            <span>${project.category}</span>
            <h3>${project.title}</h3>
          </div>
          <a class="visit-button" href="${project.url}" target="_blank" rel="noreferrer" aria-label="${externalLinkLabel(
            project.title
          )}">↗</a>
        </div>
        <p>${project.description}</p>
        <div class="project-meta">
          <div>${tagList}</div>
          <a href="${project.url}" target="_blank" rel="noreferrer">Живий сайт</a>
        </div>
      </div>
    </article>
  `;
};

const renderFilters = () => {
  filterMount.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-button" type="button" data-filter="${filter.value}" aria-pressed="${
          filter.value === activeFilter
        }">
          ${filter.label}
        </button>
      `
    )
    .join("");
};

const renderProjects = () => {
  const visibleProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter));

  projectMount.innerHTML = visibleProjects.map(renderProjectCard).join("");
  visibleCount.textContent = `${visibleProjects.length} з ${projects.length} проєктів`;
  observeRevealItems();
};

const renderFeaturedStrip = () => {
  featuredStrip.innerHTML = projects
    .slice(0, 4)
    .map(
      (project) => `
        <a class="featured-preview reveal-up" href="${project.url}" target="_blank" rel="noreferrer">
          <img src="${project.screenshots[0]}" alt="${project.title} website preview" loading="lazy" />
          <span>${project.title}</span>
        </a>
      `
    )
    .join("");
};

const renderBrand = () => {
  document.querySelectorAll("[data-brand-name]").forEach((item) => {
    item.textContent = brandConfig.name;
  });

  if (brandConfig.ownerPortrait.image) {
    ownerPortrait.innerHTML = `
      <img src="${brandConfig.ownerPortrait.image}" alt="${brandConfig.ownerPortrait.alt}" />
    `;
  }

  contactActions.innerHTML = `
    <a class="primary-link" href="mailto:${brandConfig.email}">Email</a>
    <a class="ghost-link strong" href="${brandConfig.github}" target="_blank" rel="noreferrer">GitHub</a>
  `;
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-label", "Open menu");
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

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

filterMount?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter || "all";
  renderFilters();
  renderProjects();
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  },
  { passive: true }
);

renderBrand();
renderFeaturedStrip();
renderFilters();
renderProjects();
observeRevealItems();
