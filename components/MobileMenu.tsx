"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideBar from "./SideBar";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="md:hidden hover:text-darkColor hoverEffect" />
      </button>
      <div className="md:hidden">
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
