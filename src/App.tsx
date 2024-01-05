// App.jsx
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";


import MainContent from "./components/MainContaint";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("MainContent");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  return (
    <div className="flex h-screen">
      <Sidebar onSectionChange={handleSectionChange} />
      <MainContent />
     
    </div>
  );
};

export default App;
