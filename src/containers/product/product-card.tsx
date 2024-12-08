import { Button } from "@/components/ui/button";
import { Pages } from "@/constants";
import { CartContext } from "@/provider/cart-context";
import { ProductType } from "@/types";
import { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const { isInCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-[400px] border-solid border-2 border-gray-200 rounded-lg flex flex-col gap-4 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
      onClick={() => navigate(`${Pages.Product}/${product.id}`)}
    >
      <div className="w-full h-[260px] p-4 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1 w-full flex flex-col items-center gap-8">
        <h2 className="max-w-[160px] text-ellipsis overflow-hidden whitespace-nowrap">
          {product.title}
        </h2>
        <div className="flex justify-between w-full max-w-[300px] px-8 items-center ">
          {isInCart(product.id) ? (
            <Button variant={"secondary"} disabled>
              장바구니에 담긴 제품
            </Button>
          ) : (
            <Button
              variant={"outline"}
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              장바구니에 담기
            </Button>
          )}
          <p className="text-lg">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
