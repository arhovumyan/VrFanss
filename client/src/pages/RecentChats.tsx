// src/pages/RecentChats.tsx
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Cat as ChatBubbleIcon, MoreVertical } from "lucide-react";
import { dummyChats, ChatItem } from "@/constants";

export default function RecentChats() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center pt-10 min-h-screen text-gray-200 flex-col">
      {/* …header… */}
      <div className="px-4 flex-1 overflow-y-auto w-full">
        <ul className="divide-y divide-gray-700">
          {dummyChats.map((chat: ChatItem) => (
            <li
              key={chat.id}
              onClick={() => navigate(`/chat/${chat.id}`)}
              className="w-full flex flex-col sm:flex-row items-start sm:items-center py-4 cursor-pointer hover:bg-gray-800 transition"
            >
              <img
                src={chat.avatarUrl}
                alt={`${chat.name} avatar`}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />

              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium leading-tight break-words">
                    {chat.name}
                  </h2>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <ChatBubbleIcon size={14} />
                    <span>{chat.unreadCount}</span>
                    <span>·</span>
                    <span>{chat.lastTime}</span>
                  </div>
                </div>

                <p className="mt-1 text-sm text-gray-400 break-words leading-snug">
                  {chat.snippet}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // …
                }}
                className="ml-auto p-1 text-gray-400 hover:text-gray-200 transition"
              >
                <MoreVertical size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 pb-10 py-4 text-center text-gray-500 mt-auto w-full">
        <Link
          to="/ForYouPage"
          className="block break-words text-blue-700 hover:underline"
        >
          🔍 Click here to explore more characters to chat with
        </Link>
      </div>
    </div>
  );
}