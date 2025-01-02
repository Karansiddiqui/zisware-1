import { useState, useRef, useEffect } from "react";
import customer from "../menuSections/customer.js";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";

function SidebarCustomer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCustomer, setActiveCustomer] = useState(null); // State to track the active customer
  const sidebarRef = useRef(null); // Reference to the entire sidebar component

  const customers = customer;

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggling dropdown open/close
  };

  // Close the dropdown when clicking outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown only if clicked outside the sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle setting an active customer
  const handleCustomerClick = (customerName) => {
    setActiveCustomer(customerName);
  };

  return (
    <div className="relative px-5 py-4 text-sm group" ref={sidebarRef}>
      <div
        className="flex  items-center justify-between cursor-pointer"
        onClick={toggleDropdown} 
      >
        <div className="flex gap-2 items-center">
          <img
            src="/assets/images/shell.svg"
            alt="Customer Logo"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-semibold text-gray-300 text-xs ">Customer</div>
            <div
              className={`font-semibold group-hover:text-blue-400 transition-colors duration-300  ${
                isDropdownOpen ? "text-blue-400" : "text-white"
              }`}
            >
              Royal Dutch Shell
            </div>
          </div>
        </div>

        <span>
          <LiaAngleRightSolid
            className={`group-hover:text-blue-400 transition-all duration-300 ${
              isDropdownOpen ? "rotate-90 text-blue-400" : ""
            }`}
            style={{ fontSize: "14px", strokeWidth: 1.5 }}
          />
        </span>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-[10px] left-[10px] bg-[#ffffff] shadow-lg rounded-lg mt-4">
          {customers.map((customer, index) => (
            <a
              href={customer.href}
              key={index}
              onClick={(e) => {
                e.preventDefault(); // Prevent page reload
                handleCustomerClick(customer.name); // Set active customer
              }}
              className={`block my-2 ${
                activeCustomer === customer.name
                  ? "bg-[#e2e2e2] text-blue-400" // Active customer style
                  : "hover:bg-[#e2e2e2] transition-colors duration-300"
              }`}
            >
              <div className="flex gap-3 pl-6 py-2 rounded-lg">
                <div className="flex items-center text-sidebarColor font-bold">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full"
                  />
                </div>

                <span className="flex flex-col text-sidebarColor-hover text-sm">
                  <span className="text-sm font-bold">{customer.name}</span>
                  {customer.users} users
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarCustomer;
