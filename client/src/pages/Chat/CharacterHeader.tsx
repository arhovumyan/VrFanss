// src/components/chat/CharacterHeader.tsx
import React from "react";
import { ChevronDown } from "lucide-react";

interface CharacterHeaderProps {
  avatarUrl: string;
  title: string;
  subtitle: string;
}

export default function CharacterHeader({ avatarUrl, title, subtitle }: CharacterHeaderProps) {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600">
        <img src={avatarUrl} alt={title} className="w-full h-full object-cover object-center" />
      </div>
      <h1 className="mt-4 text-2xl font-semibold text-white">{title}</h1>
      <p className="mt-2 text-center text-gray-300 max-w-xl">{subtitle}</p>
      <ChevronDown className="mt-4 w-6 h-6 text-gray-400 animate-bounce" />
    </div>
  );
}
