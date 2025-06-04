// src/components/layout/Sidebar2.tsx
import { Link } from "wouter";                      // ← import your Link
import { MoreVertical, ChevronLeft } from "lucide-react";
import { createContext } from "react";
import VrFansLogo from "@/constants/pics/VrFansLogo.png";
import { SidebarItem } from "./SidebarItems";
import { sidebarItems } from "@/constants/SidebarInfo";

export const SidebarContext = createContext<{ expanded: boolean }>({ expanded: true });

interface Sidebar2Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar2({ isOpen, onClose }: Sidebar2Props) {
  return (
    <aside
      className={`
        fixed top-0 left-0 bottom-0
        w-64 
        bg-black 
        shadow-lg 
        z-50 
        transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-500 ease-in-out
        flex flex-col
      `}
    >
      {/* Logo + close arrow */}
      <div className="p-4 pb-2 flex justify-between items-center">
        <img
          src={VrFansLogo}
          alt="Logo"
          className="w-13 transition-all duration-500 ease-out"
        />
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-100 hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Menu items (flex-1 pushes next section to bottom) */}
      <SidebarContext.Provider value={{ expanded: isOpen }}>
        <ul className="flex-1 px-3 overflow-y-auto">
          {sidebarItems.map((entry, idx) => {
            if ((entry as any).divider) {
              return <hr key={idx} className="my-3 border-gray-700" />;
            }
            

            const item = (
              <SidebarItem
                icon={entry.icon}
                text={entry.text ?? ""}
                alert={entry.alert}
              />
            );

            return entry.route ? (
              <Link href={entry.route} key={idx} onClick={onClose}>
                {item}
              </Link>
            ) : (
              <div key={idx}>{item}</div>
            );
          })}
        </ul>
      </SidebarContext.Provider>

      {/* User info pinned to the bottom */}
      <div className="flex p-3 items-center">
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&amp;color=3730a3&amp;bold=true"
          alt="User avatar"
          className="w-10 h-10 rounded-md"
        />
        <div className="ml-3 leading-4 text-white">
          <h4 className="font-semibold">John Doe</h4>
          <span className="text-xs text-gray-400">johndoe@gmail.com</span>
        </div>
        <MoreVertical size={20} className="text-gray-400 ml-auto" />
      </div>
    </aside>
  );
}
