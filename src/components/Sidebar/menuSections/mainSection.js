import { GoHome } from "react-icons/go";
import { FiLayout } from "react-icons/fi";
import { PiSwatches } from "react-icons/pi";
import { RiStickyNoteLine } from "react-icons/ri";
import { RiListOrdered2 } from "react-icons/ri";

export const mainMenuItems = [
  {
    title: "Dashboard",
    icon: GoHome,
    link: "/",
  },
  {
    title: "Layouts",
    icon: FiLayout,
    children: [
      { name: "Default layout", link: "#" },
      { name: "Layout 2", link: "#" },
      { name: "Layout 3", link: "#" },
      { name: "Layout 4", link: "#" },
      { name: "Layout 5", link: "#" },
      { name: "Layout 6", link: "#" },
      { name: "Layout 7", link: "#", comingSoon: true },
    ],
  },
  {
    title: "Themes",
    icon: PiSwatches,
    children: [
      { name: "Default", link: "#" },
      { name: "Material", link: "#", comingSoon: true },
      { name: "Clean", link: "#", comingSoon: true },
    ],
  },
  {
    title: "Starter kit",
    icon: RiStickyNoteLine,
    children: [
      { name: "Static layout", link: "#" },
      { name: "No header", link: "#" },
      { name: "No footer", link: "#", border: true },
      { name: "Fixed header", link: "#" },
      { name: "Fixed footer", link: "#", border: true },
      { name: " 2 sidebars on 1 side", link: "#" },
      { name: " 2 sidebars on 2 side", link: "#" },
      { name: " 3 sidebars", link: "#", border: true },
      { name: "Boxed page", link: "#" },
      { name: "Boxed content", link: "#" },
    ],
  },
  {
    title: "Changelog",
    icon: RiListOrdered2,
    link: "/",
    optional: "4.0",
  },
];
