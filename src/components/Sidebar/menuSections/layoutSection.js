import { FiLayout } from "react-icons/fi";
import {
  PiColumns,
  PiRows,
  PiArrowFatLinesDown,
  PiArrowFatLinesRight,
  PiArrowElbowDownRight,
} from "react-icons/pi";

export const layoutMenuItems = [
  {
    title: "Page layouts",
    icon: FiLayout,
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
    title: "Sidebars",
    icon: PiColumns,
    children: [
      {
        name: "Main sidebar",
        link: "#",
        subChildren: {
          name: "Resizable",
          link: "#",
          name: "Resized",
          link: "#",
          name: "Collapsible",
          link: "#",
          name: "Hideable",
          link: "#",
          name: "Hidden",
          link: "#",
          border: true,
          name: "Light color",
          link: "#",
        },
      },
      {
        name: "Secondary sidebar",
        link: "#",
        subChildren: {
          name: "Collapsible",
          link: "#",
          name: "Collapsed",
          link: "#",
          name: "Collapsible",
          link: "#",
          name: "Hideable",
          link: "#",
          name: "Hidden",
          link: "#",
          border: true,
          name: "Dark color",
          link: "#",
        },
      },

      { name: "Right sidebar", link: "#" },
      { name: "Content sidebar", link: "#", border: true },
      { name: "Sticky areas", link: "#" },
      { name: "Sidebar components", link: "#" },
    ],
  },

  {
    title: "Navbars",
    icon: PiRows,
    children: [
      { name: "Single navbar", link: "#" },
      { name: "Multiple navbars", link: "#" },
      { name: "Content navbar", link: "#" },
      { name: "Color options", link: "#" },
      { name: "Sizing options", link: "#" },
      { name: "Navbar components", link: "#" },
    ],
  },
  {
    title: "Vertical navigation",
    icon: PiArrowFatLinesDown,
    children: [
      { name: "Navigation styles", link: "#" },
      { name: "Collapsible menu", link: "#" },
      { name: "Accordion menu", link: "#" },
      { name: "Bordered navigation", link: "#" },
      { name: "Right icons", link: "#" },
      { name: "Badges", link: "#" },
      { name: "Disabled items", link: "#" },
    ],
  },
  {
    title: "Horizontal navigation",
    icon: PiArrowFatLinesRight,
    children: [
      { name: "Navigation styles", link: "#" },
      { name: "Navigation elements", link: "#" },
      { name: "Tabbed navigation", link: "#" },
      { name: "Disabled navigation links", link: "#" },
      { name: "Horizontal mega menu", link: "#" },
    ],
  },
  {
    title: "Menu levels",
    icon: PiArrowElbowDownRight,
    children: [
      { name: "Second level", link: "#" },
      { name: "Second level with child", link: "#" },
    ],
  },
];
