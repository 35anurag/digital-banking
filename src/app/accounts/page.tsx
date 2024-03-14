"use client";

import NavbarComp from "@/utils/NavbarComp";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Barchart from "@/components/Barchart";
import Demo from "../../components/Demo";
import { data } from "../../Data/data";
import Mycards from "@/utils/Mycards";
// import { BarChart, EventProps } from '@tremor/react';
// import { useState } from 'react';

// type Chartdata ={
//   days: string[],
//   datasets: {label:string, data:number[]}[]
// }

const accounts = () => {
  // const [chartData, setChartData] = useState<EventProps>()
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

      <div className="pl-[30px] pt-[30px] pr-[3rem] flex flex-row justify-between">
        <div className="bg-yellow-500 p-5 pl-8 pr-8 rounded-[10px] flex flex-row gap-4 items-center">
          <div className="bg-white rounded-full p-2">
            <MonetizationOnRoundedIcon />
          </div>
          <div>
            <p className="font-medium opacity-60 text-[13px]">My Balance</p>
            <p className="font-bold text-[16px]">$12,000</p>
          </div>
        </div>

        <div className="bg-yellow-500 p-5 pl-8 pr-8 rounded-[10px] flex flex-row gap-4 items-center">
          <div className="bg-white rounded-full p-2">
            <AccountBalanceWalletRoundedIcon />
          </div>
          <div>
            <p className="font-medium opacity-60 text-[13px]">Income</p>
            <p className="font-bold text-[16px]">$5,600</p>
          </div>
        </div>

        <div className="bg-yellow-500 p-5 pl-8 pr-8 rounded-[10px] flex flex-row gap-4 items-center">
          <div className="bg-white rounded-full p-2">
            <CreditCardRoundedIcon />
          </div>
          <div>
            <p className="font-medium opacity-60 text-[13px]">Expense</p>
            <p className="font-bold text-[16px]">$3,400</p>
          </div>
        </div>

        <div className="bg-yellow-500 p-5 pl-8 pr-8 rounded-[10px] flex flex-row gap-4 items-center">
          <div className="bg-white rounded-full p-2">
            <SavingsRoundedIcon />
          </div>
          <div>
            <p className="font-medium opacity-60 text-[13px]">Total Saving</p>
            <p className="font-bold text-[16px]">$7,900</p>
          </div>
        </div>
      </div>

      <div className="pl-[2rem] pr-[3rem] pt-[20px] flex flex-row  justify-between gap-[4rem] h-auto">
        <div className="flex flex-col gap-2">
          <h1>Last Transaction</h1>
          <div className="bg-yellow-400 w-[600px] h-[180px] flex flex-col gap-4 p-3 rounded-lg">
            <div className="flex flex-row items-center justify-center gap-7">
              <div className="flex flex-row items-center flex-shrink-0 gap-5 w-[13rem]">
                <p className="bg-white p-1 rounded-full">
                  <NotificationsRoundedIcon />
                </p>
                <div>
                  <p className="text-[15px] font-medium">
                    Spotify Subscription
                  </p>
                  <p className="text-[13px] opacity-70">25 Jan 2021</p>
                </div>
              </div>
              <p className="text-sm opacity-70 font-medium w-[4rem] flex-shrink-0">Shopping</p>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">3085409438</p>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">Pending</p>
              <p className="text-sm text-red-500 font-medium flex-shrink-0">-$150</p>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center flex-shrink-0 gap-5 w-[13rem]">
                <p className="bg-white p-1 rounded-full">
                  <NotificationsRoundedIcon />
                </p>
                <div>
                  <p className="text-[15px] font-medium">
                    Emily Wilson
                  </p>
                  <p className="text-[13px] opacity-70">25 Jan 2021</p>
                </div>
              </div>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">Transfer</p>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">3085409438</p>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">Pending</p>
              <p className="text-sm text-red-500 font-medium flex-shrink-0">-$150</p>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-5 flex-shrink-0 w-[13rem]">
                <p className="bg-white p-1 rounded-full">
                  <NotificationsRoundedIcon />
                </p>
                <div>
                  <p className="text-[15px] font-medium">
                    Mobile Service
                  </p>
                  <p className="text-[13px] opacity-70">25 Jan 2021</p>
                </div>
              </div>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">Service</p>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">3085409438</p>
              <p className="text-sm opacity-70 font-medium flex-shrink-0">Completed</p>
              <p className="text-sm text-green-600 font-medium flex-shrink-0">$550</p>
            </div>
               

          </div>
        </div>
        <Mycards />
      </div>

      <div className="pl-[2rem] pt-[20px]">
        <p>Debit and Credit Overview</p>
        <Barchart ChartData={data} />
        <Demo />
      </div>
    </div>
  );
};

export default accounts;
