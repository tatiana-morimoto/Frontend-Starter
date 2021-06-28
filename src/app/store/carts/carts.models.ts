interface Product {
  id: number;
  quantity: number;
}

export interface Cart {
  id: number;
  products: Product[];
}
