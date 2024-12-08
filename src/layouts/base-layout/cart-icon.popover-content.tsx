import { Button } from "@/components/ui/button";
import { Pages } from "@/constants";
import { CartContext } from "@/provider/cart-context";
import { useContext } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useNavigate } from "react-router";

const CartIconPopoverContent = () => {
  const { cart, sumPrice, removeFromCart } = useContext(CartContext);
  const navgate = useNavigate();

  return (
    <div className="w-full flex-col gap-2">
      <div className="max-h-[400px] overflow-y-auto">
        {cart.map((item) => {
          const product = item.product;
          return (
            <div className="flex gap-6 items-center px-4 py-6 border-b-1 relative">
              <img
                src={product.image}
                alt="product_img"
                className="w-16 h-16"
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500">
                  {product.category}
                </span>
                <span className="text-sm font-semibold max-w-[320px]">
                  {product.title}
                </span>
                <span>
                  {product.price} x {item.quantity} = ${" "}
                  {(product.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <Button
                className="absolute right-2 top-2"
                onClick={() => removeFromCart(product.id)}
                variant={"ghost"}
              >
                <RiDeleteBin7Line />
              </Button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end font-semibold text-2xl py-6 px-4 border-b-1">
        합계: $ {sumPrice}
      </div>
      <Button
        className="w-full m-0 h-16 rounded-none bg-primary-foreground text-primary hover:text-white dark:hover:text-black"
        onClick={() => navgate(Pages.Cart)}
      >
        장바구니 가기
      </Button>
    </div>
  );
};

export default CartIconPopoverContent;
