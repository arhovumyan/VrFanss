import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"; // This is your Shadcn button import
import { useNavigate } from "react-router-dom";
import { BrandingFooter } from "@/components/layout/BrandingFooter";

export default function UserCharacters() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-screen p-8">
      <div className="flex-1 flex items-center justify-center w-full mt-12">
        <div
          className="
            flex flex-col items-center justify-center
            w-[calc(80vh-4rem)]
            h-[calc(80vh-4rem)]
            border-2 border-dashed border-gray-700
            rounded-lg
            overflow-auto
          "
        >
          <div className="mb-4 p-3 border-2 border-gray-700 rounded-full">
            <Plus size={24} className="text-gray-500" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            It’s a bit empty here, isn’t it?
          </h2>
          <p className="text-base text-gray-400 mb-6 text-center">
            Let’s create a character exclusively for you
          </p>

          {/* This Button component is already from Shadcn, and the onClick is correctly implemented */}
          <Button
            variant="default"
            size="lg"
            onClick={() => navigate("/create-character")}
          >
            Create Character
          </Button>
        </div>
      </div>

      <div className="pt-10 text-teal-100">
        <BrandingFooter />
      </div>
    </div>
  );
}