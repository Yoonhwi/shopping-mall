import { Button } from "@/components/ui/button";
import { Pages } from "@/constants";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col gap-6 items-center justify-center px-8 md:px-0">
      <GiShoppingCart className="text-[100px] md:text-[400px]" />
      <h1 className="text-3xl font-bold">장바구니가 비어있습니다.</h1>
      <p className="text-lg">장바구니에 상품을 넣어주세요.</p>
      <Button
        variant={"ghost"}
        className="border-b-2 rounded-none px-2"
        onClick={() => navigate(Pages.Home)}
      >
        계속 쇼핑하기
      </Button>
    </div>
  );
};

export default EmptyCart;
