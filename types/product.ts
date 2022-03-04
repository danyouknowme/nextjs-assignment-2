export interface Product {
  id: string;
  name: string;
  variants: Variant[];
  sku: string;
  brand: string;
  description: string;
}

export interface Variant {
  stock: number;
  size: string;
  discount: number;
  price: number;
  imageUrl: string;
  color: string;
  sku: string;
}

export interface GetProductItems {
  items: Product[];
}

export interface ProductProps {
  product: Product;
}

export interface LikeButtonProps {
  liked: boolean;
  setLiked: (value: boolean) => void;
}
