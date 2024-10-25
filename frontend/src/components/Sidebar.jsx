import React from "react";
import { FiHome, FiUsers, FiUserCheck, FiVideo } from "react-icons/fi"; // Use FiVideo for Videos
import img from "../assets/Streamio.png";

const SidebarItem = ({ label, icon: Icon, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex text-xl items-center gap-4 p-4 font-medium cursor-pointer transition-colors duration-300 ${
        isActive ? "text-slate-700 bg-[#f1f1f1]" : "text-gray-300 hover:bg-slate-600 hover:text-white"
      }`}
    >
      <Icon  />
      {label}
    </div>
  );
};

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { label: "Home", icon: FiHome, section: "home" },
    { label: "Users", icon: FiUsers, section: "users" },
    { label: "Creators", icon: FiUserCheck, section: "creators" },
    { label: "Videos", icon: FiVideo, section: "videos" },
    { label: "Admin", icon: FiUserCheck, section: "admin" }, // Reuse icon for Admin
  ];

  return (
    <div className="flex flex-col h-full bg-slate-800 text-gray-300">
      <div className="flex gap my-10 items-center text-4xl font-bold">
        <img src={img} alt="Streamio" className="w-24 h-24" />
        <span>Streamio</span>
      </div>
      {menuItems.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          isActive={activeSection === item.section}
          onClick={() => setActiveSection(item.section)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
