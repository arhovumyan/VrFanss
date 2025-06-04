// src/components/ChatInput.tsx
import { useState } from "react";
import {
  Image as ImageIcon,
  ChevronDown,
  Send,
  SlidersHorizontal,
  Phone,
  Mic,
} from "lucide-react";

export default function ChatInput() {
  const [isSfw, setIsSfw] = useState(false);

  return (
    <div className="pt-10 pb-2 w-full max-w-6xl mx-auto ">
      {/* ─────────── Top Action Buttons ("Suggest Reply" + "Ask Video") ─────────── */}
      <div className="flex items-center space-x-2 mb-2">
        <button className="flex items-center space-x-1 px-3 py-1 rounded-lg border border-yellow-500 text-yellow-400 text-sm hover:bg-yellow-500/10 transition">
          <span className="text-yellow-400">
            💡
          </span>
          <span>Suggest Reply</span>
        </button>

        <button className="flex items-center space-x-1 px-3 py-1 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 text-sm hover:bg-gray-700 transition">
          <span className="flex items-center space-x-1">
            <span>
              🎥
            </span>
            <span>Ask Video</span>
          </span>
          <span className="px-1 text-xs font-semibold text-pink-400 bg-pink-700 rounded-md ml-1">
            BETA
          </span>
          <ChevronDown size={14} className="text-gray-400 ml-1" />
        </button>
      </div>

      {/* ─────────── Main Chat Input Box ─────────── */}
      <div className="relative bg-gray-800 rounded-lg border border-gray-700">
        {/* Top row: [ Ask button + Input field + Expand icon + Send icon box ] */}
        <div className="flex items-start px-3 pt-4 pb-2 space-x-2">          {/* "Ask" button on the left */}
          <button className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 rounded-md px-2 py-1 text-gray-300 text-sm transition">
            <ImageIcon size={16} className="text-gray-400" />
            <span>Ask</span>
            <ChevronDown size={12} className="text-gray-400" />
          </button>

          {/* The actual text input (placeholder "Type a message…") */}
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 items-start pt-1 pb-13  bg-transparent text-gray-200 placeholder-gray-400 outline-none text-sm h-18"
          />

          {/* Expand ↗ icon */}
          <button className="p-1 hover:bg-gray-700 rounded-md transition">
            <Phone size={16} className="text-gray-400" />
          </button>

          {/* Send (paper-plane) icon inside its own box */}
          <button className="ml-auto flex-shrink-0 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition">
            <Send size={16} className="text-gray-200" />
          </button>
        </div>

        {/* Bottom row: [ Mask icon + Sliders icon + toggle SFW ] … [ Phone + Mic ] */}
        <div className="flex items-center justify-between px-3 pb-2 pt-1">
          {/* Left controls: mask, sliders, SFW toggle */}
          <div className="flex items-center space-x-3 pb-4">
            <Phone size={16} className="text-gray-400 hover:text-gray-200 cursor-pointer transition" />
            <SlidersHorizontal size={16} className="text-gray-400 hover:text-gray-200 cursor-pointer transition" />

            {/* Simple toggle switch labeled “SFW” */}
            <label className="inline-flex items-center space-x-1 cursor-pointer select-none">
              <span className="relative">
                <input
                  type="checkbox"
                  checked={isSfw}
                  onChange={() => setIsSfw(!isSfw)}
                  className="sr-only peer"
                />
                {/* track */}
                <span
                  className="w-10 h-5 bg-gray-700 rounded-full peer-checked:bg-indigo-500 transition-colors"
                />
                {/* thumb */}
                <span
                  className="absolute left-[2px] top-[2px] w-4 h-4 bg-gray-200 rounded-full peer-checked:translate-x-5 transition-transform"
                />
              </span>
              <span className="text-gray-400 text-sm">SFW</span>
            </label>
          </div>

          {/* Right controls: phone + mic icons */}
          <div className="flex items-center space-x-3">
            <Phone size={16} className="text-gray-400 hover:text-gray-200 cursor-pointer transition" />
            <Mic size={16} className="text-gray-400 hover:text-gray-200 cursor-pointer transition" />
          </div>
        </div>
      </div>
    </div>
  );
}
