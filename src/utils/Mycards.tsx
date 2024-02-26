import React from "react";
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';

const Mycards = () => {
  return (
    <div className="pt-[10px] pl-[1rem] pr-[3rem] flex flex-col gap-2 ">
      <h1 className="text-[15px] font-semibold">My Cards</h1>
      <div className="bg-yellow-400 w-[20rem] h-auto p-2 rounded-xl">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="text-[12px] font-medium">Balance</p>
              <p className="text-[15px] font-medium">$5,700</p>
            </div>
            <p><DatasetOutlinedIcon /></p>
          </div>
          <div className="flex flex-row gap-8">
            <div>
              <p className="text-[12px] font-medium">Card Holder</p>
              <p className="text-[15px] font-medium">John doe</p>
            </div>
            <div>
              <p className="text-[12px] font-medium">Valid Thru</p>
              <p className="text-[15px] font-medium">12/22</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between bg-yellow-600">
            <p>9327459375</p>
            <p>circle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycards;
