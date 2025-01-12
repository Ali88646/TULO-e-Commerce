import { productType } from "@/constants";
import { Item } from "@radix-ui/react-accordion";
import { Repeat } from "lucide-react";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      <div className="flex items-center gap-1.5">
        {productType?.map((type) => (
          <button
            key={type?.title}
            onClick={() => onTabSelect(type.title)}
            className={`border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect ${type.title === selectedTab && "bg-darkColor text-white"}`}
          >
            {type?.title}
          </button>
        ))}
      </div>
      <button className="border border-darkColor  p-1.5  md:p-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect">
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomeTabBar;
