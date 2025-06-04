import SidebarMenu from "../SideBar/SidebarMenu";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ isOpen, onClose }) {
    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: "-100%" },
    };

    return (
        <>
            {/* Overlay backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-sidebar"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        transition={{ duration: 0.3 }}
                        className="fixed z-50 inset-y-0 left-0 w-72 bg-gradient-to-b from-lime-900 to-lime-800 shadow-xl p-6 text-white md:hidden"
                    >
                        {/* Tombol X di dalam sidebar mobile */}
                        <div className="absolute top-4 right-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 bg-hijau text-white rounded-full hover:bg-green-700 transition duration-300"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <SidebarContent />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sidebar desktop */}
            <div className="hidden md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 md:left-0 bg-gradient-to-b from-lime-900 to-lime-800 shadow-xl p-6 text-white z-30">
                <SidebarContent />
            </div>
        </>
    );
}

function SidebarContent() {
    return (
        <>
            <div className="flex flex-col items-start space-y-1">
                <span className="text-3xl font-extrabold tracking-tight">
                    Peatland Hero
                </span>
                <span className="text-sm font-light text-lime-200">
                    Admin Dashboard
                </span>
            </div>

            <div className="mt-10 flex-grow">
                <SidebarMenu />
            </div>

            <div className="mt-10">
                <div className="bg-white px-4 py-4 rounded-xl shadow flex gap-4 items-center">
                    <img
                        src="https://avatar.iran.liara.run/public/28"
                        alt="Avatar"
                        className="w-16 h-16 rounded-full object-cover border-2 border-lime-600"
                    />
                    <div className="text-black text-sm flex flex-col">
                        <span>
                            {" "}
                            Please organize your menus through button below!{" "}
                        </span>
                        <button className="flex justify-center items-center mt-3 bg-lime-100 text-hijau px-3 py-1 rounded-md hover:bg-lime-200 transition">
                            + Add Menu
                        </button>
                    </div>
                </div>
                <p className="text-sm font-light text-gray-300 mt-4 text-center">
                    &copy; GATY 2025 All Rights Reserved
                </p>
            </div>
        </>
    );
}
