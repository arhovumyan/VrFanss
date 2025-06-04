// src/components/layout/SidebarItem.tsx
import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import clsx from "clsx";

type SidebarItemProps = {
  icon?: JSX.Element;
  text?: string;
  alert?: boolean;
  divider?: boolean;
  active?: boolean;
};

export function SidebarItem({
  icon,
  text,
  active = false,
  alert = false,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  // If this entry was meant to be a divider, we handle it at the parent level (Sidebar2).
  // So SidebarItem is only used for "icon + text" items.
  return (
    <li
      className={clsx(
        "relative flex items-center gap-2 rounded-md transition-all group",
        expanded ? "px-3 py-2" : "p-2 justify-center",
        {
          // Active item: give a light-indigo gradient bg + dark-indigo text
          "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800":
            active,
          // Non-active: gray text, but highlight on hover
          "text-gray-400 hover:bg-indigo-50": !active,
        }
      )}
    >
      {/* 1) Icon always visible */}
      <div className="flex-shrink-0">{icon}</div>

      {/* 2) Text label only if expanded */}
      {expanded && (
        <span className="flex-1 text-sm font-medium whitespace-nowrap">
          {text}
        </span>
      )}

      {/* 3) Alert dot—only if alert === true. Position it inside the same <li>. */}
      {alert && expanded && (
        <div className="h-2 w-2 bg-indigo-400 rounded-full flex-shrink-0" />
      )}

      {/* 4) If collapsed, show a small tooltip on hover */}
      {!expanded && (
        <div
          className={clsx(
            "absolute left-full ml-2 whitespace-nowrap rounded-md bg-indigo-100 px-2 py-1 text-xs text-indigo-800 shadow-md transition-opacity duration-150",
            "invisible opacity-0 group-hover:visible group-hover:opacity-100"
          )}
        >
          {text}
        </div>
      )}
    </li>
  );
}
