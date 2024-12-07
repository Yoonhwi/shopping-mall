import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { ImExit } from "react-icons/im";

const BaseLayoutHeader = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const headerBtn = [
    { icon: <LuShoppingCart />, onClick: () => console.log("cart") },
    { icon: <FiUser size={50} />, onClick: () => console.log("user") },
    { icon: <ImExit />, onClick: () => console.log("exit") },
    {
      icon: isDark ? <MdOutlineWbSunny /> : <LuMoonStar />,
      onClick: toggleDarkMode,
    },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 h-[100px] flex justify-center items-center shadow-md z-10">
      <div className="w-full md:w-[680px] xl:w-[1280px] flex justify-between items-center px-8">
        <h1>Shop</h1>
        <div className="flex gap-3">
          {headerBtn.map((btn, index) => (
            <Button
              key={index}
              onClick={btn.onClick}
              variant={"ghost"}
              className="[&_svg]:size-6"
            >
              {btn.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseLayoutHeader;
