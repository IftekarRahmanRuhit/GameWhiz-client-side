
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2';
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(true)
  const {theme, setTheme} = useContext(ThemeContext)

  useEffect(()=>{
    console.log('theme', theme)
  },[])


  console.log(user)
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#E1713B] font-semibold underline"
              : "text-black hover:text-[#E1713B] font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allreviews"
          className={({ isActive }) =>
            isActive
              ? "text-[#E1713B] font-semibold underline"
              : "text-black hover:text-[#E1713B] font-semibold"
          }
        >
          All Reviews
        </NavLink>
      </li>

{user ? (
  <>
    <li>
      <NavLink
        to="/addreview"
        className={({ isActive }) =>
          isActive
            ? "text-[#E1713B] font-semibold underline"
            : "text-black hover:text-[#E1713B] font-semibold"
        }
      >
        Add Review
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`/myreviews/${user.email}`}
        className={({ isActive }) =>
          isActive
            ? "text-[#E1713B] font-semibold underline"
            : "text-black hover:text-[#E1713B] font-semibold"
        }
      >
        My Reviews
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`/gamewatchlist/${user.email}`}
        className={({ isActive }) =>
          isActive
            ? "text-[#E1713B] font-semibold underline"
            : "text-black hover:text-[#E1713B] font-semibold"
        }
      >
        Game WatchList
      </NavLink>
    </li>
  </>
) : (
  <>
    <li>
      <NavLink
        to="/login"
        onClick={() =>
          Swal.fire({
            icon: "warning",
            title: "Access Denied",
            text: "Please log in to add a review.",
            confirmButtonText: "Login",
          })
        }
        className="text-black hover:text-[#E1713B] font-semibold"
      >
        Add Review
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        onClick={() =>
          Swal.fire({
            icon: "warning",
            title: "Access Denied",
            text: "Please log in to view your reviews.",
            confirmButtonText: "Login",
          })
        }
        className="text-black hover:text-[#E1713B] font-semibold"
      >
        My Reviews
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        onClick={() =>
          Swal.fire({
            icon: "warning",
            title: "Access Denied",
            text: "Please log in to view your game watchlist.",
            confirmButtonText: "Login",
          })
        }
        className="text-black hover:text-[#E1713B] font-semibold"
      >
        Game WatchList
      </NavLink>
    </li>
  </>
)}


    </>
  );

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-base-100 w-full">
          <div className="text-center">
            <span className="loading loading-bars loading-md"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto dark:bg-slate-700  bg-blue-50 md:p-2 max-w-screen-2xl">
      <div className="navbar w-full md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl text-[#E1713B] font-bold flex justify-center items-center"
          >
            <p className="text-lg md:text-2xl">GameWhiz</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-8">{links}</ul>
        </div>
        <div className="navbar-end">

          <div className="mr-5">

          {theme=='light'?<MdDarkMode onClick={()=>setTheme('dark')} className="text-[30px] bg-slate-300 text-black p-1 rounded-full cursor-pointer" />: <IoMdSunny onClick={()=>setTheme('light')} className="text-[30px] bg-slate-300 text-black p-1 rounded-full cursor-pointer" />}


          {/* <MdDarkMode />
          <IoMdSunny /> */}



          </div>



          {user ? (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    className="w-10 rounded-full"
                    title={user?.displayName || "User"}
                  >
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt="" />
                    ) : (
                      <p className="text-2xl">
                        <FaUserCircle />
                      </p>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex="0"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <div className="card-body p-2 w-full">
                    <span className="text-gray-800 font-bold text-xl text-center block">
                      {user?.displayName}
                    </span>
                    <span className="text-gray-800 font-bold block overflow-hidden text-ellipsis whitespace-nowrap max-w-full text-center">
                      {user?.email}
                    </span>
                    <div className="card-actions">
                      <button
                        onClick={handleSignOut}
                        className="btn bg-[#E1713B] text-white hover:bg-orange-500 btn-block w-full mt-3"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link
                className="btn mr-2 bg-[#E1713B] text-white hover:text-[#E1713B] hidden md:flex"
                to="/Register"
              >
                <FaUser /> sign up
              </Link>
              <Link
                className="btn font-bold bg-[#E1713B] text-white hover:text-[#E1713B]"
                to="/login"
              >
                <LuLogIn />
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar
