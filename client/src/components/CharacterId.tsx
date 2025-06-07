 // src/pages/CharacterPage.tsx
 import React from "react";
 import { Button } from "@/components/ui/button";
 import {
   Cat,
   MessageCircle,
   ThumbsUp,
   ThumbsDown,
   AlertTriangle,
   UserCircle2,
   RefreshCcw,
   Star,
   ImageIcon,
   Clock,
   Sun,
   Heart,
 } from "lucide-react";
 
 // Replace with your actual image import or public URL
 import characterImage from "@/constants/pics/model.jpg";
 
 export default function CharacterPage() {
   return (
     <div className="flex flex-col min-h-screen text-white">
       {/* PROFILE HEADER */}
       <div className="flex flex-col lg:flex-row gap-8 px-8 pt-8">
         {/* Left: image + overlay */}
         <div className="w-100 h-100 mt-10 relative rounded-lg overflow-hidden">
           <img
             src={characterImage}
             alt="Character"
             className="object-cover w-full h-full rounded-lg"
           />
           <div className="absolute bottom-4 right-4 flex items-center">
             <div className="relative">
               <Sun size={36} className="text-yellow-400 opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <Heart size={20} className="text-white" />
               </div>
             </div>
           </div>
         </div>
 
         {/* Right: details */}
         <div className="flex-1 flex flex-col">
           <h1 className="text-3xl font-semibold">Roxy</h1>
 
           {/* Stats row */}
           <div className="flex flex-wrap items-center gap-6 text-gray-400 mt-4">
             <Cat size={20} /> <span>531.0K</span>
             <MessageCircle size={20} /> <span>18.7K</span>
             <ThumbsUp size={20} /> <span>158</span>
             <ThumbsDown size={20} /> <span>0</span>
             <div className="ml-auto">
               <AlertTriangle size={20} />
             </div>
           </div>
 
           {/* Creator bar */}
           <div className="mt-6 inline-flex items-center gap-4 bg-gray-800 px-4 py-2 rounded-full">
             <UserCircle2 size={24} />
             <div className="flex flex-col leading-tight">
               <span className="text-xs text-gray-400">Creator</span>
               <span className="text-sm font-medium">@FallSunshine</span>
             </div>
             <Button variant="default" size="sm">
               Follow
             </Button>
             <span className="text-xs text-gray-400">
               Published At Mar 29, 2025
             </span>
             <span className="text-xs text-gray-400">
               Last Updated 2 months ago
             </span>
           </div>
 
           {/* Description */}
           <p className="mt-6 text-gray-200">
             some text on the right side
           </p>
 
           {/* Tags */}
           <div className="mt-4 flex flex-wrap gap-2">
             {[
               "Dominant",
               "Female",
               "Scenario",
               "NSFW",
               "Erotic Roleplay",
               "Chastity",
               "Voyeur",
             ].map((tag) => (
               <span
                 key={tag}
                 className="px-3 py-1 bg-gray-800 rounded-full text-xs"
               >
                 {tag}
               </span>
             ))}
           </div>
 
           {/* Actions */}
           <div className="mt-6 flex flex-wrap gap-4">
             <Button variant="default" size="lg">
               Start New Chat ❀
             </Button>
             <Button variant="outline" size="lg">
               Generate Pictures ✨
             </Button>
           </div>
         </div>
       </div>
 
       {/* TABS */}
       <nav className="mt-8 border-t border-gray-700">
         <ul className="flex px-8 text-gray-400">
           {[
             { icon: Star, label: "Media Gallery", active: true },
             { icon: RefreshCcw, label: "Recent Chats" },
             { icon: Star, label: "Reviews" },
             { icon: ImageIcon, label: "AI Image Generator" },
             { icon: Clock, label: "Memories" },
           ].map(({ icon: Icon, label, active }) => (
             <li key={label} className="mr-8">
               <button
                 className={`flex items-center space-x-2 py-4 ${
                   active
                     ? "text-white border-b-2 border-purple-500"
                     : "hover:text-white"
                 }`}
               >
                 <Icon size={18} />
                 <span>{label}</span>
               </button>
             </li>
           ))}
         </ul>
       </nav>
 
       {/* EMPTY MEDIA GALLERY */}
       <div className="flex-1 px-8 pb-8">
         <div className="h-60 flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
           <h2 className="text-lg font-medium text-gray-300">No images yet.</h2>
           <p className="text-sm text-gray-500 mt-2">
             Click on Generate Pictures button to start generating pictures.
           </p>
           <Button variant="outline" className="mt-4">
             Generate Pictures ✨
           </Button>
         </div>
       </div>
     </div>
   );
 }
 
 
 