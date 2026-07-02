export interface Coffee {
  id: string;
  name: string;
  subtitle: string;
  categoryId: string;
  image: string;
  rating: number;
  ratingCount: number;
  price: number;
  description: string;
  sizes: string[];
  isAvailable: boolean;
  promo: boolean;
  promoText: string;
}
