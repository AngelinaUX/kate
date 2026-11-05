// Весь контент страницы в одном месте. Сейчас здесь плейсхолдеры, меняйте тексты и пути к картинкам тут.

const EMAIL = "kass.ekaterina@gmail.com";
const INSTAGRAM = "https://www.instagram.com/kass.ekaterina/";
const LINKEDIN = "https://www.linkedin.com/in/ekaterinakass/";

export const content = {
  contact: { email: EMAIL, linkedin: LINKEDIN },

  meta: {
    title: "Ekaterina Kasakina — Portfolio",
    description: "Placeholder portfolio description.",
  },

  hero: {
    firstLine: "EKATERINA",
    secondLine: "KASAKINA",
    left: ["Product", "Designer"],
    right: ["Based in", "Luxembourg"],
    signature: "/images/signature.webp",
    signatureWhite: "/images/signature-white.webp", // белая версия для синего блока с фото
    // бабл у курсора после интро (только десктоп): тексты печатаются по очереди
    bubble: ["Hey there", "Curious? Have a look."],
  },

  portrait: {
    image: "/images/ekaterina.webp",
    alt: "Ekaterina Kasakina",
    roles: ["Product Designer", "UX/UI Designer", "Web Designer"],
  },

  statement: {
    // своя 3D-иконка справа сверху: положите SVG по этому пути (папка public).
    // Пока файла нет, на этом месте показывается пиксельный робот.
    customIcon: "/icons/tool.svg",
    // bold: true выделяет слово жирным
    words: [
      { text: "10+ years", bold: true },
      { text: "of" },
      { text: "shaping" },
      { text: "clear", br: true },
      { text: "products" },
      { text: "and" },
      { text: "calm" },
      { text: "interfaces", br: true },
      { text: "people" },
      { text: "trust" },
    ] as { text: string; bold?: boolean; br?: boolean }[],
  },

  services: {
    intro: "I help teams turn ideas into",
    // кнопка при наведении на превью, ведёт к блоку с работами
    hoverCta: "View all works below",
    items: [
      { title: "Mobile apps", image: "/placeholders/service-1.svg" },
      { title: "Web platforms", image: "/placeholders/service-2.svg" },
      { title: "Landings", image: "/placeholders/service-3.svg" },
    ],
  },

  // блок «Work I've shipped»: наклонённые карточки, которые въезжают и едут лентой при прокрутке (перед Selected work)
  // cover — обложка 4:3 (на телефоне карточка вертикальная, картинка обрезается по центру). Без cover — заглушка с номером.
  shipped: {
    title: "Work I've shipped",
    subtitle: "Products I've designed and launched, from first flows to features people use every day.",
    // кнопка ведёт к Selected work; пока тот блок скрыт — кнопки нет (cta: ""). Вернуть: cta: "See all work"
    cta: "",
    ctaHref: "#work",
    items: [
      { name: "Cyberr", category: "Technical tests", href: "/work/cyberr-technical-tests", cover: "/images/cases/cyberr-tests/Tests-Tests.webp" },
      { name: "Cyberr", category: "Onboarding", href: "/work/cyberr-onboarding", cover: "/images/cases/cyberr-onboarding/Onb-review.webp" },
      { name: "Project Two", category: "Web platform", href: "#" },
      { name: "Project Three", category: "Mobile app", href: "#" },
      { name: "Project Four", category: "Design system", href: "#" },
      { name: "Project Five", category: "Product design", href: "#" },
    ] as { name: string; category: string; href: string; cover?: string }[],
  },

  // блок «Process is the product» (после Work I've shipped): сетка плиток — принципы, итоги, навыки, инструменты
  process: {
    // [жирная часть, обычная часть]
    title: ["Process", "is the product."],
    intro:
      "Strong products aren't a lucky accident. They grow out of early questions, honest evidence and the confidence to say no when something doesn't serve the user.",
    // icon: research | systems | outcomes (линейные иконки в ProcessSection.tsx)
    pillars: [
      { icon: "research", title: "Research-led", text: "Every decision starts with evidence: interviews, usability tests and analytics come before the first frame." },
      { icon: "systems", title: "Scalable systems", text: "Components and tokens built to outlive single features. A design system is shared infrastructure for the whole team." },
      { icon: "outcomes", title: "Business outcomes", text: "Each flow is tied to a metric: conversion, retention, time-to-task. If it can't be measured, it isn't finished." },
    ] as { icon: "research" | "systems" | "outcomes"; title: string; text: string }[],
    // ЗАГЛУШКИ: замените на свои итоги. value — то, что крутится счётчиком (цифры и знаки), product — строка над числом
    results: [
      { value: "10+", product: "Product design", label: "years of experience" },
      { value: "22", product: "LinkedIn", label: "recommendations" },
      { value: "#1", product: "Project name", label: "replace with your result" },
    ],
    skills: ["Product discovery", "User research", "Prototyping", "Design systems", "Dev handoff", "WCAG accessibility", "AI workflows"],
    // логотипы лежат в public/images/tools/<имя в нижнем регистре>.webp
    tools: ["Figma", "Framer", "Claude", "Posthog", "Mobbin", "Lottie"],
    explode: "Shake up the skills",
    tidy: "Put the skills back",
  },

  projects: {
    titleTop: "SELECTED",
    titleBottom: "WORK",
    viewLabel: "View project", // кнопка у курсора над карточками
    subtitle:
      "Selection of projects across branding, product design, and visual systems - each one built with intention.",
    items: [
      // logo: картинка вместо плейсхолдера (w/h — размеры на карточке в px)
      // preview: картинка на фоне карточки при наведении (обычно первое изображение кейса)
      {
        name: "Cyberr",
        year: "2026",
        category: "Product design | Art direction",
        href: "/work/cyberr-technical-tests",
        // maxW / maxWMobile — ширина логотипа в % от карточки, как в референсе
        logo: { src: "/logos/cyberr.png", w: 155, h: 48, maxW: 35, maxWMobile: 65 },
        preview: "/images/cases/cyberr-tests/Tests-Tests.webp",
      },
      { name: "Project Two", year: "2025", category: "Web platform", href: "#" },
      { name: "Project Three", year: "2025", category: "Mobile app", href: "#" },
      { name: "Project Four", year: "2024", category: "Design system", href: "#" },
      { name: "Project Five", year: "2023", category: "Product design", href: "#" },
      { name: "Project Six", year: "2023", category: "Research", href: "#" },
    ] as { name: string; year: string; category: string; href: string; logo?: { src: string; w: number; h: number; maxW?: number; maxWMobile?: number }; preview?: string }[],
  },

  // блок отзывов перед футером; сами отзывы лежат в src/testimonials.ts
  testimonials: {
    // [жирная часть, обычная часть]
    title: ["Recommended", "by great teams"],
    countLabel: "reviews on LinkedIn",
    href: `${LINKEDIN}details/recommendations/`,
    prev: "Previous recommendation",
    next: "Next recommendation",
    more: "Show more",
    less: "Show less",
  },

  footer: {
    avatar: "/images/character-v5.webp",
    avatarAspect: 893 / 1750, // ширина / высота картинки персонажа
    lead: "Let's make something",
    big: ["IMPACTFUL", "AND STRIKING"],
    reachOut: "Start a conversation",
    orEmail: "or email directly: ",
    email: EMAIL,
    socials: [
      { label: "Instagram", href: INSTAGRAM, icon: "instagram" },
      { label: "LinkedIn", href: LINKEDIN, icon: "linkedin" },
      { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
    ] as { label: string; href: string; icon: "instagram" | "linkedin" | "mail" }[],
    // [обычный текст, название жирным]
    creditLeft: ["Designed in ", "Figma"],
    creditRight: ["Built with ", "Claude Code"],
  },

  contactForm: {
    title: "Start a conversation",
    name: "Name",
    email: "Email",
    subject: "Subject",
    subjects: ["Project inquiry", "New opportunity", "Collaboration", "Speaking / press", "Something else"],
    message: "Message",
    send: "Send message",
    close: "Close",
  },

  menu: {
    links: [
      { label: "Home", href: "#top" },
      { label: "Work", href: "#shipped" }, // пока Selected work (#work) скрыт
      { label: "About", href: "#about" },
      // form: true — пункт открывает форму заявки (как «Start a conversation» в футере), а не ведёт к футеру
      { label: "Contact", href: "#contact", form: true },
    ] as { label: string; href: string; form?: boolean }[],
    emailButton: "Email me",
    emailCopied: "Copied!",
  },

};
