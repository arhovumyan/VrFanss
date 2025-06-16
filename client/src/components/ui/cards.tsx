import React from "react";
import useSWR from "swr";

type Character = {
  id:         number;
  name:       string;
  description:string;
  rating?:    string;
  nsfw?:      boolean;
  chatCount?: number;
};

// Fetcher for SWR (throws on non-OK)
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch error ${res.status}`);
  return res.json() as Promise<Character[]>;
};

const Cards: React.FC = () => {
  const { data: characters, error } = useSWR<Character[]>(
    "/api/characters",
    fetcher
  );

  if (error) return <div className="text-center p-4">Failed to load: {error.message}</div>;
  if (!characters) return <div className="text-center p-4">Loading characters…</div>;

  return (
    <div className="card-container grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 lg:px-0">
      {characters.map((char) => (
        <div
          key={char.id}
          className="character-card relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src={`/api/characters/${char.id}/avatar`}
            alt={char.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <h3 className="text-xl font-semibold mb-1">{char.name}</h3>
            <p className="text-sm mb-2">{char.description}</p>
            {char.rating && <p className="text-xs">Rating: {char.rating}</p>}
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

export default Cards;