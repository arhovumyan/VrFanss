// src/components/chat/ChatPage.tsx
import React from "react";
import HeaderNotice from "./HeaderNotice";
import CharacterHeader from "./CharacterHeader";
import ChatBubble from "./ChatBubble";
import SuggestedReply from "./SuggestedReply";
import ChatInput from "./ChatInput";

// Import everything from our new constants file
import { CHARACTER_HEADER, CHAT_BUBBLES } from "@/constants";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* If you need HeaderNotice above the scrollable area, render it here */}
      {/* <HeaderNotice /> */}

      <div className="pt-[10px] pb-28 overflow-y-auto h-full">
        {/* Use CHARACTER_HEADER fields */}
        <CharacterHeader
          avatarUrl={CHARACTER_HEADER.avatarUrl}
          title={CHARACTER_HEADER.title}
          subtitle={CHARACTER_HEADER.subtitle}
        />

        {/* Loop over CHAT_BUBBLES array; if there's only one, it'll render one */}
        {CHAT_BUBBLES.map((bubble, idx) => (
          <div key={idx} className="flex justify-center">
            <ChatBubble
              avatarUrl={bubble.avatarUrl}
              speakerName={bubble.speakerName}
              message={bubble.message}
            />
          </div>
        ))}

        {/* Fixed input at the bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-black px-4 z-50">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
