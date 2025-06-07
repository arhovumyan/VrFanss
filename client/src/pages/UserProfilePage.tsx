// src/app/UserProfile.jsx 
import React from 'react'
import defaultAvatar from "../constants/pics/defaultAvatar.png"
import { BrandingFooter } from "@/components/layout/BrandingFooter";

import {
  Copy,
  X,
  Video,
} from "lucide-react";

const UserProfilePage = () => {
  return (
    <div className=" flex-1 pt-10 flex flex-col min-h-screen text-white mt-12">
      {/* ─── HEADER ───────────────────────────────────────────────────────────── */}
      <header className="flex items-center px-8 py-6 space-x-6">
        <img
          src={defaultAvatar}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full bg-gray-700"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-semibold">aro11</h1>
            <button aria-label="Copy profile link" className="text-gray-400 hover:text-gray-200">
              <Copy size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-400">
            @aro11 &nbsp;|&nbsp; 0 followers &nbsp;|&nbsp; 0 characters
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            Manage Characters
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            Edit Profile
          </button>
        </div>
      </header>

      {/* ─── TABS ──────────────────────────────────────────────────────────────── */}
      <nav className="border-b border-gray-700">
        <ul className=" flex items-center justify-center space-x-8 px-8">
          {["Characters", "Followers", "Following",].map((tab) => (
            <li key={tab}>
              <a
                href="#"
                className="inline-block py-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-500"
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ─── EMPTY STATE ─────────────────────────────────────────────────────── */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gray-700">
            <Video size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold">It's a bit empty here</h2>
          <p className="text-gray-400">Create your first public character</p>
          <button className="px-6 py-2 bg-orange-700 rounded-md hover:bg-orange-600">
            Create Character
          </button>
        </div>
      </main>

      {/* Footer below */}
              <div className="pt-10">
                    <BrandingFooter />
              </div>
    </div>
  );
}

export default UserProfilePage

