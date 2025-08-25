import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../../../public/google.png";
import user from "../../../public/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  const { signINUser, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    setLoading(true);
    signINUser(email, password)
      .then(() => {
        toast.success("Welcome Back!");
        e.target.reset();
        navigate("/");
      })
      .catch(() => {
        toast.error("Incorrect email or password. Please try again.");
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => navigate("/"))
      .catch(() =>
        toast.error("Unable to sign in with Google. Please try again.")
      )
      .finally(() => setLoading(false));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please provide a valid email address");
    } else {
      navigate("/forgetpassword", { state: { email } });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen">
      {/* Container with max width to prevent excessive spreading */}
      <div className="flex min-h-screen max-w-7xl mx-auto">
        {/* Left Side - Welcome Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-8 xl:px-16 py-12">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent">
              <Typewriter
                words={["Welcome to GameWhiz"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
              />
            </h1>
            <p className="text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Your ultimate destination for game reviews and gaming insights.
              Join our community of passionate gamers and discover your next
              favorite game.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 xl:gap-6">
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-[#00ADB5]/20 p-4 xl:p-6">
                <div className="text-2xl xl:text-3xl font-bold text-[#00ADB5] mb-2">
                  10K+
                </div>
                <div className="text-sm xl:text-base text-gray-600 dark:text-gray-400 font-medium">
                  Active Gamers
                </div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-[#00ADB5]/20 p-4 xl:p-6">
                <div className="text-2xl xl:text-3xl font-bold text-[#00ADB5] mb-2">
                  50K+
                </div>
                <div className="text-sm xl:text-base text-gray-600 dark:text-gray-400 font-medium">
                  Reviews Shared
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-8 xl:px-16 py-12 mt-16">
          <div className="w-full max-w-md">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              {/* Form Header */}
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  Sign in to your account
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Access your gaming dashboard and continue your journey
                </p>
              </div>

              {/* Form Content */}
              <div className="px-6 pb-6">
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      ref={emailRef}
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
                        placeholder="Enter your password"
                        className="w-full px-3 py-2.5 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00ADB5] transition-colors duration-200"
                      >
                        {showPassword ? (
                          <FaEyeSlash size={18} />
                        ) : (
                          <FaEye size={18} />
                        )}
                      </button>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        onClick={handleForgetPassword}
                        className="text-sm font-medium text-[#00ADB5] hover:text-[#008C8C] transition-colors duration-200"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>

                  {/* Login Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#00ADB5]/25 dark:hover:shadow-[#00ADB5]/40 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Signing In...
                        </div>
                      ) : (
                        "Sign in"
                      )}
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                        or
                      </span>
                    </div>
                  </div>

                  {/* Google Sign In */}
                  <div>
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-gradient-to-r from-[#00ADB5]/10 to-[#008C8C]/10 border border-[#00ADB5]/20 rounded-lg hover:bg-gradient-to-r hover:from-[#00ADB5]/20 hover:to-[#008C8C]/20 transition-all duration-200 font-medium text-[#00ADB5] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <img className="w-5 h-5" src={google} alt="Google" />
                      {loading ? "Loading..." : "Continue with Google"}
                    </button>
                  </div>

                  {/* Register Link */}
                  <div className="text-center pt-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="font-semibold text-[#00ADB5] hover:text-[#008C8C] transition-colors duration-200"
                      >
                        Create an account
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

export default Login;
