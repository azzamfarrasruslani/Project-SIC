import { usePage } from '@inertiajs/react';
import { Menu } from 'lucide-react';

export default function Header({ onMenuClick, isSidebarOpen }) {
    const { user } = usePage().props;

    return (
        <div id="header-container" className="flex justify-between items-center p-4 bg-white shadow-md z-20 relative">
            {/* Hamburger Button */}
            <div className="md:hidden">
                {!isSidebarOpen && (
                    <button
                        onClick={onMenuClick}
                        className="p-2 bg-lime-900 text-white rounded-full shadow-lg hover:bg-green-700 transition"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                )}
            </div>

            {/* Search Bar */}
            <div id="search-bar" className="relative w-full max-w-lg ml-4">
                <input
                    className="border border-gray-100 p-2 pr-10 bg-white w-full rounded-md outline-none"
                    type="text"
                    placeholder="Search Here..."
                />
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-4">
                <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
                </div>
                <div className="p-3 bg-blue-100 rounded-2xl cursor-pointer" />
                <div className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer" />
                <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span>Hello, <b>{user?.name ?? 'Guest'}</b></span>
                    <img src="https://avatar.iran.liara.run/public/28" className="w-10 h-10 rounded-full" alt="Avatar" />
                </div>
            </div>
        </div>
    );
}
