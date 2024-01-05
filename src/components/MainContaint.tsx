// src/components/MainContent.tsx
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const MainContent: React.FC = () => {
  return (
    <motion.div
      initial={{ marginLeft: 16 }}
      animate={{ marginLeft: [16, 64] }}
      className="flex-1 p-4"
    >
       <Navbar />
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
        <div className="bg-white p-4 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          {/* <Line type='line' data={chartData} /> */}
        </div>
        {/* Add more components and charts for other sections */}
      </div>
     
    </motion.div>
  );
};

export default MainContent;
