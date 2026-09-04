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
  price: string;
  image?: string;
  alt?: string;
};

export const DISH_CATEGORIES = [
  "Dosa",
  "Biryani & More",
  "Tandoori Starters",
  "Vegetarian Curries",
  "Chicken Curries",
  "Indo-Chinese",
  "Goat & Lamb Curry",
] as const;

export function categorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export const DISHES: Dish[] = [
  // Dosa
  {
    category: "Dosa",
    name: "Masala Dosa",
    price: "$15.95",
    image: "/images/dish-masala-dosa.jpg",
    alt: "Crisp masala dosa served with a plate of accompaniments",
  },
  {
    category: "Dosa",
    name: "Paneer Dosa",
    price: "$16.95",
    image: "/images/dish-paneer-dosa.jpg",
    alt: "Paneer dosa filled with spiced cottage cheese",
  },
  {
    category: "Dosa",
    name: "Onion Dosa",
    price: "$10.95",
    image: "/images/dish-onion-dosa.jpg",
    alt: "Crisp onion dosa topped with onions",
  },

  // Biryani & More
  {
    category: "Biryani & More",
    name: "Chicken 65 Biryani",
    price: "$19.95",
    image: "/images/dish-chicken-65-biryani.jpg",
    alt: "Chicken 65 biryani served in a copper handi with raita and curry on the side",
  },
  {
    category: "Biryani & More",
    name: "Chicken Dum Biryani",
    price: "$19.95",
    image: "/images/dish-chicken-dum-biryani.jpg",
    alt: "Chicken dum biryani thali with raita, curry, onion and lemon",
  },
  {
    category: "Biryani & More",
    name: "Vegetarian Dum Biryani",
    price: "$16.95",
    image: "/images/dish-vegetarian-dum-biryani.jpg",
    alt: "Vegetarian dum biryani with assorted vegetables and basmati rice",
  },

  // Tandoori Starters
  { category: "Tandoori Starters", name: "Chicken Tikka", price: "$18.95" },
  {
    category: "Tandoori Starters",
    name: "Paneer Tikka",
    price: "$16.95",
    image: "/images/dish-paneer-tikka.jpg",
    alt: "Tandoori-grilled paneer tikka skewers",
  },
  {
    category: "Tandoori Starters",
    name: "Tandoori Chicken (Half)",
    price: "$18.95",
    image: "/images/dish-tandoori-chicken-half.jpg",
    alt: "Tandoori roasted chicken pieces with lemon and onion",
  },

  // Vegetarian Curries
  {
    category: "Vegetarian Curries",
    name: "Dal Makhani",
    price: "$19.95",
    image: "/images/dish-dal-makhani.jpg",
    alt: "Creamy dal makhani made with black lentils and kidney beans",
  },
  {
    category: "Vegetarian Curries",
    name: "Paneer Butter Masala",
    price: "$19.95",
    image: "/images/dish-paneer-butter-masala.jpg",
    alt: "Paneer butter masala in a rich tomato gravy",
  },
  {
    category: "Vegetarian Curries",
    name: "Palak Paneer",
    price: "$19.95",
    image: "/images/dish-palak-paneer.jpg",
    alt: "Palak paneer with soft paneer cubes in a spiced spinach gravy",
  },

  // Chicken Curries
  {
    category: "Chicken Curries",
    name: "Butter Chicken",
    price: "$21.95",
    image: "/images/dish-butter-chicken.jpg",
    alt: "Creamy butter chicken curry garnished with mint",
  },
  {
    category: "Chicken Curries",
    name: "Chicken Tikka Masala",
    price: "$21.95",
    image: "/images/dish-chicken-tikka-masala.jpg",
    alt: "Chicken tikka masala in a creamy tomato gravy",
  },
  {
    category: "Chicken Curries",
    name: "Chicken Madras",
    price: "$21.95",
    image: "/images/dish-chicken-madras.jpg",
    alt: "Dark, richly spiced Chicken Madras curry garnished with onion and lemon",
  },

  // Indo-Chinese
  {
    category: "Indo-Chinese",
    name: "Chicken 65",
    price: "$19.95",
    image: "/images/dish-chicken-65.jpg",
    alt: "Crispy Chicken 65 tossed with curry leaves, garlic and dry chillies",
  },
  {
    category: "Indo-Chinese",
    name: "Gobi 65",
    price: "$18.95",
    image: "/images/dish-gobi-65.jpg",
    alt: "Crispy fried Gobi 65 cauliflower florets",
  },
  {
    category: "Indo-Chinese",
    name: "Chilli Chicken",
    price: "$19.95",
    image: "/images/dish-chilli-chicken.jpg",
    alt: "Chilli chicken tossed with spring onion, peanuts and green chilli",
  },

  // Goat & Lamb Curry
  {
    category: "Goat & Lamb Curry",
    name: "Goat Curry",
    price: "$23.95",
    image: "/images/dish-goat-curry.jpg",
    alt: "Thick, dark, richly spiced goat curry",
  },
  {
    category: "Goat & Lamb Curry",
    name: "Goat Karahi",
    price: "$23.95",
    image: "/images/dish-goat-karahi.jpg",
    alt: "Goat karahi cooked with tomatoes and green chillies",
  },
  {
    category: "Goat & Lamb Curry",
    name: "Lamb Rogan Josh",
    price: "$23.95",
    image: "/images/dish-lamb-rogan-josh.jpg",
    alt: "Lamb rogan josh in a rich Kashmiri-style spiced gravy",
  },
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
