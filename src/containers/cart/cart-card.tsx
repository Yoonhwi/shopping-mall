import { Button } from "@/components/ui/button";
import { Pages } from "@/constants";
import { toUrl } from "@/lib/utils";
import { CartContext } from "@/provider/cart-context";
import { CartItemType } from "@/types";
import { useContext } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useNavigate } from "react-router";

interface CartCardProps {
  data: CartItemType;
}

const CartCart = ({ data }: CartCardProps) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart } =
    useContext(CartContext);
  const sum = (data.product.price * data.quantity).toFixed(2);
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 items-center w-full border-b-2 py-4 relative">
      <img
        src={data.product.image}
        className="w-[150px] max-h-[200px] object-contain cursor-pointer"
        onClick={() =>
          navigate(toUrl(Pages.ProductDetail, { id: String(data.product.id) }))
        }
      />

      <div className="flex flex-col md:flex-row gap-2 flex-1">
        <div className="flex-1 flex flex-col gap-2 flex-wrap">
          <div>{data.product.category}</div>
          <div className="max-w-[300px]">{data.product.title}</div>
          <div>
            {data.product.price} X {data.quantity} = $ {sum}
          </div>
        </div>

        <div className="flex-1 flex items-center gap-2">
          <Button
            variant={"outline"}
            onClick={() => decreaseQuantity(data.product.id)}
          >
            -
          </Button>
          <Button
            disabled
            variant={"outline"}
            className="dark:text-white dark:opacity-100"
          >
            {data.quantity}
          </Button>
          <Button
            variant={"outline"}
            onClick={() => increaseQuantity(data.product.id)}
          >
            +
          </Button>
          <Button
            className="md:absolute md:top-6 md:right-6"
            variant={"ghost"}
            onClick={() => removeFromCart(data.product.id)}
          >
            <RiDeleteBin7Line />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCart;
