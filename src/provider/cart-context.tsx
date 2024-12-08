import { CartItemType, ProductType } from "@/types";
import { createContext } from "react";

interface CartContextInterface {
  cart: CartItemType[];
  sumPrice: string;
  isInCart: (productId: number) => boolean;
  addToCart: (item: ProductType) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  removeAllFromCart: () => void;
}

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  sumPrice: "0",
  isInCart: () => false,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeAllFromCart: () => {},
});
