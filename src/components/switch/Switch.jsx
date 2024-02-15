import { useState } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

const Switch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <label
        htmlFor="toggle4"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle4"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div
            className={`block h-7 w-12 rounded-full ${
              enabled ? "bg-black" : "bg-white"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full ${
              enabled ? "bg-white" : "bg-black"
            } transition ${enabled && "!right-1 !translate-x-full"}`}
          >
            <div className={`hidden ${enabled && "!block"}`}>
              <WbSunnyRoundedIcon style={{color:"black", height:"15px"}}/>
            </div>
            <div className={` ${enabled && "hidden"}`}>
              <DarkModeRoundedIcon style={{color:"whitesmoke", height:"15px"}}/>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
