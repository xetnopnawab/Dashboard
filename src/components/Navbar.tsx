// components/Navbar.tsx

import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Md Nawab</div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Services</li>
          <li className="text-white">Contact</li>
        </ul>

        {/* Event Date Picker */}
        <div className="flex items-center">
          <FiCalendar className="text-white mr-2" />
          <input
            type="date"
            className="border rounded p-1 focus:outline-none"
            // Add your event date picker logic here
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
