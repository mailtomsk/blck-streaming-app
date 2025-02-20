import React from 'react';
import { Bell, Search, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent px-4 sm:px-16 py-4 sm:py-6 lg:bg-black lg:opacity-70 md:bg-black md:opacity-70">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-12">
          <Link to="/" className="text-3xl font-bold text-red-600">
            <img className="img-fluid logo h-[2.375rem] max-h-[2.375rem]" src="https://watch.blck.com/dashboard/images/logo-full-new.png" loading="lazy" alt="Blck" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden text-white hover:text-gray-300 transition"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <div className="hidden sm:flex gap-6 text-gray-300">
            <Link
              to="/"
              className={`hover:text-white transition ${
                location.pathname === '/' ? 'text-white' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/tv-shows"
              className={`hover:text-white transition ${
                location.pathname === '/tv-shows' ? 'text-white' : ''
              }`}
            >
              TV Shows
            </Link>
            <Link
              to="/movies"
              className={`hover:text-white transition ${
                location.pathname === '/movies' ? 'text-white' : ''
              }`}
            >
              Movies
            </Link>
            <Link
              to="/new-and-popular"
              className={`hover:text-white transition ${
                location.pathname === '/new-and-popular' ? 'text-white' : ''
              }`}
            >
              New & Popular
            </Link>
            <Link
              to="/my-list"
              className={`hover:text-white transition ${
                location.pathname === '/my-list' ? 'text-white' : ''
              }`}
            >
              My List
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-6 text-white">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80"
              alt="Profile"
              className="w-8 h-8 rounded"
            />
            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 border-t border-gray-800">
          <div className="flex flex-col py-4 px-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 hover:bg-gray-800 rounded-lg transition ${
                location.pathname === '/' ? 'text-white' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tv-shows"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 hover:bg-gray-800 rounded-lg transition ${
                location.pathname === '/tv-shows'
                  ? 'text-white'
                  : 'text-gray-300'
              }`}
            >
              TV Shows
            </Link>
            <Link
              to="/movies"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 hover:bg-gray-800 rounded-lg transition ${
                location.pathname === '/movies' ? 'text-white' : 'text-gray-300'
              }`}
            >
              Movies
            </Link>
            <Link
              to="/new-and-popular"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 hover:bg-gray-800 rounded-lg transition ${
                location.pathname === '/new-and-popular'
                  ? 'text-white'
                  : 'text-gray-300'
              }`}
            >
              New & Popular
            </Link>
            <Link
              to="/my-list"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 hover:bg-gray-800 rounded-lg transition ${
                location.pathname === '/my-list'
                  ? 'text-white'
                  : 'text-gray-300'
              }`}
            >
              My List
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
