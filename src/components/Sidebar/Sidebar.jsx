import React, { useState, useRef, useEffect } from "react";
import SidebarHeader from "./sidebarComponents/SidebarHeader.jsx";
import SidebarCustomer from "./sidebarComponents/SidebarCustomer.jsx";
import { mainMenuItems } from "./menuSections/mainSection";
import { layoutMenuItems } from "./menuSections/layoutSection";
import SidebarItems from "./SidebarItems.jsx";
import SidebarUpgradeCard from "./sidebarComponents/SidebarUpgradeCard.jsx";

export function Sidebar() {
  const sidebarRef = useRef(null);
  const [activeItem, setActiveItem] = useState("");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveItem(""); // Close the dropdown if clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[15.25rem] bg-sidebarColor" ref={sidebarRef}>
      <div className="fixed border border-r-[1px] border-transparent flex flex-col top-0 left-0 h-screen w-[15.25rem] bg-sidebarColor text-white">
        {/* Sidebar Header */}
        <SidebarHeader />

        {/* Content Section */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto sliderbar hover:cursor-pointer">
          {/* Customer Section */}
          <SidebarCustomer />
          {/* Main Section */}
          <div className="py-[0.625rem] px-5">
            <div className="text-xs leading-3 font-semibold text-gray-400 uppercase">
              Main
            </div>
          </div>
          <div className="space-y-[1px] ">
            {
              <SidebarItems
                items={mainMenuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            }
          </div>

          {/* Layout Section */}
          <div className="py-[0.625rem] px-5">
            <div className="text-xs font-semibold text-gray-400 uppercase">
              Layout
            </div>
          </div>
          <div className="space-y-[1px]">
            {
              <SidebarItems
                items={layoutMenuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            }
          </div>
        </div>

        <SidebarUpgradeCard />
      </div>
    </div>
  );
}
