import { Button } from "@/components/ui/button";
import { CartCard, EmptyCart } from "@/containers";
import { BaseLayout } from "@/layouts";
import { CartContext } from "@/provider/cart-context";
import { useContext } from "react";

const Cart = () => {
  const { cart, sumPrice, removeAllFromCart } = useContext(CartContext);
  const handleCheckout = () => {
    // 계산 로직 추가
    removeAllFromCart();
  };

  return (
    <BaseLayout>
      {cart.length ? (
        <div className="w-full h-full flex flex-col gap-2 px-8">
          {cart.map((item) => {
            return <CartCard key={item.product.id} data={item} />;
          })}
          <div className="flex justify-end py-8 items-center gap-8">
            <div className="h-16 min-w-48 flex justify-center items-center bg-slate-100 gap-4 px-4 dark:text-primary-foreground">
              <span>합계:</span>
              <span>${sumPrice}</span>
            </div>
            <Button className="h-16 w-40 rounded-none" onClick={handleCheckout}>
              계산하기
            </Button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </BaseLayout>
  );
};

export default Cart;
