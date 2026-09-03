// Central place for anything that might change — copy, links, hours.
// Swap ORDER_URL for the real Dosa Hut Aspley ordering link before launch if this changes.

export const SITE = {
  name: "Dosa Hut Aspley",
  orderUrl: "https://aspley.dosahut.net.au/",
  phoneDisplay: "0466 977 674",
  phoneHref: "tel:+61466977674",
  addressLine1: "Shop 6, 46 Gayford Street",
  addressLine2: "Aspley, QLD 4032",
  addressFull: "Shop 6, 46 Gayford Street, Aspley QLD 4032",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dosa+Hut+Aspley+Shop+6+46+Gayford+Street+Aspley+QLD+4032",
  mainSiteUrl: "https://www.dosahut.net.au/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#why-us" },
  { label: "Location", href: "#location" },
];

export const HOURS = [
  { day: "Mon – Thu", time: "11:00 am – 9:30 pm" },
  { day: "Fri – Sat", time: "11:00 am – 10:00 pm" },
  { day: "Sunday", time: "12:00 pm – 9:30 pm" },
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
    alt: "Fragrant biryani rice garnished with peas and herbs",
  },
  {
    category: "Curries",
    name: "Butter Chicken",
    image: "/images/dish-butter-chicken.jpg",
    alt: "Creamy butter chicken curry in a cast iron bowl",
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
    title: "Authentic Indian Flavours",
    description:
      "Traditional recipes and bold spice blends, cooked the way they're meant to taste.",
  },
  {
    title: "Freshly Prepared",
    description:
      "Every dish is made fresh to order, never sitting around waiting for you.",
  },
  {
    title: "Dine-In & Takeaway",
    description:
      "Settle in at Aspley, or grab your favourites to enjoy at home — your call.",
  },
  {
    title: "Easy Online Ordering",
    description:
      "Order in a few clicks and choose pickup or delivery, straight from our site.",
  },
];
