import { CartItemType, ProductType } from "@/types";
import { useCallback, useMemo, useState } from "react";
import { CartContext } from "./cart-context";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: AuthProviderProps) => {
  const [cart, setCart] = useState<CartItemType[]>(() => {
    const localStorageItems = localStorage.getItem("cart");
    if (localStorageItems) {
      return JSON.parse(localStorageItems);
    }
    return [];
  });

  const isInCart = (productId: number) => {
    return cart.some((cartItem) => cartItem.product.id === productId);
  };

  const addToCart = useCallback(
    (item: ProductType) => {
      const isItemInCart = cart.some(
        (cartItem) => cartItem.product.id === item.id
      );
      if (isItemInCart) return;

      setCart([...cart, { product: item, quantity: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { product: item, quantity: 1 }])
      );
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      const newCart = cart.filter(
        (cartItem) => cartItem.product.id !== productId
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    [cart]
  );

  const increaseQuantity = useCallback(
    (productId: number) => {
      const newCart = cart.map((cartItem) => {
        if (cartItem.product.id === productId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    [cart]
  );

  const decreaseQuantity = useCallback(
    (productId: number) => {
      const newCart = cart.filter((cartItem) => {
        if (cartItem.product.id === productId) {
          if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            return true;
          }

          return false;
        }
        return true;
      });

      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    [cart]
  );

  const removeAllFromCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
  }, []);

  const sumPrice = useMemo(() => {
    return cart
      .reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0)
      .toFixed(2);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        sumPrice,
        isInCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
