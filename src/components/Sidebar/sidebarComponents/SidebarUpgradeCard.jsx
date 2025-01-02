import {React, useState} from "react";
import { PiLockKeyOpen } from "react-icons/pi";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function SidebarUpgradeCard() {
  const [hide, setHide] = useState(false);
  return (
    <div className={`text-slidebarColor bg-upgradeCardColor bg-opacity-20 text-sm m-5 p-5 rounded-md ${hide && "hidden"}`}>
      <div className="relative">
        <div
          className="absolute top-0 right-0 text-xl text-gray-400 hover:text-gray-300 transition-text duration-200  cursor-pointer"
          onClick={() => {
            setHide(true);
          }}
        >
          <RxCross2 />
        </div>
        <div className="text-xl bg-white bg-opacity-[0.1] p-[10px] rounded-full w-fit mb-[0.825rem]">
          <PiLockKeyOpen
            style={{ stroke: "white", fill: "white", strokeWidth: "4" }}
          />
        </div>
        <p className="mb-[0.825rem] leading-[1.631]">
          Upgrade to <b>Pro plan</b> to unlock all available features
        </p>
        <a
          href="#"
          className="flex items-center text-blue-400 hover:text-blue-300  mt-1"
        >
          Upgrade now{" "}
          <span className=" ml-4 text-xl">
            <HiOutlineArrowRightCircle />
          </span>
        </a>
      </div>
    </div>
  );
}

export default SidebarUpgradeCard;
