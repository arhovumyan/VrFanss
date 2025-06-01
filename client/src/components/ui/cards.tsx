import React from "react";
import { characters, Character } from "@/constants/index";
import "@/index.css";

const Cards = () => {
  return (
    <div className="card-container">
      {characters.map((char: Character) => (
        <div
          key={char.id}
          className="character-card transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <a href={`/character/${char.id}`} className="block overflow-hidden rounded-lg">
            <img
              src={char.avatar}
              alt={char.name}
              className="character-image"
            />
          </a>
          <h3 className="character-name">{char.name}</h3>
          <p className="character-description">{char.description}</p>
          {char.rating !== undefined && (
            <p className="character-rating">Rating: {char.rating}</p>
          )}
          {char.chatCount !== undefined && (
            <p className="character-messages">Messages: {char.chatCount}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;