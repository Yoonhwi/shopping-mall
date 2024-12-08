import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pages } from "@/constants";
import { useDarkMode } from "@/hooks";
import { AuthContext } from "@/provider/auth-context";
import { useContext, useMemo } from "react";
import { FiUser } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { useNavigate } from "react-router";
import HeaderCartIcon from "./header.cart-icon";

const BaseLayoutHeader = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { currentUser, signOut } = useContext(AuthContext);
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
          <HeaderCartIcon />

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
