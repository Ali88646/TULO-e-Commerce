import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

//props
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="min-w-72 max-w-96 bg-darkColor text-white/70 h-full p-10 border-r border-r-white flex flex-col gap-6"
      >
        <div className="w-ful flex justify-between items-center">
          <button onClick={onClose}>
            <Logo className="text-white">TULOS</Logo>
          </button>
          <button className="hover:text-red-500  hoverEffect">
            <X onClick={onClose} className="text-xl" />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide">
          {headerData?.map((item: { href: string; title: string }) => {
            return (
              <Link
                key={item?.title}
                href={item?.href}
                onClick={onClose}
                className={`hover:text-white hover:font-bold hoverEffect relative group ${
                  pathname === item.href && "text-white font-bold"
                }`}
              >
                {item?.title}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
