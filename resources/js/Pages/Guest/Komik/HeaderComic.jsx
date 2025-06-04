import { AiOutlineInstagram } from "react-icons/ai"; 
import React from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaFacebookF, FaTimes, FaRegCopy } from "react-icons/fa";
import { SiLine } from "react-icons/si";

const HeaderComic = ({ judul, episode, onPrev, onNext, disablePrev, disableNext }) => (
  <header className="bg-gray-900  text-white py-3 px-4 flex items-center justify-between shadow-lg">
    <div className="flex items-center gap-2">
      <div className="bg-white rounded-md p-1 h-8 w-8 flex items-center justify-center"></div> Logo
      <div className="font-bold text-lg tracking-wide">{judul}</div>
      <span className="text-gray-400 mx-1">›</span>
      <div className="text-base">EPISODE {episode}</div>
    </div>
    
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        disabled={disablePrev}
        className="bg-gray-800 hover:bg-gray-700 transition h-8 w-8 flex items-center justify-center rounded-md"
      >
        <FaChevronLeft className="text-white" />
      </button>
      <div className="bg-gray-800 px-3 py-1 rounded-md font-bold">
        #{episode}
      </div>
      <button
        onClick={onNext}
        disabled={disableNext}
        className="bg-gray-800 hover:bg-gray-700 transition h-8 w-8 flex items-center justify-center rounded-md"
      >
        <FaChevronRight className="text-white" />
      </button>
      <div className="flex gap-2 ml-2">
        <button className="bg-gray-800 hover:bg-gray-700 transition h-8 w-8 flex items-center justify-center rounded-full text-lg"><FaPlus /></button>
        <button className="bg-gray-800 hover:bg-gray-700 transition h-8 w-8 flex items-center justify-center rounded-full"><FaFacebookF /></button>
        <button className="bg-gray-800 hover:bg-gray-700 transition h-8 w-8 flex items-center justify-center rounded-full"><AiOutlineInstagram /></button>
        <button className="bg-gray-800 hover:bg-gray-700 transition h-8 w-8 flex items-center justify-center rounded-full"><FaTimes /></button>
        <button className="bg-gray-800 hover:bg-gray-700 transition h-8 w-8 flex items-center justify-center rounded-full"><FaRegCopy /></button>
      </div>
    </div>
  </header>
);

export default HeaderComic;
