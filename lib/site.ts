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
  cateringUrl: "https://www.dosahut.net.au/catering/indian-catering-sunshine-coast/",
  instagramUrl: "https://www.instagram.com/dosahut_sunshinecoast/?hl=en",
  facebookUrl: "https://www.facebook.com/people/Dosa-Hut-Sunshine-Coast/61573654335879/",
  uberEatsUrl: "https://www.ubereats.com/au/store/dosa-hut-sunshine-coast/DWfGOBKaTI2wGq4K5eUU8A",
  doorDashUrl: "https://www.doordash.com/store/dosa-hut-sunshine-coast-buddina-34065779/69533746/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Location", href: "#location" },
];

export const HOURS = [
  { day: "Mon – Thu", time: "11:00 am – 2:30 pm, 4:00 pm – 9:30 pm" },
  { day: "Fri – Sun", time: "11:00 am – 9:30 pm" },
];

export type Dish = {
  category: string;
  name: string;
  image?: string;
  alt?: string;
};

export const DISH_CATEGORIES = [
  "Dosa",
  "Biryani",
  "Curries",
  "Tandoori Starters",
  "Indian Street Food",
] as const;

export const DISHES: Dish[] = [
  // Dosa
  {
    category: "Dosa",
    name: "Masala Dosa",
    image: "/images/dish-masala-dosa.jpg",
    alt: "Crisp masala dosa served with a plate of accompaniments",
  },
  { category: "Dosa", name: "Paneer Dosa" },
  { category: "Dosa", name: "Mysore Masala Dosa" },
  { category: "Dosa", name: "Ghee Podi Dosa" },
  { category: "Dosa", name: "Onion Dosa" },
  { category: "Dosa", name: "Ghee Plain Dosa" },

  // Biryani
  {
    category: "Biryani",
    name: "Chicken 65 Biryani",
    image: "/images/dish-chicken-65-biryani.jpg",
    alt: "Chicken 65 biryani served in a copper handi with raita and curry on the side",
  },
  { category: "Biryani", name: "Chicken Dum Biryani" },
  { category: "Biryani", name: "Chicken Tikka Biryani" },
  { category: "Biryani", name: "Vegetarian Dum Biryani" },
  { category: "Biryani", name: "Paneer 65 Biryani" },
  { category: "Biryani", name: "Egg Biryani" },

  // Curries
  {
    category: "Curries",
    name: "Butter Chicken",
    image: "/images/dish-butter-chicken.jpg",
    alt: "Creamy butter chicken curry garnished with mint",
  },
  { category: "Curries", name: "Chicken Tikka Masala" },
  { category: "Curries", name: "Chicken Kolhapuri" },
  { category: "Curries", name: "Kadai Chicken" },
  { category: "Curries", name: "Chicken Madras" },
  { category: "Curries", name: "Dal Makhani" },

  // Tandoori Starters
  {
    category: "Tandoori Starters",
    name: "Garlic Naan",
    image: "/images/dish-garlic-naan.jpg",
    alt: "Freshly baked garlic naan bread with curry and samosa",
  },
  { category: "Tandoori Starters", name: "Chicken Tikka" },
  { category: "Tandoori Starters", name: "Paneer Tikka" },
  { category: "Tandoori Starters", name: "Tandoori Chicken Half" },
  { category: "Tandoori Starters", name: "Seekh Kebab (Lamb)" },
  { category: "Tandoori Starters", name: "Chatpata Soya" },

  // Indian Street Food
  {
    category: "Indian Street Food",
    name: "Pani Puri Chaat",
    image: "/images/dish-pani-puri.jpg",
    alt: "Crisp pani puri street snack served with tangy filling",
  },
  {
    category: "Indian Street Food",
    name: "Chicken 65",
    image: "/images/dish-chicken-65.jpg",
    alt: "Spiced Chicken 65 tossed with crispy onions and chillies",
  },
  { category: "Indian Street Food", name: "Dahi Puri" },
  { category: "Indian Street Food", name: "Samosa" },
  { category: "Indian Street Food", name: "Dahi Bhalla" },
  { category: "Indian Street Food", name: "Vada" },
];

export type Stat = {
  value: string;
  label: string;
};

export const STORY_STATS: Stat[] = [
  { value: "25+", label: "Branches Across Australia" },
  { value: "7M+", label: "Customers Served Yearly" },
  { value: "2025", label: "Culinary & Hospitality Award" },
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
