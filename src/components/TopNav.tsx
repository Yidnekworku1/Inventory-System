import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiUserLine, RiLogoutBoxLine, RiSettings4Line, RiNotification3Line } from 'react-icons/ri';

const TopNav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 py-3 flex justify-between items-center fixed w-full top-0 z-50" >
      {/* Left side - Brand/Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          YourApp
        </Link>
      </div>

      {/* Right side - Navigation Items */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <RiNotification3Line className="text-gray-600 text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <RiUserLine className="text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              John Doe
            </span>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>

              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsProfileOpen(false)}
              >
                <RiUserLine className="mr-2" />
                Profile
              </Link>

              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsProfileOpen(false)}
              >
                <RiSettings4Line className="mr-2" />
                Settings
              </Link>

              <button
                onClick={() => {
                  // Handle logout logic here
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <RiLogoutBoxLine className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;