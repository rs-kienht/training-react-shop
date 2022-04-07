export type Product = {
  category: string,
  description: string,
  id: number;
  image: string;
  price: number;
  rating: {rate: number, count: number}
  title: string;
}
export type PromoCode = {
  code: string,
  discount: number,
  unit: string,
}