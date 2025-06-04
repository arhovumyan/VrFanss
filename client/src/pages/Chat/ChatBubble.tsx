// src/components/chat/ChatBubble.tsx
import React from "react";

interface ChatBubbleProps {
  avatarUrl: string;
  speakerName: string;
  message: string;
}

export default function ChatBubble({ avatarUrl, speakerName, message }: ChatBubbleProps) {
  return (
    <div className="flex items-start space-x-3 mt-8 px-4">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={avatarUrl} alt={speakerName} className="w-full h-full object-cover object-center" />
      </div>
      <div className="bg-gray-800 text-gray-100 rounded-xl px-4 py-3 max-w-2xl whitespace-pre-line">
        {message}
      </div>
    </div>
  );
}
