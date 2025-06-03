// src/components/Cards.tsx
import React from "react";
import { characters, Character } from "@/constants/index";
import "@/index.css";

const CharacterShowcase = () => {
  return (
    <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters.map((char: Character) => (
        <div
          key={char.id}
          className="
            character-card
            relative
            overflow-hidden
            rounded-lg
            shadow-lg
            transition-transform
            duration-300
            ease-in-out
            hover:scale-105
          "
        >
          <img
            src={char.avatar}
            alt={char.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* optional dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* text pinned to the bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <h3 className="text-xl font-semibold mb-1">{char.name}</h3>
            <p className="text-sm mb-2">{char.description}</p>
            {char.rating !== undefined && (
              <p className="text-xs">Rating: {char.rating}</p>
            )}
            {char.chatCount !== undefined && (
              <p className="text-xs">
                Messages: {char.chatCount.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterShowcase;