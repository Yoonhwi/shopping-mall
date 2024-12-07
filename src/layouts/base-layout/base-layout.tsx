import { ReactNode } from "react";
import BaseLayoutHeader from "./base-layout.header";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  //text-black dark:text-white bg-white dark:bg-black mt-[100px]
  return (
    <>
      <BaseLayoutHeader />
      <div className="min-h-[calc(100vh-100px)] mt-[100px] flex justify-center">
        <div className="w-full md:w-[680px] xl:w-[1280px] py-16">
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
