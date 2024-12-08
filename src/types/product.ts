export type ProductCategoryType = {
  label: string;
  value: string;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItemType = {
  product: ProductType;
  quantity: number;
};
