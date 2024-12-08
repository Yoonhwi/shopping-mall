import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Pages } from "@/constants";
import { CartContext } from "@/provider/cart-context";
import { useContext, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router";
import CartIconPopoverContent from "./cart-icon.popover-content";

const HeaderCartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => navigate(Pages.Cart)}
          variant={"ghost"}
          className="[&_svg]:size-6"
          onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
        >
          <div className="relative">
            <LuShoppingCart />
            <div className="absolute top-[-10px] right-[-10px] min-w-5 min-h-5 bg-red-500 text-white text-xs flex justify-center items-center rounded-full">
              {cart.length}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[480px] p-0"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        align={window.innerWidth >= 1280 ? "end" : "center"}
      >
        <CartIconPopoverContent />
      </PopoverContent>
    </Popover>
  );
};

export default HeaderCartIcon;
