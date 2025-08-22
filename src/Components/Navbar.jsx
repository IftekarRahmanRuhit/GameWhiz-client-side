
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

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successful");
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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-base-100 dark:bg-gray-900 w-full">
          <div className="text-center dark:text-[cyan] dark:bg-gray-900">
            <span className="loading loading-bars loading-md"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
<div className="max-w-screen-2xl mx-auto">
      <nav
        className={`w-full mx-auto transition-all duration-500 ease-in-out ${
        theme === "light"
            ? isScrolled 
              ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
              : "bg-gradient-to-r from-white via-[#E0F7F9] to-[#F0FCFC]"
            : isScrolled
              ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700"
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
        } md:p-2 max-w-screen-2xl mx-auto fixed top-0 z-50`}
    >
        <div className="navbar w-full md:w-11/12 mx-auto pt-2 pb-2">
          {/* Logo Section */}
        <div className="navbar-start">
          <Link
            to="/"
              className="btn btn-ghost text-2xl font-bold flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
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
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1">
              {navLinks.map((link, index) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                        isActive
                          ? "text-[#00ADB5] bg-[#00ADB5]/20 border border-[#00ADB5]/30 dark:bg-[#00ADB5]/30 dark:border-[#00ADB5]/40"
                          : "text-gray-700 dark:text-gray-200 hover:text-[#00ADB5] dark:hover:text-[#00ADB5]"
                      }`
                    }
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/20 to-[#008C8C]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                  </NavLink>
                </li>
              ))}
            </ul>
        </div>

          {/* Right Section */}
          <div className="navbar-end flex items-center gap-3">
            {/* Theme Toggle */}
            <button
                onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
                localStorage.setItem("theme", theme === "light" ? "dark" : "light");
              }}
              className="btn btn-circle btn-ghost relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/20 to-[#008C8C]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {theme === "light" ? (
                <MdDarkMode className="text-2xl text-gray-700 relative z-10 group-hover:text-[#00ADB5] transition-colors duration-300" />
              ) : (
                <IoMdSunny className="text-2xl text-yellow-400 relative z-10 group-hover:text-[#00ADB5] transition-colors duration-300" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="btn btn-circle btn-ghost lg:hidden relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/20 to-[#008C8C]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {isMenuOpen ? (
                <IoClose className="text-2xl text-gray-700 dark:text-gray-300 relative z-10 group-hover:text-[#00ADB5] transition-colors duration-300" />
              ) : (
                <HiMenuAlt3 className="text-2xl text-gray-700 dark:text-gray-300 relative z-10 group-hover:text-[#00ADB5] transition-colors duration-300" />
              )}
            </button>

            {/* User Section */}
          {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-circle btn-ghost avatar group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/20 to-[#008C8C]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#00ADB5]/30 overflow-hidden relative z-10">
                    {user?.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user?.displayName || "User"} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] flex items-center justify-center">
                        <FaUserCircle className="text-white text-xl" />
                      </div>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu menu-sm bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-[1] mt-3 w-64 p-4"
                >
                  <div className="space-y-3">
                    <div className="text-center pb-3 border-b border-gray-100 dark:border-gray-700">
                      <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                        {user?.displayName || "User"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                      {user?.email}
                      </p>
                    </div>
                      <button
                        onClick={handleSignOut}
                      className="btn bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white border-none w-full transition-all duration-300 transform hover:scale-105"
                      >
                        Sign out
                      </button>
                  </div>
                </ul>
            </div>
          ) : (
              <div className="flex items-center gap-2">
              <Link
                  className="btn btn-sm md:btn-md bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white border-none transition-all duration-300 transform hover:scale-105 hidden md:flex"
                to="/Register"
              >
                <FaUser className="mr-1" /> Sign up
              </Link>
              <Link
                  className="btn btn-sm md:btn-md bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white border-none transition-all duration-300 transform hover:scale-105"
                to="/login"
              >
                <LuLogIn className="mr-1" /> Login
              </Link>
              </div>
          )}
        </div>
      </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-700 shadow-lg">
              <ul className="menu menu-vertical gap-1 p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "text-[#00ADB5] bg-[#00ADB5]/20 border border-[#00ADB5]/30 dark:bg-[#00ADB5]/30 dark:border-[#00ADB5]/40"
                            : "text-gray-700 dark:text-gray-200 hover:text-[#00ADB5] dark:hover:text-[#00ADB5] hover:bg-[#00ADB5]/5 dark:hover:bg-[#00ADB5]/10"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
    </div>
          </div>
        )}
      </nav>
</div>
  );
};

export default Navbar;
