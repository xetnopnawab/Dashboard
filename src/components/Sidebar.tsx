// src/components/Sidebar.tsx

import { motion } from "framer-motion";
import React, { useState } from "react";

import {
  FiLogIn,
  FiBarChart2,
  FiCalendar,
  FiDollarSign,
  FiMap,
  FiActivity,
  FiDatabase,
} from "react-icons/fi";
const Sidebar: React.FC<{ onSectionChange: (section: string) => void }> = ({
  onSectionChange,
}) => {
  const [activeSection, setActiveSection] = useState<string>("Dashboard");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    onSectionChange(section);
  };
  return (
    <motion.div
      initial={{ width: 300 }}
      animate={{ width: [200, 300] }}
      className="w-64 bg-blue-500 text-white overflow-hidden"
    >
      <nav className="bg-gray-800 text-white flex-wrap justify-center content-center item-center gap-12  h-screen w-64 flex flex-col p-4">
        <div className="text-2xl font-bold mb-8">Dashboard</div>
        <ul>
          
          <li
            className={`cursor-pointer ${
              activeSection === "Dashboard" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("Dashboard")}
          >
            <FiBarChart2 className="mr-2" /> Dashboard
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "DatePicker" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("DatePicker")}
          >
            <FiCalendar className="mr-2" /> Date Picker
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "RevenueAnalyst" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("RevenueAnalyst")}
          >
            <FiDollarSign className="mr-2" /> Revenue Analyst
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "Journeys" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("Journeys")}
          >
            <FiMap className="mr-2" /> Journeys
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "Performance" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("Performance")}
          >
            <FiActivity className="mr-2" /> Performance
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "DataPlatform" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("DataPlatform")}
          >
            <FiDatabase className="mr-2" /> Data Platform
          </li>
        </ul>
        <ul>
        <li
            className={`cursor-pointer  ${
              activeSection === "Log" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("Log")}
          >
            <FiLogIn className="mr-2" /> Login
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
