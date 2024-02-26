import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

const NavbarComp = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <input placeholder="Search for something" className="outline-none placeholder:text-sm rounded-lg" />
        <button><SettingsRoundedIcon /></button>
        <button><NotificationsNoneRoundedIcon /></button>
        <p>account</p>
      </div>
    </div>
  );
};

export default NavbarComp;
