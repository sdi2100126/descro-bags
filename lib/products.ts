export type Product = {
  id: string;
  name: string;
  category: 'bag' | 'accessory';
  sizes: { label: string; priceEUR: number }[];
  customization?: { note: string };
  colors?: string[];
  materials: string;
  dimensions: string;
  availability: 'in stock' | 'limited' | 'out of stock';
  mainImage: string;
  additionalImages: string[];
  shortDescription: string;
  fullDescription: string;
};

const customizationNote = {
  note: "Custom colours available: +€5 for a single custom colour, +€5 for a two-colour design, +€10 for a palette design (up to 5 colours). Ready-made pieces in standard colours are also kept in stock."
};

export function getStartingPrice(product: Product): string {
  if (!product.sizes || product.sizes.length === 0) {
    return "€0";
  }
  const minPrice = Math.min(...product.sizes.map(size => size.priceEUR));
  return product.sizes.length === 1 ? `€${minPrice}` : `From €${minPrice}`;
}

export const products: Product[] = [
  {
    id: 'amara',
    name: 'Amara',
    category: 'bag',
    sizes: [
      { label: 'S', priceEUR: 55 },
      { label: 'M', priceEUR: 60 }
    ],
    customization: customizationNote,
    colors: undefined,
    materials: 'Recycled t-shirt yarn (upcycled fabric)',
    dimensions: 'Dimensions coming soon',
    availability: 'in stock',
    mainImage: '/images/bag-tote.webp', // TEMPORARY: pending real photo selection from public/media/
    additionalImages: [
      '/images/bag-tote.webp', // TEMPORARY
      '/images/gallery-1.webp', // TEMPORARY
      '/images/gallery-3.webp' // TEMPORARY
    ],
    shortDescription: 'Handmade crochet bag',
    fullDescription: 'Handmade crochet bag – Amara design.'
  },
  {
    id: 'sirena',
    name: 'Sirena',
    category: 'bag',
    sizes: [
      { label: 'S', priceEUR: 60 },
      { label: 'L', priceEUR: 70 }
    ],
    customization: customizationNote,
    colors: undefined,
    materials: 'Recycled t-shirt yarn (upcycled fabric)',
    dimensions: 'Dimensions coming soon',
    availability: 'in stock',
    mainImage: '/images/bag-shoulder.webp', // TEMPORARY
    additionalImages: [
      '/images/bag-shoulder.webp', // TEMPORARY
      '/images/gallery-2.webp', // TEMPORARY
      '/images/gallery-4.webp' // TEMPORARY
    ],
    shortDescription: 'Handmade crochet bag',
    fullDescription: 'Handmade crochet bag – Sirena design.'
  },
  {
    id: 'mirae',
    name: 'Mirae',
    category: 'bag',
    sizes: [
      { label: 'One-size (M)', priceEUR: 45 }
    ],
    customization: customizationNote,
    colors: undefined,
    materials: 'Recycled t-shirt yarn (upcycled fabric)',
    dimensions: 'Dimensions coming soon',
    availability: 'in stock',
    mainImage: '/images/bag-bucket.webp', // TEMPORARY
    additionalImages: [
      '/images/bag-bucket.webp', // TEMPORARY
      '/images/gallery-5.webp', // TEMPORARY
      '/images/gallery-2.webp' // TEMPORARY
    ],
    shortDescription: 'Handmade crochet bag',
    fullDescription: 'Handmade crochet bag – Mirae design.'
  },
  {
    id: 'divina',
    name: 'Divina',
    category: 'bag',
    sizes: [
      { label: 'One-size (S)', priceEUR: 40 }
    ],
    customization: customizationNote,
    colors: undefined,
    materials: 'Recycled t-shirt yarn (upcycled fabric)',
    dimensions: 'Dimensions coming soon',
    availability: 'in stock',
    mainImage: '/images/bag-mini.webp', // TEMPORARY
    additionalImages: [
      '/images/bag-mini.webp', // TEMPORARY
      '/images/insta-1.webp', // TEMPORARY
      '/images/insta-3.webp' // TEMPORARY
    ],
    shortDescription: 'Handmade crochet bag',
    fullDescription: 'Handmade crochet bag – Divina design.'
  },
  {
    id: 'cleo',
    name: 'Cleo',
    category: 'bag',
    sizes: [
      { label: 'One-size (L)', priceEUR: 70 }
    ],
    customization: customizationNote,
    colors: undefined,
    materials: 'Recycled t-shirt yarn (upcycled fabric)',
    dimensions: 'Dimensions coming soon',
    availability: 'in stock',
    mainImage: '/images/bag-tote.webp', // TEMPORARY (reusing)
    additionalImages: [
      '/images/bag-tote.webp', // TEMPORARY
      '/images/gallery-1.webp', // TEMPORARY
      '/images/gallery-3.webp' // TEMPORARY
    ],
    shortDescription: 'Handmade crochet bag',
    fullDescription: 'Handmade crochet bag – Cleo design.'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.id === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};