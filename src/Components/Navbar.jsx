import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successful");
        setIsMenuOpen(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/allreviews", label: "All Reviews" },
    ...(user ? [
      { path: "/addreview", label: "Add Review" },
      { path: `/myreviews/${user.email}`, label: "My Reviews" },
      { path: `/gamewatchlist/${user.email}`, label: "Watchlist" }
    ] : [])
  ];

  if (loading) {
    return (
      <div className="w-full h-16 flex items-center justify-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-[#00ADB5] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600 dark:text-gray-300">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <nav
        className={`w-full transition-all duration-300 ease-in-out fixed top-0 z-50 ${
          theme === "light"
            ? isScrolled 
              ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
              : "bg-white border-b border-gray-100"
            : isScrolled
              ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700"
              : "bg-gray-900 border-b border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center gap-2 group transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <span className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent text-xl md:text-2xl font-extrabold">
                  GameWhiz
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? "text-[#00ADB5] bg-[#00ADB5]/10 border border-[#00ADB5]/20"
                        : "text-gray-700 dark:text-gray-200 hover:text-[#00ADB5] dark:hover:text-[#00ADB5] hover:bg-[#00ADB5]/5"
                    }`
                  }
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/10 to-[#008C8C]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                </NavLink>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => {
                  const newTheme = theme === "light" ? "dark" : "light";
                  setTheme(newTheme);
                  localStorage.setItem("theme", newTheme);
                }}
                className="p-2 rounded-lg transition-all duration-300 hover:bg-[#00ADB5]/10 group"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <MdDarkMode className="text-xl text-gray-700 group-hover:text-[#00ADB5] transition-colors duration-300" />
                ) : (
                  <IoMdSunny className="text-xl text-yellow-400 group-hover:text-[#00ADB5] transition-colors duration-300" />
                )}
              </button>

              {/* User Section */}
              {user ? (
                <div className="relative">
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-circle btn-ghost avatar group relative p-1"
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-[#00ADB5]/30 overflow-hidden group-hover:border-[#00ADB5] transition-colors duration-300">
                        {user?.photoURL ? (
                          <img 
                            src={user.photoURL} 
                            alt={user?.displayName || "User"} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div 
                          className={`w-full h-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] flex items-center justify-center ${user?.photoURL ? 'hidden' : 'flex'}`}
                        >
                          <FaUserCircle className="text-white text-lg" />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-[1] mt-3 w-64 p-4"
                    >
                      <div className="space-y-3">
                        <div className="text-center pb-3 border-b border-gray-200 dark:border-gray-700">
                          <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg truncate">
                            {user?.displayName || "User"}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                            {user?.email}
                          </p>
                        </div>
                        <button
                          onClick={handleSignOut}
                          className="w-full px-4 py-2 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          Sign out
                        </button>
                      </div>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <LuLogIn className="text-sm" />
                    Login
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-[#00ADB5]/10 mobile-menu-container"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <IoClose className="text-xl text-gray-700 dark:text-gray-300 hover:text-[#00ADB5] transition-colors duration-300" />
                ) : (
                  <HiMenuAlt3 className="text-xl text-gray-700 dark:text-gray-300 hover:text-[#00ADB5] transition-colors duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mobile-menu-container">
              <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "text-[#00ADB5] bg-[#00ADB5]/10 border border-[#00ADB5]/20"
                            : "text-gray-700 dark:text-gray-200 hover:text-[#00ADB5] dark:hover:text-[#00ADB5] hover:bg-[#00ADB5]/5"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  
                  {/* Mobile Auth Buttons */}
                  {!user && (
                    <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        to="/register"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-center text-[#00ADB5] hover:text-[#008C8C] font-medium transition-colors duration-300 border border-[#00ADB5]/20 rounded-lg"
                      >
                        <FaUser className="inline mr-2" />
                        Sign up
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-center bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white rounded-lg font-medium transition-all duration-300"
                      >
                        <LuLogIn className="inline mr-2" />
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;