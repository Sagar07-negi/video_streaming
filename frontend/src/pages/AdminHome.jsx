import React, { useState } from 'react';
import { FiUsers, FiVideo, FiUserCheck, FiSettings, FiBell, FiSun, FiMoon, FiSearch } from "react-icons/fi"; 
import userimg from "../assets/user.png";

const AdminHome = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(5); // Sample notifications count
//   const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode); // Toggle dark mode class on body
  };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     // Add logic for handling search if needed
//   };

  const StatCard = ({ value, label, icon: Icon, iconBgColor }) => {
    return (
      <div className="relative flex justify-center items-center flex-col gap-4 bg-white w-80 h-48 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          className="absolute left-8 -top-8 p-4 rounded-full text-white text-4xl"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon />
        </div>
        <p className="text-5xl font-semibold">{value}</p>
        <p className="text-3xl text-gray-500">{label}</p>
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#06b6d4] h-[320px] pt-4">
        <div className='icondiv flex flex-row-reverse px-6 mb-10'>
          <img src={userimg} alt="image" className='w-16 h-16' />
          <div className="flex items-center">
            {/* <div className="relative mr-4 flex">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="searchbtn bg-white text-black rounded-md h-14 w-[400px] pl-6 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
              />
              <div className="absolute right-0 rounded-e-md top-0 h-14 w-14 flex justify-center items-center text-white text-xl bg-gray-800">
              <FiSearch />
              </div>
            </div> */}
            
            {/* Dark/Light Mode Toggle */}
            <div onClick={handleToggleDarkMode} className={`p-4 rounded-md cursor-pointer mr-4 ${isDarkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"}`}>
              {isDarkMode ? (
                <FiSun className="text-2xl" />
              ) : (
                <FiMoon className="text-2xl" />
              )}
            </div>

            {/* Notifications Icon */}
            <div className="relative cursor-pointer bg-white text-black p-4 mr-4 rounded-md">
              <FiBell className="text-2xl" />
              {notifications > 0 && (
                <span className="absolute top-1 right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
          </div>
        </div>
        <h2 className="text-white text-4xl text-center uppercase font-bold">Admin Dashboard</h2>
      </div>

      <div className="flex justify-center items-center gap-10 absolute left-[22%] top-[25%] flex-wrap">
        <StatCard
          value="500"
          label="Total Users"
          icon={FiUsers}
          iconBgColor="#ef4444" // Red for Users
        />
        <StatCard
          value="50"
          label="Total Admins"
          icon={FiSettings} // Icon for Admins
          iconBgColor="#facc15" // Yellow for Admins
        />
        <StatCard
          value="150"
          label="Total Creators"
          icon={FiUserCheck} // Icon for Creators
          iconBgColor="#0d9488" // Green for Creators
        />
        <StatCard
          value="1000"
          label="Total Videos"
          icon={FiVideo} // Icon for Videos
          iconBgColor="#075985" // Blue for Videos
        />
      </div>
    </>
  );
};

export default AdminHome;
