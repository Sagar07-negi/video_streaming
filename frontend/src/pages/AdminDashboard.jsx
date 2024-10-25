import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AdminHome from "./AdminHome";
import AdminUsers from "./AdminUsers";
import AdminCreators from "./AdminCreators";
import AdminVideos from "./AdminVideos";
import Admin from "./Admin";


const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <AdminHome />;
      case "users":
        return <AdminUsers />;
      case "creators":
        return <AdminCreators />;
      case "videos":
        return <AdminVideos />;
      case "admin":
        return <Admin />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <div className="w-[15%] bg-slate-800 h-screen">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="w-[85%] h-screen overflow-y-auto ">
        {renderContent()} {/* Render content based on active section */}
      </div>
    </div>
  );
};

export default AdminDashboard;





