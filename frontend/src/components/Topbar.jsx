import React from "react";
import { Copy, Users } from "lucide-react"; // Only need Copy and a general User icon

const Topbar = ({ roomId, name }) => {
  const profileInitial = name ? name.charAt(0).toUpperCase() : "U";

  const handleCopy = () => {
    navigator.clipboard.writeText(roomId);
  };

  return (
    // Reduced vertical padding (py-2 instead of py-3) and minimal shadow (shadow-sm)
    <div className="w-full flex items-center justify-end gap-2 px-4 py-2 bg-white border-b shadow-sm">

      {/* --- Room ID Badge --- */}
      {/* Reduced horizontal padding (px-2 instead of px-3) and vertical padding (py-0.5) */}
      <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700">
        <span className="text-gray-500 font-medium">Room ID:</span> 
        <span className="font-semibold text-indigo-700">{roomId}</span>
        <Copy
          size={14} // Smaller icon size
          onClick={handleCopy}
          className="cursor-pointer text-indigo-600 hover:text-indigo-800 transition-colors"
        />
      </div>

      {/* --- User Name Badge --- */}
      {/* Reduced height (h-8 instead of h-10) and padding (px-3 instead of px-4) */}
      <div className="flex items-center gap-1.5 h-8 px-3 py-1 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-xs font-medium text-white hover:bg-indigo-700 cursor-pointer">
        <span className="w-5 h-5 rounded-full bg-white text-indigo-600 text-[10px] font-semibold flex items-center justify-center border border-indigo-300">
          {profileInitial}
        </span>
        {name}
        <Users size={14} className="ml-1 text-white/80" /> {/* Smaller icon size */}
      </div>

    </div>
  );
};

export default Topbar;