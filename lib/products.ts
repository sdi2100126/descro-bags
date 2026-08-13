export type Product = {
  id: string;
  name: string;
  price: string; // keep as string for display, could be number but we keep currency
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  additionalImages: string[];
  colors?: string[]; // if applicable
  materials: string;
  dimensions: string; // e.g., "W 12\" x H 14\" x D 5\""
  availability: 'in stock' | 'limited' | 'out of stock';
};

export const products: Product[] = [
  {
    id: 'ivory-tote',
    name: 'The Ivory Tote',
    price: '$148',
    shortDescription: 'Handmade cream crochet tote bag with wooden handles on warm beige linen',
    fullDescription: `Our Ivory Tote is a timeless, everyday companion crafted from soft, durable cotton yarn.Each bag is crocheted by hand, featuring sturdy wooden handles that provide both comfort and style.The spacious interior holds all your essentials, while the open top allows for easy access.Perfect for market trips, beach days, or as an elegant work bag.`,
    mainImage: '/images/bag-tote.webp',
    additionalImages: [
      '/images/bag-tote.webp',
      '/images/gallery-1.webp',
      '/images/gallery-3.webp'
    ],
    materials: '100% natural cotton yarn, solid wood handles',
    dimensions: 'W 13\" x H 15\" x D 6\" (handles add 9\" rise)',
    availability: 'in stock'
  },
  {
    id: 'blush-carry',
    name: 'The Blush Carry',
    price: '$132',
    shortDescription: 'Handmade blush pink crochet shoulder bag on a cream stone pedestal',
    fullDescription: `The Blush Carry offers a delicate pop of color with its soft blush pink hue.Designed as a shoulder bag, it Features an adjustable strap for comfortable wear and a secure closure to keep your belongings safe.Ideal for daily errands, casual outings, or adding a touch of femininity to any ensemble.`,
    mainImage: '/images/bag-shoulder.webp',
    additionalImages: [
      '/images/bag-shoulder.webp',
      '/images/gallery-2.webp',
      '/images/gallery-4.webp'
    ],
    materials: '100% natural cotton yarn, wooden shoulder strap',
    dimensions: 'W 11\" x H 12\" x D 4\" (strap length 24\"-36\")',
    availability: 'in stock'
  },
  {
    id: 'sage-bucket',
    name: 'The Sage Bucket',
    price: '$156',
    shortDescription: 'Handmade sage green crochet bucket bag hanging on a wooden hook',
    fullDescription: `Our Sage Bucket bag blends earthy tone with functional design.The bucket shape provides ample space, while the drawstring closure keeps contents secure.Carry it by the top handle or wear it crossbody with the removable strap.Versatile for work, travel, or as a stylish everyday bag.`,
    mainImage: '/images/bag-bucket.webp',
    additionalImages: [
      '/images/bag-bucket.webp',
      '/images/gallery-5.webp',
      '/images/gallery-2.webp'
    ],
    materials: '100% natural cotton yarn, wooden drawstring, leather accent strap',
    dimensions: 'W 14\" x H 16\" x D 7\"',
    availability: 'limited'
  },
  {
    id: 'cocoa-mini',
    name: 'The Cocoa Mini',
    price: '$118',
    shortDescription: 'Small handmade warm brown crochet mini bag with a golden chain strap',
    fullDescription: `The Cocoa Mini is our petite yet practical offering, perfect for evenings out or when you only need to carry the essentials.Its warm brown shade complements any outfit, and the gleaming gold-tone chain strap adds a touch of sophistication.Includes an inner pocket for cards or cash.`,
    mainImage: '/images/bag-mini.webp',
    additionalImages: [
      '/images/bag-mini.webp',
      '/images/insta-1.webp',
      '/images/insta-3.webp'
    ],
    materials: '100% natural cotton yarn, gold-tone metal chain strap',
    dimensions: 'W 8\" x H 9\" x D 3\"',
    availability: 'in stock'
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.id === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};