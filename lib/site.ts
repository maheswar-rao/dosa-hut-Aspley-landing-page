// Central place for anything that might change — copy, links, hours.

export const SITE = {
  name: "Dosa Hut Sunshine Coast",
  orderUrl: "https://sunshinecoast.dosahut.net.au/",
  menuPdfUrl:
    "https://www.dosahut.net.au/wp-content/uploads/2026/06/DosaHut_Menu-sunshine-coast-9-10-2025.pdf",
  phoneDisplay: "0423 841 991",
  phoneHref: "tel:+61423841991",
  addressLine1: "5 Lutana Street",
  addressLine2: "Buddina, QLD 4575",
  addressFull: "5 Lutana Street, Buddina QLD 4575",
  directionsUrl: "https://maps.app.goo.gl/qAKhpzpaSLfeV4z79",
  mapEmbedUrl:
    "https://www.google.com/maps?q=5+Lutana+St+Buddina+QLD+4575&output=embed",
  mainSiteUrl: "https://www.dosahut.net.au/",
  instagramUrl: "https://www.instagram.com/dosahut_sunshinecoast/?hl=en",
  facebookUrl: "https://www.facebook.com/people/Dosa-Hut-Sunshine-Coast/61573654335879/",
  uberEatsUrl: "https://www.ubereats.com/au/store/dosa-hut-sunshine-coast/DWfGOBKaTI2wGq4K5eUU8A",
  doorDashUrl: "https://www.doordash.com/store/dosa-hut-sunshine-coast-buddina-34065779/69533746/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#why-us" },
  { label: "Location", href: "#location" },
];

export const HOURS = [
  { day: "Mon – Thu", time: "11:00 am – 2:30 pm, 4:00 pm – 9:30 pm" },
  { day: "Fri – Sun", time: "11:00 am – 9:30 pm" },
];

export type Dish = {
  category: string;
  name: string;
  image: string;
  alt: string;
};

export const DISH_CATEGORIES = [
  "Dosa",
  "Biryani",
  "Curries",
  "Tandoori Starters",
  "Indian Street Food",
] as const;

export const DISHES: Dish[] = [
  {
    category: "Dosa",
    name: "Masala Dosa",
    image: "/images/dish-masala-dosa.jpg",
    alt: "Crisp masala dosa served with a plate of accompaniments",
  },
  {
    category: "Biryani",
    name: "Chicken 65 Biryani",
    image: "/images/dish-chicken-65-biryani.jpg",
    alt: "Chicken 65 biryani served in a copper handi with raita and curry on the side",
  },
  {
    category: "Curries",
    name: "Butter Chicken",
    image: "/images/dish-butter-chicken.jpg",
    alt: "Creamy butter chicken curry garnished with mint",
  },
  {
    category: "Tandoori Starters",
    name: "Garlic Naan",
    image: "/images/dish-garlic-naan.jpg",
    alt: "Freshly baked garlic naan bread with curry and samosa",
  },
  {
    category: "Indian Street Food",
    name: "Chicken 65",
    image: "/images/dish-chicken-65.jpg",
    alt: "Spiced Chicken 65 tossed with crispy onions and chillies",
  },
  {
    category: "Indian Street Food",
    name: "Pani Puri Chaat",
    image: "/images/dish-pani-puri.jpg",
    alt: "Crisp pani puri street snack served with tangy filling",
  },
];

export type GalleryItem = {
  label: string;
  image: string;
  alt: string;
};

export const GALLERY: GalleryItem[] = [
  {
    label: "Evening Ambience",
    image: "/images/gallery-evening.jpg",
    alt: "Warmly lit restaurant dining area in the evening",
  },
  {
    label: "Al Fresco Dining",
    image: "/images/gallery-alfresco.jpg",
    alt: "Outdoor dining table with greenery and place settings",
  },
  {
    label: "Relaxed Lounge",
    image: "/images/gallery-lounge.jpg",
    alt: "Relaxed lounge and bar seating area",
  },
  {
    label: "Multi-Cuisine Spread",
    image: "/images/gallery-multicuisine.jpg",
    alt: "A spread of multi-cuisine dishes on a wooden table",
  },
];

export type Feature = {
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Made From Scratch",
    description:
      "Every dish prepared from scratch using real produce and traditional recipes.",
  },
  {
    title: "Aromatic Biryanis",
    description:
      "Perfectly spiced and sure to delight from the first bite.",
  },
  {
    title: "90+ Dosa Varieties",
    description:
      "Golden and crispy outside, soft inside — there's a dosa for every craving.",
  },
  {
    title: "Easy Online Ordering",
    description:
      "Order in a few clicks and choose pickup or delivery, straight from our site.",
  },
];
