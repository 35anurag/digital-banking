
import Mycards from "@/utils/Mycards";
import NavbarComp from "@/utils/NavbarComp";
import RecentTransaction from "@/utils/RecentTransaction";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-yellow-400 w-[1040px] h-[5rem]">
        <div className="pl-[1rem] pr-[3rem] pt-[20px] ">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[18px] font-semibold">Overview</p>
            <NavbarComp />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-5">
          <RecentTransaction />
          <Mycards />
        </div>
        <div className="pl-[1rem]">
          <h1>Weekly Activity</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
