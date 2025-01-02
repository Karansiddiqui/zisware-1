import React from "react";
import { LuArrowLeftRight } from "react-icons/lu";
function SidebarHeader({ setToggleSidebar }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-sidebarColor-header border-b border-[#454b54]">
      <a href="/" className="py-2 ml-5">
        <img
          src="/assets/images/logo_light.png"
          alt="logo"
          className="h-[32px]"
        />
      </a>
      <div className="">
        <button
          type="button"
          onClick={() => setToggleSidebar((prev) => !prev)}
          className="rounded-full transition-colors duration-300 bg-sidebarColor-headerIcon hover:bg-sidebarColor-hover p-[8px] "
        >
          <LuArrowLeftRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default SidebarHeader;
