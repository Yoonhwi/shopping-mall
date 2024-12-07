import { Button } from "@/components";

const BaseLayoutHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-[100px] flex justify-center items-center">
      <div className="w-[1280px] flex justify-between items-center">
        <p>header</p>
        <Button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
          variant="ghost"
        >
          darkmode
        </Button>
      </div>
    </div>
  );
};

export default BaseLayoutHeader;
