

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import register from "../../../public/register.png";
import { Typewriter } from "react-simple-typewriter";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const terms = event.target.terms.checked;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (password.length < 6) {
      toast.error("Password should be 6 Characters");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password should contain at least one uppercase letter, one lowercase letter, and one number. It must be at least 6 characters long."
      );
      return;
    }

    if (!terms) {
      toast.error("Please Accept Our Terms and Condition");
      return;
    }

    createUser(email, password, name)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            toast.error("Update Failed");
          });
      })
      .catch((error) => {});
  };

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen ">
      {/* Container with max width to prevent excessive spreading */}
      <div className="flex min-h-screen max-w-7xl mx-auto">
        {/* Left Side - Welcome Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-8 xl:px-16 py-12">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent">
              <Typewriter
                words={['Join GameWhiz Today']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={70}
              />
            </h1>
            <p className="text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Create your account and become part of the ultimate gaming community. Share reviews, discover new games, and connect with fellow gamers worldwide.
            </p>
            
            {/* Features Cards */}
            <div className="space-y-4">
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-[#00ADB5]/20 p-4 xl:p-6">
                <div className="text-lg xl:text-xl font-bold text-[#00ADB5] mb-2">🎮 Share Your Reviews</div>
                <div className="text-sm xl:text-base text-gray-600 dark:text-gray-400">Rate and review your favorite games to help others discover great content</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-[#00ADB5]/20 p-4 xl:p-6">
                <div className="text-lg xl:text-xl font-bold text-[#00ADB5] mb-2">🌟 Discover Games</div>
                <div className="text-sm xl:text-base text-gray-600 dark:text-gray-400">Find your next favorite game through community recommendations</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-[#00ADB5]/20 p-4 xl:p-6">
                <div className="text-lg xl:text-xl font-bold text-[#00ADB5] mb-2">🤝 Connect with Gamers</div>
                <div className="text-sm xl:text-base text-gray-600 dark:text-gray-400">Join a passionate community of gamers from around the world</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-8 xl:px-16 py-12">
          <div className="w-full max-w-md">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              {/* Form Header */}
              <div className="p-6 pb-4 text-center">
                <div className="flex justify-center mb-4">
                  <img className="w-12 h-12" src={register} alt="Register" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  Create an account
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Please fill in your details to create an account
                </p>
              </div>

              {/* Form Content */}
              <div className="px-6 pb-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Photo Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Enter your photo URL"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create a strong password"
                        className="w-full px-3 py-2.5 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00ADB5] transition-colors duration-200"
                      >
                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Must contain uppercase, lowercase, number, and be 6+ characters
                    </p>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      name="terms"
                      className="w-4 h-4 text-[#00ADB5] bg-gray-100 border-gray-300 rounded focus:ring-[#00ADB5] focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-0.5"
                      required
                    />
                    <label className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      I agree to the{" "}
                      <span className="text-[#00ADB5] hover:text-[#008C8C] cursor-pointer font-medium">
                        Terms and Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-[#00ADB5] hover:text-[#008C8C] cursor-pointer font-medium">
                        Privacy Policy
                      </span>
                    </label>
                  </div>

                  {/* Register Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#00ADB5]/25 dark:hover:shadow-[#00ADB5]/40 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-base"
                    >
                      Create Account
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center pt-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link 
                        to="/login" 
                        className="font-semibold text-[#00ADB5] hover:text-[#008C8C] transition-colors duration-200"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;