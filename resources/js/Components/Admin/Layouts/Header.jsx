import { usePage } from '@inertiajs/react';
import { Menu, Bell, Sun, LogOut } from 'lucide-react';

export default function Header({ onMenuClick, isSidebarOpen }) {
    const { user } = usePage().props;

    return (
        <div id="header-container" className="flex justify-between items-center p-4 bg-white shadow-md z-20 relative">
            {/* Left Section: Hamburger + Logo */}
            <div className="flex items-center space-x-4">
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

            </div>

          

            {/* Right Section: Icons & Profile */}
            <div id="icons-container" className="flex items-center space-x-4">

                {/* Notification */}
                <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
                    <Bell className="w-6 h-6 text-gray-600" />
                    <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Dark Mode Toggle (dummy icon) */}
                <button className="p-2 rounded-full hover:bg-gray-100 transition">
                    <Sun className="w-6 h-6 text-gray-600" />
                </button>

                {/* User Profile */}
                <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span>Hello, <b>{user?.name ?? 'Guest'}</b></span>
                    <img src="https://avatar.iran.liara.run/public/28" className="w-10 h-10 rounded-full" alt="Avatar" />

                    {/* Logout Button */}
                    <button className="p-2 rounded-full hover:bg-gray-100 transition">
                        <LogOut className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
}
