import { React, useState, useRef, useEffect } from "react";
import { Bell, User } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { LiaAngleDownSolid } from "react-icons/lia";
import { PiFadersHorizontalThin } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";

export function Header() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const filterRef = useRef(null); // Ref to the filter modal

  const handleModalToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [checkboxes, setCheckboxes] = useState({
    invoices: true,
    files: false,
    users: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const contacts = [
    {
      name: "Christine Johnson",
      email: "c.johnson@awesomecorp.com",
      avatar: "/placeholder.svg",
      status: "offline",
    },
    {
      name: "Clinton Sparks",
      email: "c.sparks@awesomecorp.com",
      avatar: "/placeholder.svg",
      status: "online",
    },
  ];

  const clients = [
    {
      name: "Adobe Inc.",
      license: "Enterprise license",
      logo: "/placeholder.svg?text=A",
    },
    {
      name: "Holiday-Inn",
      license: "On-premise license",
      logo: "/placeholder.svg?text=H",
    },
    {
      name: "ING Group",
      license: "Perpetual license",
      logo: "/placeholder.svg?text=I",
    },
  ];

  return (
    <header
      style={{ width: `calc(100% - 244px)` }}
      className="fixed p-[10.5px] bg-white border-b flex items-center justify-between px-5 shadow"
    >
      <div className="relative flex items-center flex-1">
        <div className="relative min-w-[30rem]">
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 "
            size={21}
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-12 pr-4 py-[9px] text-sm border border-borderColor focus:outline-none focus:ring-1 focus:ring-blue-300 w-full"
            onClick={handleSearchToggle}
          />
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 scale-x-[-1]  font-bold hover:cursor-pointer py-1 px-2 ${
              isFilterOpen && "bg-blue-100"
            }`}
          >
            <PiFadersHorizontalThin
              className=""
              size={20}
              onClick={handleModalToggle}
            />
          </div>

          {/* Modal */}
          {isFilterOpen && (
            <div
              ref={filterRef} // Attach ref to the modal
              className="absolute top-[105%] left-0 right-0 w-full shadow-lg border border-borderColor z-50"
            >
              <div className="bg-white p-5 flex flex-col gap-5 border-borderColor ">
                <div className="flex justify-between items-center ">
                  <h2 className="text-medium font-medium">Search options</h2>
                  <VscHistory size={18} />
                </div>

                {/* Category Section */}
                <div className="text-sm">
                  <h3 className="mb-2">Category</h3>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="invoices"
                        checked={checkboxes.invoices}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 bg-blue-600 mr-2 rounded border-gray-300 focus:ring-blue-500 checked:bg-blue-500"
                      />
                      Invoices
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="files"
                        checked={checkboxes.files}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 bg-blue-600 mr-2 rounded border-gray-300 focus:ring-blue-500 checked:bg-blue-500"
                      />
                      Files
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="users"
                        checked={checkboxes.users}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 bg-blue-600 mr-2 rounded border-gray-300 focus:ring-blue-500 checked:bg-blue-500"
                      />
                      Users
                    </label>
                  </div>
                </div>

                {/* Additional Sections */}
                <div className="text-sm">
                  <h3 className="mb-2">Addition</h3>
                  <div className="flex items-center">
                    <div className="relative w-fit">
                      <select className="border border-borderColor p-[9.5px] pl-4 pr-9 border-r-0 focus:outline-blue-300 appearance-none">
                        <option value="has">has</option>
                        <option value="has not">has not</option>
                      </select>
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none font-extrabold">
                        <LiaAngleDownSolid size={13} />{" "}
                      </span>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter the word(s)"
                      className="border border-borderColor p-[9px] flex-1 focus:outline-blue-300"
                    />
                  </div>
                </div>

                {/* Status Section */}
                <div className="text-sm">
                  <h3 className="font-medium mb-2">Status</h3>
                  <div className="flex items-center">
                    <div className="relative w-fit">
                      <select className="border border-borderColor p-[9.5px] pl-4 pr-9 border-r-0 focus:outline-blue-300 appearance-none">
                        <option value="is">is</option>
                        <option value="is not">is not</option>
                      </select>
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none font-extrabold">
                        <LiaAngleDownSolid size={13} />{" "}
                      </span>
                    </div>
                    <div className="relative w-full">
                      <select className="appearance-none w-full focus:outline-blue-300 border border-borderColor p-[9.5px] pr-8">
                        <option value="active">Active</option>
                        <option value="inActive">Inactive</option>
                        <option value="New">New</option>
                        <option value="Expired">Expired</option>
                        <option value="Pending">Pending</option>
                      </select>
                      <span className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none font-extrabold">
                        <LiaAngleDownSolid size={13} />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between text-sm">
                  <button
                    className="px-4 py-[9px] bg-gray-100 hover:bg-gray-200 rounded-md border-[1px] border-borderColor"
                    onClick={handleModalToggle}
                  >
                    Reset
                  </button>
                  <div className="space-x-4">
                    <button
                      className="px-4 py-[9px] bg-gray-100 hover:bg-gray-200 rounded-md border-[1px] border-borderColor"
                      onClick={handleModalToggle}
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-[9px] bg-blue-500 hover:bg-blue-600 text-white rounded-md border-[1px] border-borderColor">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isSearchOpen && (
            <div className="absolute top-[105%] left-0 right-0 w-full shadow-lg border border-borderColor z-50">
              <div className=" bg-white">
                <div className="relative text-sm  border-b-borderColor border-[1px]  py-2">
                  <div className="flex items-center px-6 py-2 hover:bg-gray-100">
                    <CiSearch size={21} />
                    <div className="pl-6">
                      Search <b>"in"</b> everywhere
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm font-medium">Contacts</h2>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      See all
                    </a>
                  </div>
                  <div className="space-y-3">
                    {contacts.map((contact) => (
                      <div
                        key={contact.email}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div>
                              <img src={contact.avatar} alt={contact.name} />
                            </div>
                            <span
                              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                                contact.status === "online"
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            />
                          </div>
                          <div>
                            <p className="font-medium">{contact.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {contact.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm font-medium">Clients</h2>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      See all
                    </a>
                  </div>
                  <div className="space-y-3">
                    {clients.map((client) => (
                      <div
                        key={client.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10">
                            <img src={client.logo} alt={client.name} />
                          </div>
                          <div>
                            <p className="font-medium">{client.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {client.license}
                            </p>
                          </div>
                        </div>
                        <svg
                          className="h-5 w-5 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
}
