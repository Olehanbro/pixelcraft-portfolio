export const brandConfig = {
  name: "Myshchyshyn",
  email: "sashamischishin2005@gmail.com",
  github: "https://github.com/Olehanbro",
  ownerPortrait: {
    // Replace this path with a new owner portrait later.
    image: "/assets/owner-portrait.jpeg",
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
    heroImage: "/assets/portfolio/cards/kursor-strategy-cover.svg",
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
    heroImage: "/assets/portfolio/cards/vireon-cover.svg",
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
    heroImage: "/assets/portfolio/cards/lumora-cover.svg",
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
    heroImage: "/assets/portfolio/cards/aureon-cover.svg",
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
    heroImage: "/assets/portfolio/cards/auralis-cover.svg",
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
    heroImage: "/assets/portfolio/cards/mentora-cover.svg",
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
    heroImage: "/assets/portfolio/cards/aurelia-cover.svg",
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
    heroImage: "/assets/portfolio/cards/liora-cover.svg",
    screenshots: ["/assets/portfolio/liora-banner.jpg"]
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
    title: "Власник / розробка",
    label: "Слот власника",
    type: "owner",
    text: "Архітектура сторінок, фронтенд, адаптивність і запуск на production. Фото замінюється в brandConfig.ownerPortrait.image."
  },
  {
    title: "Дизайн-напрям",
    label: "Дівчина 01",
    type: "woman-a",
    text: "Типографіка, композиція, ритм секцій і візуальна логіка портфоліо."
  },
  {
    title: "Контент",
    label: "Дівчина 02",
    type: "woman-b",
    text: "Тексти без канцеляриту: коротко, по суті, під конкретний кейс."
  },
  {
    title: "Перевірка",
    label: "Хлопець 01",
    type: "man",
    text: "Скріншоти, mobile, wide desktop, клікабельність карток і чистий deploy."
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
    type: "github-channel",
    eyebrow: "— GitHub",
    title: "Olehanbro",
    text: "Код, репозиторії й технічний контекст по вже зібраних роботах.",
    href: brandConfig.github
  }
];

export const projectUrl = (project) => `/case/${project.slug}`;
export const fieldLabel = (field) => fieldFilters.find((item) => item.value === field)?.label || field;
export const fieldCount = (field) =>
  field === "all" ? projects.length : projects.filter((project) => project.fields.includes(field)).length;
export const firstProjectForField = (field) => projects.find((project) => project.fields.includes(field));
export const numbered = (index) => `N° ${String(index + 1).padStart(2, "0")}`;
export const projectBySlug = (slug) => projects.find((project) => project.slug === slug);
