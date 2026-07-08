export interface Product {
  name: string;
  brand: string;
  price: string;
  img: string;
  hover: string | null;
  category: string;
  tag: string | null;
  layout: "normal" | "tall" | "wide" | "featured";
}

export interface ScatteredObject {
  img: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
  speed: number;
}

export interface GalleryImage {
  img: string;
  name: string;
  brand: string;
}

export interface CarouselItem {
  name: string;
  brand: string;
  img: string;
}

export interface MarqueeItem {
  brand: string;
  name: string;
  disc: string;
}

export const productData: Product[] = [
  { name: "Air Jordan 1 Mid", brand: "Nike", price: "KSh 18,500", img: "/images/nike-1.webp", hover: "/images/nike-2.webp", category: "nike", tag: "New", layout: "featured" },
  { name: "Air Jordan 4 RM", brand: "Nike", price: "KSh 22,000", img: "/images/nike-3.webp", hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Air Max 90 PRM", brand: "Nike", price: "KSh 16,500", img: "/images/nike-4.webp", hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Air Max DN8", brand: "Nike", price: "KSh 19,000", img: "/images/nike-5.webp", hover: null, category: "nike", tag: null, layout: "tall" },
  { name: "Air Vapormax Plus", brand: "Nike", price: "KSh 21,500", img: "/images/nike-6.webp", hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "ACG Zegama Trail", brand: "Nike", price: "KSh 24,000", img: "/images/nike-7.webp", hover: null, category: "nike", tag: null, layout: "wide" },
  { name: "Air Max 95 Big Bubble", brand: "Nike", price: "KSh 20,000", img: "/images/nike-8.webp", hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Nike Ava X", brand: "Nike", price: "KSh 14,500", img: "/images/nike-9.webp", hover: null, category: "nike", tag: "Sale", layout: "normal" },
  { name: "Shox R4 SE Fade", brand: "Nike", price: "KSh 17,500", img: "/images/nike-10.webp", hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Vomero 18", brand: "Nike", price: "KSh 15,000", img: "/images/nike-11.webp", hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Phantom 6", brand: "Nike", price: "KSh 16,000", img: "/images/nike-12.webp", hover: null, category: "nike", tag: null, layout: "normal" },

  { name: "Samba OG Toy Story", brand: "Adidas", price: "KSh 15,500", img: "/images/adidas-1.webp", hover: null, category: "adidas", tag: "New", layout: "normal" },
  { name: "Adizero Adios Pro 4", brand: "Adidas", price: "KSh 28,000", img: "/images/adidas-2.webp", hover: null, category: "adidas", tag: null, layout: "normal" },
  { name: "Handball Spezial", brand: "Adidas", price: "KSh 14,000", img: "/images/adidas-3.webp", hover: "/images/adidas-6.webp", category: "adidas", tag: null, layout: "wide" },
  { name: "Handball Spezial", brand: "Adidas", price: "KSh 14,000", img: "/images/adidas-4.webp", hover: "/images/adidas-7.webp", category: "adidas", tag: null, layout: "normal" },
  { name: "Runfalcon 6", brand: "Adidas", price: "KSh 9,500", img: "/images/adidas-8.webp", hover: "/images/adidas-9.webp", category: "adidas", tag: "Sale", layout: "normal" },
  { name: "Samba OG Brown", brand: "Adidas", price: "KSh 16,000", img: "/images/adidas-10.webp", hover: null, category: "adidas", tag: null, layout: "tall" },
  { name: "Hyperboost Edge", brand: "Adidas", price: "KSh 13,000", img: "/images/adidas-11.webp", hover: null, category: "adidas", tag: null, layout: "normal" },
  { name: "Training Spezial", brand: "Adidas", price: "KSh 12,000", img: "/images/adidas-12.webp", hover: null, category: "adidas", tag: null, layout: "normal" },

  { name: "MB.05 Lo Team", brand: "Puma", price: "KSh 17,000", img: "/images/puma-1.webp", hover: "/images/puma-2.webp", category: "puma", tag: null, layout: "normal" },
  { name: "Scuderia Ferrari Suede", brand: "Puma", price: "KSh 19,500", img: "/images/puma-3.webp", hover: "/images/puma-4.webp", category: "puma", tag: null, layout: "normal" },
  { name: "Speedcat Sneakers", brand: "Puma", price: "KSh 14,500", img: "/images/puma-5.webp", hover: "/images/puma-6.webp", category: "puma", tag: "New", layout: "featured" },
  { name: "Deviate NITRO Elite", brand: "Puma", price: "KSh 22,000", img: "/images/puma-7.webp", hover: null, category: "puma", tag: null, layout: "normal" },
  { name: "Velocity NITRO 5", brand: "Puma", price: "KSh 16,000", img: "/images/puma-8.webp", hover: null, category: "puma", tag: null, layout: "normal" },
  { name: "MagMax NITRO 2", brand: "Puma", price: "KSh 18,500", img: "/images/puma-9.webp", hover: null, category: "puma", tag: null, layout: "normal" },
];

export const scatteredObjects: ScatteredObject[] = [
  { img: "/images/nike-1.webp", x: 5, y: 15, size: 180, rotate: -12, speed: 0.3 },
  { img: "/images/adidas-3.webp", x: 85, y: 25, size: 160, rotate: 8, speed: 0.5 },
  { img: "/images/puma-5.webp", x: 10, y: 55, size: 200, rotate: -5, speed: 0.4 },
  { img: "/images/nike-7.webp", x: 90, y: 65, size: 170, rotate: 15, speed: 0.6 },
  { img: "/images/adidas-10.webp", x: 50, y: 35, size: 140, rotate: -20, speed: 0.35 },
  { img: "/images/puma-3.webp", x: 75, y: 80, size: 190, rotate: 10, speed: 0.45 },
  { img: "/images/nike-5.webp", x: 20, y: 85, size: 150, rotate: -8, speed: 0.55 },
  { img: "/images/adidas-1.webp", x: 60, y: 10, size: 130, rotate: 12, speed: 0.25 },
];

export const galleryImages: GalleryImage[] = [
  { img: "/images/nike-1.webp", name: "Air Jordan 1 Mid", brand: "Nike" },
  { img: "/images/adidas-3.webp", name: "Handball Spezial", brand: "Adidas" },
  { img: "/images/puma-5.webp", name: "Speedcat", brand: "Puma" },
  { img: "/images/nike-7.webp", name: "ACG Zegama Trail", brand: "Nike" },
  { img: "/images/adidas-10.webp", name: "Samba OG", brand: "Adidas" },
  { img: "/images/puma-3.webp", name: "Scuderia Ferrari", brand: "Puma" },
  { img: "/images/nike-5.webp", name: "Air Max DN8", brand: "Nike" },
  { img: "/images/adidas-1.webp", name: "Samba OG Toy Story", brand: "Adidas" },
  { img: "/images/puma-7.webp", name: "Deviate NITRO", brand: "Puma" },
  { img: "/images/nike-10.webp", name: "Shox R4", brand: "Nike" },
  { img: "/images/adidas-11.webp", name: "Hyperboost Edge", brand: "Adidas" },
  { img: "/images/puma-8.webp", name: "Velocity NITRO 5", brand: "Puma" },
];

export const carouselItems: CarouselItem[] = [
  { name: "Air Jordan 1 Mid", brand: "Nike", img: "/images/nike-1.webp" },
  { name: "Air Max DN8", brand: "Nike", img: "/images/nike-5.webp" },
  { name: "Samba OG Toy Story", brand: "Adidas", img: "/images/adidas-1.webp" },
  { name: "Handball Spezial", brand: "Adidas", img: "/images/adidas-3.webp" },
  { name: "Speedcat", brand: "Puma", img: "/images/puma-5.webp" },
  { name: "MB.05 Lo", brand: "Puma", img: "/images/puma-1.webp" },
  { name: "Air Vapormax Plus", brand: "Nike", img: "/images/nike-6.webp" },
  { name: "Samba OG Brown", brand: "Adidas", img: "/images/adidas-10.webp" },
];

export const marqueeItems: MarqueeItem[] = [
  { brand: "Nike", name: "Air Max", disc: "30% OFF" },
  { brand: "Adidas", name: "Samba OG", disc: "25% OFF" },
  { brand: "Puma", name: "Speedcat", disc: "40% OFF" },
  { brand: "Nike", name: "Vomero", disc: "20% OFF" },
];
