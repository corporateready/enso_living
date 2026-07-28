const ENGLISH_ROUTES = ["/living-en", "/en", "/thank-you-en"];

export function getConsentLocale(pathname = "") {
  const isEnglishRoute = ENGLISH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  return isEnglishRoute ? "en" : "ro";
}

export const CONSENT_TRANSLATIONS = {
  ro: {
    regionLabel: "Consimțământ pentru cookie-uri",
    languageSelectorLabel: "Limba notificării despre cookie-uri",
    bannerTitle: "Acest site utilizează cookie-uri",
    bannerDescription:
      "Utilizăm cookie-uri pentru a personaliza conținutul și reclamele, pentru a oferi funcționalități pentru rețelele sociale și pentru a analiza traficul. De asemenea, partajăm informații despre utilizarea site-ului cu partenerii noștri de social media, publicitate și analiză.",
    deny: "Respinge",
    customize: "Personalizează",
    allowAll: "Acceptă toate",
    savePreferences: "Salvează preferințele",
    preferencesTitle: "Preferințe cookie-uri",
    close: "Închide",
    essentials: "Esențiale",
    essentialsDescription:
      "Necesare pentru funcționarea site-ului: urmărirea apelurilor și înlocuirea numărului de telefon.",
    alwaysActive: "Mereu active",
    analytics: "Analiză și performanță",
    analyticsDescription:
      "Ne ajută să înțelegem cum este utilizat site-ul (Google Analytics, PostHog).",
    marketing: "Marketing și publicitate",
    marketingDescription:
      "Permit afișarea și măsurarea reclamelor relevante (Meta Pixel, LinkedIn Ads, Google Ads).",
  },
  en: {
    regionLabel: "Cookie consent",
    languageSelectorLabel: "Cookie notice language",
    bannerTitle: "This website uses cookies",
    bannerDescription:
      "We use cookies to personalise content and ads, provide social media features, and analyse our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners.",
    deny: "Deny",
    customize: "Customize",
    allowAll: "Allow all",
    savePreferences: "Save preferences",
    preferencesTitle: "Cookie preferences",
    close: "Close",
    essentials: "Essentials",
    essentialsDescription:
      "Required for the website to operate: call tracking and phone number substitution.",
    alwaysActive: "Always active",
    analytics: "Analytics and performance",
    analyticsDescription:
      "Helps us understand how the website is used (Google Analytics, PostHog).",
    marketing: "Marketing and advertising",
    marketingDescription:
      "Enables relevant advertising and campaign measurement (Meta Pixel, LinkedIn Ads, Google Ads).",
  },
};
