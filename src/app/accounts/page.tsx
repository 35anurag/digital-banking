import React from "react";
import NavbarComp from "@/utils/NavbarComp";

const accounts = () => {
  return (
    <div>
     <div className="bg-yellow-400 w-[1040px] h-[5rem]">
        <div className="pl-[1rem] pr-[3rem] pt-[20px] ">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[18px] font-semibold">Accounts</p>
            <NavbarComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default accounts;
