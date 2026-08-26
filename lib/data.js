export const brandConfig = {
  name: "Myshchyshyn",
  email: "sashamischishin2005@gmail.com",
  phone: "+0969610718",
  telegram: {
    label: "@Ol_exandr0",
    href: "https://t.me/Ol_exandr0"
  },
  instagram: {
    label: "@ol_exandr0",
    href: "https://www.instagram.com/ol_exandr0/"
  },
  ownerPortrait: {
    // Replace this path with a new owner portrait later.
    image: "/assets/owner-portrait-hero.png",
    alt: "Портрет власника портфоліо"
  }
};

export const fieldFilters = [
  { label: "Усі", value: "all" },
  { label: "Люкс / ритейл", value: "luxury-retail" },
  { label: "Право", value: "law" },
  { label: "IT / SaaS", value: "it-saas" },
  { label: "CSS", value: "css" },
  { label: "Консалтинг", value: "consulting" },
  { label: "Медицина", value: "medicine" }
];

export const fieldDetails = {
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

export const projects = [
  {
    slug: "optimo-studio",
    title: "Optimo Studio",
    category: "Business consulting",
    fields: ["consulting", "css"],
    favorite: true,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Адаптований consulting landing із великим hero, метриками, сервісами, процесом, кейсами, FAQ і прямим CTA.",
    caseSummary:
      "Optimo Studio показує premium consulting-сторінку без зайвих згадок про джерело: сильний перший екран, зрозуміла структура, бізнес-ритм і локальна сторінка в портфоліо.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/optimo-studio/",
    heroImage: "/assets/optimo/hero.avif",
    screenshots: ["/assets/optimo/hero.avif", "/assets/optimo/about.avif", "/assets/optimo/cta.avif"]
  },
  {
    slug: "lifecycle",
    title: "Lifecycle",
    category: "Sustainability consulting",
    fields: ["consulting", "css"],
    favorite: true,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Consulting landing у стилі sustainability/business operations: темний hero, сервіси, процес, кейси та CTA.",
    caseSummary:
      "Lifecycle повернутий у портфоліо як попередній скопійований проєкт: окрема локальна сторінка, власні assets, адаптивна структура і пряме посилання з кейсу.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/lifecycle/",
    heroImage: "/assets/lifecycle/lifecycle-hero.png",
    screenshots: ["/assets/lifecycle/lifecycle-hero.png", "/assets/lifecycle/lifecycle-infrastructure.png", "/assets/lifecycle/lifecycle-intelligence.png"]
  },
  {
    slug: "baseframe",
    title: "Baseframe",
    category: "Clarity consulting",
    fields: ["consulting", "css"],
    favorite: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Consulting-сторінка для команд, яким треба пояснювати складні системи через структуру, ясність і спокійний premium UX.",
    caseSummary:
      "Baseframe адаптований як clarity consulting сайт: великий перший екран, метрики, структурні service-блоки, testimonial-секція і власна локальна сторінка без сторонніх згадок.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/baseframe/",
    heroImage: "/assets/showcases/baseframe/hero.avif",
    screenshots: ["/assets/showcases/baseframe/hero.avif", "/assets/showcases/baseframe/detail.avif", "/assets/showcases/baseframe/service.avif"]
  },
  {
    slug: "stravorex",
    title: "Stravorex",
    category: "Marketing agency",
    fields: ["consulting", "css"],
    favorite: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Яскрава marketing agency сторінка з демо-настроєм, сервісами, case-preview блоками і прямим consultation CTA.",
    caseSummary:
      "Stravorex показує agency-подачу для кампаній і growth-сервісів: швидкий hero, візуальні демо, performance-послуги і CTA без зайвого шаблонного шуму.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/stravorex/",
    heroImage: "/assets/showcases/stravorex/hero.avif",
    screenshots: ["/assets/showcases/stravorex/hero.avif", "/assets/showcases/stravorex/home-two.avif", "/assets/showcases/stravorex/case.avif"]
  },
  {
    slug: "mercket",
    title: "Mercket",
    category: "Performance marketing",
    fields: ["consulting", "css"],
    favorite: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Performance marketing сайт із growth-метриками, сервісами реклами, brand campaigns і чіткою комерційною подачею.",
    caseSummary:
      "Mercket адаптований як результативна marketing landing page: цифри, project imagery, сервісні блоки, аналітика і контактна дія з першого перегляду.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/mercket/",
    heroImage: "/assets/showcases/mercket/hero.webp",
    screenshots: ["/assets/showcases/mercket/hero.webp", "/assets/showcases/mercket/about.jpg", "/assets/showcases/mercket/project.jpg"]
  },
  {
    slug: "casho",
    title: "Casho",
    category: "Financial advisory",
    fields: ["consulting", "it-saas"],
    favorite: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Business та finance consulting сторінка з advisory-сервісами, довірою, метриками і чітким шляхом до контакту.",
    caseSummary:
      "Casho повертає фінансовий консалтинг у портфоліо: business strategy, operational excellence, financial advisory, market expansion і спокійна corporate-візуальна система.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/casho/",
    heroImage: "/assets/showcases/casho/hero.jpg",
    screenshots: ["/assets/showcases/casho/hero.jpg", "/assets/showcases/casho/about.jpg", "/assets/showcases/casho/cta.jpg"]
  },
  {
    slug: "vinsor",
    title: "Vinsor",
    category: "Wine ecommerce",
    fields: ["luxury-retail", "css"],
    favorite: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Wine ecommerce сторінка з теплим brand mood, product storytelling, shop-прев'ю і polished commerce-flow структурою.",
    caseSummary:
      "Vinsor адаптований як e-commerce приклад для преміального продукту: product story, shop navigation, winery content, checkout-flow логіка і атмосферний CTA.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/vinsor/",
    heroImage: "/assets/showcases/vinsor/hero.webp",
    screenshots: ["/assets/showcases/vinsor/hero.webp", "/assets/showcases/vinsor/wine.webp", "/assets/showcases/vinsor/shop.webp"]
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
    heroImage: "/assets/portfolio/vireon-live-og.png",
    screenshots: ["/assets/portfolio/vireon-live-og.png", "/assets/portfolio/vireon-hero.png", "/assets/vireon-hero.png"]
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
    heroImage: "/assets/portfolio/auralis-live-og.png",
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
    heroImage: "/assets/portfolio/mentora-live-og.png",
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
    heroImage: "/assets/portfolio/aurelia-og.png",
    screenshots: ["/assets/portfolio/aurelia-og.png"]
  },
  {
    slug: "fathom",
    title: "Fathom",
    category: "Growth consulting",
    fields: ["consulting", "css"],
    favorite: false,
    technologies: ["Next.js", "TypeScript", "Vercel"],
    year: "2026",
    description: "Консалтинговий лендинг із великим фото-першим екраном, чіткою навігацією та прямим шляхом до розмови.",
    caseSummary:
      "Fathom працює як сайт для стратегії й росту: сильний hero, сервісна структура, спокійна довіра й акцент на швидкому контакті.",
    url: "https://fathom-nu.vercel.app/",
    heroImage: "/assets/portfolio/storm/fathom.png",
    screenshots: ["/assets/portfolio/storm/fathom.png"]
  },
  {
    slug: "kindra",
    title: "Kindra",
    category: "Care platform",
    fields: ["medicine", "it-saas"],
    favorite: false,
    technologies: ["Next.js", "TypeScript", "Responsive"],
    year: "2026",
    description: "Світлий сайт для сервісу догляду: пошук, довіра, безпека і зрозумілий перший екран для сімей.",
    caseSummary:
      "Kindra показує сервісну платформу через людяний тон, теплий візуальний кадр і просту дію без зайвого пояснення.",
    url: "https://kindra-sigma.vercel.app/",
    heroImage: "/assets/portfolio/storm/kindra.png",
    screenshots: ["/assets/portfolio/storm/kindra.png"]
  },
  {
    slug: "krytsia",
    title: "Krytsia",
    category: "Retail storefront",
    fields: ["luxury-retail", "css"],
    favorite: false,
    technologies: ["Next.js", "TypeScript", "E-commerce"],
    year: "2026",
    description: "E-commerce вітрина для ножів і спорядження з каталогом, промо-блоками та щільною retail-навігацією.",
    caseSummary:
      "Krytsia тримається на практичній структурі магазину: категорії, пошук, товарні промо і сильна комерційна подача.",
    url: "https://krytsia-drab.vercel.app/",
    heroImage: "/assets/portfolio/storm/krytsia.png",
    screenshots: ["/assets/portfolio/storm/krytsia.png"]
  },
  {
    slug: "numio",
    title: "Numio",
    category: "Finance SaaS",
    fields: ["it-saas"],
    favorite: false,
    technologies: ["Next.js", "TypeScript", "SaaS"],
    year: "2026",
    description: "SaaS-лендинг для фінансових операцій: легкий фон, великий меседж і продуктова візуалізація.",
    caseSummary:
      "Numio пояснює фінансовий продукт без перевантаження: один центрований меседж, м'який візуальний фон і коротка дія.",
    url: "https://numio-seven.vercel.app/",
    heroImage: "/assets/portfolio/storm/numio.png",
    screenshots: ["/assets/portfolio/storm/numio.png"]
  },
  {
    slug: "sequora",
    title: "Sequora",
    category: "Climate intelligence",
    fields: ["consulting", "it-saas"],
    favorite: false,
    technologies: ["Next.js", "TypeScript", "Vercel"],
    year: "2026",
    description: "Маркетинговий сайт для climate intelligence: ESG-повідомлення, сервісна навігація та природний візуальний ряд.",
    caseSummary:
      "Sequora поєднує консалтинг і SaaS-подачу: дані, екологічний контекст, зрозумілий CTA і спокійна структура для B2B.",
    url: "https://sequora-five.vercel.app/",
    heroImage: "/assets/portfolio/storm/sequora.png",
    screenshots: ["/assets/portfolio/storm/sequora.png"]
  },
  {
    slug: "greenvista-service",
    title: "GreenVista Service",
    category: "Outdoor care",
    fields: ["css"],
    favorite: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    description: "Сервісна сторінка для догляду за садом і подвір'ям: великий hero, послуги, довіра, відгуки й швидкий контакт.",
    caseSummary:
      "GreenVista Service — оригінальна адаптація service-page для зеленого сервісу: власний текст, власний hero-візуал і чиста структура без сторонніх згадок.",
    url: "https://myshchyshyn-portfolio.vercel.app/sites/greenvista-service/",
    heroImage: "/assets/portfolio/greenvista-service.png",
    screenshots: ["/assets/portfolio/greenvista-service.png", "/sites/greenvista-service/assets/hero-garden-team.png"]
  }
];

export const principles = [
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

export const processSteps = [
  ["01.", "Слухаємо", "Збираємо задачу, контекст, аудиторію й реальні приклади сайтів, які подобаються або дратують."],
  ["02.", "Складаємо структуру", "Перший екран, роботи, аргументи, контакт і маршрут користувача мають бути зрозумілими до дизайну."],
  ["03.", "Робимо в коді", "Верстаємо адаптивні сторінки, компоненти й дані так, щоб нові роботи додавались без переписування сайту."],
  ["04.", "Публікуємо", "Перевіряємо build, wide/mobile, direct routes і живий deployment. Після запуску лишається місце для правок."]
];

export const teamRoles = [
  {
    name: "Oleksander",
    title: "Frontend / запуск",
    label: "Власник",
    type: "owner",
    text: "Архітектура сторінок, адаптивна верстка, production deploy і фінальна збірка сайту."
  },
  {
    name: "Zenovii",
    title: "Структура / дизайн",
    label: "Дизайн",
    type: "zenovii",
    text: "Композиція, ритм секцій, логіка блоків і чиста подача робіт у портфоліо."
  },
  {
    name: "Serhii",
    title: "Контент / перевірка",
    label: "QA",
    type: "serhii",
    text: "Тексти, прев'ю, клікабельність, mobile/wide перевірка і підготовка кейсів до показу."
  }
];

export const journalPosts = [
  {
    title: "Чому портфоліо має відкриватися з робіт",
    tag: "Портфоліо",
    date: "17 серпня 2026",
    readTime: "6 хв",
    excerpt: "Про перший екран, який не пояснює себе надто довго, а швидко веде до реальних сайтів."
  },
  {
    title: "Картка кейсу: що має бути видно одразу",
    tag: "Кейс",
    date: "12 серпня 2026",
    readTime: "8 хв",
    excerpt: "Назва, сфера, прев'ю, короткий опис і live URL. Решта має допомагати, а не заважати."
  },
  {
    title: "Як додавати майбутні роботи через код",
    tag: "Метод",
    date: "8 серпня 2026",
    readTime: "5 хв",
    excerpt: "Структура даних для портфоліо: без адмінки, але з нормальними полями для росту."
  },
  {
    title: "Велика типографіка без хаосу",
    tag: "Дизайн",
    date: "2 серпня 2026",
    readTime: "7 хв",
    excerpt: "Коли serif-заголовок працює як настрій, а коли він просто займає весь екран без сенсу."
  },
  {
    title: "Production-посилання важливіші за мокапи",
    tag: "Запуск",
    date: "25 липня 2026",
    readTime: "4 хв",
    excerpt: "Сайт у портфоліо має бути живим: відкритим, адаптивним і перевіреним після деплою."
  }
];

export const contactChannels = [
  {
    type: "email-channel",
    eyebrow: "— Пошта",
    title: brandConfig.email,
    text: "Найпряміший канал для задачі, референсів і короткого опису проєкту.",
    href: `mailto:${brandConfig.email}`
  },
  {
    type: "phone-channel",
    eyebrow: "— Телефон",
    title: brandConfig.phone,
    text: "Для швидкого зв'язку, якщо треба коротко обговорити задачу голосом.",
    href: `tel:${brandConfig.phone}`
  },
  {
    type: "telegram-channel",
    eyebrow: "— Telegram",
    title: brandConfig.telegram.label,
    text: "Зручний канал для швидких повідомлень, правок і уточнень по сайту.",
    href: brandConfig.telegram.href
  },
  {
    type: "instagram-channel",
    eyebrow: "— Instagram",
    title: brandConfig.instagram.label,
    text: "Ще один канал для контакту і швидкого переходу в особисті повідомлення.",
    href: brandConfig.instagram.href
  }
];

export const projectUrl = (project) => `/case/${project.slug}`;
export const fieldLabel = (field) => fieldFilters.find((item) => item.value === field)?.label || field;
export const fieldCount = (field) =>
  field === "all" ? projects.length : projects.filter((project) => project.fields.includes(field)).length;
export const firstProjectForField = (field) => projects.find((project) => project.fields.includes(field));
export const numbered = (index) => `N° ${String(index + 1).padStart(2, "0")}`;
export const projectBySlug = (slug) => projects.find((project) => project.slug === slug);
