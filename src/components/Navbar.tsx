// "use client";
import Link from "next/link";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import AssuredWorkloadRoundedIcon from "@mui/icons-material/AssuredWorkloadRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-yellow-400 w-[15rem] h-screen">
        <div className="pl-[3rem] pt-[1rem] flex flex-row">
          <div className=" ">
            <h1 className="text-xl font-bold mb-[60px]">Bank</h1>
            <div className="flex flex-col justify-center gap-8 font-medium text-[15px] opacity-75">
              <div className="flex flex-row gap-2 items-center">
                <HomeRoundedIcon className="w-6 h-6" />
                <Link href="/">Dashboard</Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <ReceiptLongRoundedIcon className="w-6 h-6" />
                <Link href="/transactions">Transactions</Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <AccountBalanceWalletRoundedIcon className="w-6 h-6" />
                <Link href="/accounts">Accounts</Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <AssessmentRoundedIcon className="w-6 h-6" />
                <Link href="/investments">Investments</Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CreditCardRoundedIcon className="w-6 h-6" />
                <Link href="/creditcards">Credit Cards</Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <AssuredWorkloadRoundedIcon className="w-6 h-6" />
                <Link href="/loans">Loans</Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <ConstructionRoundedIcon className="w-6 h-6" />
                <Link href="/services">Services</Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <SettingsRoundedIcon className="w-6 h-6" />
                <Link href="/setting">Setting</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-yellow-400 w-screen h-[5rem] flex ">
        <NavbarComp />
      </div> */}
    </div>
  );
};

export default Navbar;
