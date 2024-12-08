import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { useContext, useMemo } from "react";
import { AuthContext } from "@/provider/auth-context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router";
import { Pages } from "@/constants";
import { CartContext } from "@/provider/cart-context";

const BaseLayoutHeader = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { currentUser, signOut } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const loginStatusBtn = useMemo(() => {
    return [
      {
        icon: <FiUser size={50} />,
        onClick: () => console.log("my page"),
        tooltip: "마이페이지",
      },
      { icon: <ImExit />, onClick: signOut, tooltip: "로그아웃" },
      {
        icon: isDark ? <MdOutlineWbSunny /> : <LuMoonStar />,
        onClick: toggleDarkMode,
        tooltip: "다크모드",
      },
    ];
  }, [isDark, signOut, toggleDarkMode]);

  const logoutStatusBtn = useMemo(() => {
    return [
      {
        icon: <FiUser size={50} />,
        onClick: () => navigate(Pages.SignIn),
        tooltip: "로그인",
      },
      {
        icon: isDark ? <MdOutlineWbSunny /> : <LuMoonStar />,
        onClick: toggleDarkMode,
        tooltip: "다크모드",
      },
    ];
  }, [isDark, navigate, toggleDarkMode]);

  return (
    <div className="fixed top-0 left-0 right-0 h-[100px] flex justify-center items-center shadow-md dark:shadow-[0px_4px_6px_rgba(255,255,255,0.2)] z-10">
      <div className="w-full md:w-[680px] xl:w-[1280px] flex justify-between items-center px-8 md:px-0">
        <h1
          className="text-2xl font-[700] cursor-pointer"
          onClick={() => navigate(Pages.Home)}
        >
          Shop
        </h1>
        <div className="flex gap-3">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => navigate(Pages.Cart)}
                  variant={"ghost"}
                  className="[&_svg]:size-6"
                >
                  <div className="relative">
                    <LuShoppingCart />
                    <div className="absolute top-[-10px] right-[-10px] min-w-5 min-h-5 bg-red-500 text-white text-xs flex justify-center items-center rounded-full">
                      {cart.length}
                    </div>
                  </div>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">장바구니</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {(currentUser ? loginStatusBtn : logoutStatusBtn).map(
            (btn, index) => (
              <TooltipProvider key={index} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={btn.onClick}
                      variant={"ghost"}
                      className="[&_svg]:size-6"
                    >
                      {btn.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{btn.tooltip}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseLayoutHeader;
