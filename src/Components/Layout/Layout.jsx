import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
import Saidbar from '../Saidbar/Saidbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Main content with Sidebar + Navbar + Outlet */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <div
          className={`bg-gray-800 text-white transition-all duration-300 ${
            isSidebarOpen ? 'w-64' : 'w-16'
          }`}
        >
          <Saidbar />
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Navbar */}
          <div className="sticky top-0 z-50">
            <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          </div>
          
          {/* Main Outlet content */}
          <div className="flex-1 overflow-auto bg-gray-100 p-4">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
