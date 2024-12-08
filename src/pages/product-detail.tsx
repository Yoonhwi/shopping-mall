import { Loading } from "@/components";
import { Button } from "@/components/ui/button";
import { Endpoints, Pages } from "@/constants";
import { BaseLayout } from "@/layouts";
import { toUrl } from "@/lib/utils";
import { CartContext } from "@/provider/cart-context";
import { axiosInstance } from "@/service/axios-instance";
import { ProductType } from "@/types";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetail = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { isInCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axiosInstance
      .get(toUrl(Endpoints.DetailProduct, { id }))
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <BaseLayout>
      {isLoading ? (
        <Loading />
      ) : product ? (
        <div className="w-full h-full flex flex-col xl:flex-row gap-8 items-center px-8 md:px-0">
          <div className="flex-1 flex-col items-center justify-center">
            <img className="max-h-[700px] object-contain" src={product.image} />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="text-3xl font-bold text-gray-300">
              {product.category}
            </div>
            <div className="text-5xl">{product.title}</div>
            <p className="text-5xl font-bold py-8">$ {product.price}</p>
            <p className="text-lg text-gray-400">{product.description}</p>
            <div className="w-full flex gap-2 md:gap-8 py-8">
              {isInCart(product.id) ? (
                <Button
                  disabled
                  className="bg-gray-500 border border-input dark:bg-background dark:text-white dark:hover:bg-gray-800 rounded-none px-2 py-1 md:px-16 md:py-8"
                >
                  장바구니에 담긴 제품
                </Button>
              ) : (
                <Button
                  variant={"outline"}
                  className="rounded-none px-16 py-8"
                  onClick={() => addToCart(product)}
                >
                  장바구니에 담기
                </Button>
              )}
              <Button
                className="bg-gray-500 border border-input dark:bg-background dark:text-white dark:hover:bg-gray-800 rounded-none px-2 py-1 md:px-16 md:py-8"
                onClick={() => navigate(Pages.Cart)}
              >
                장바구니로 이동
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>상품이 존재하지 않습니다.</div>
      )}
    </BaseLayout>
  );
};

export default ProductDetail;
