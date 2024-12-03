import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import google from "../../../public/google.png";
import user from "../../../public/user.png";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

  const { signINUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate()

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
      })

  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        toast.error("Unable to sign in with Google. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please provide a valid email address");
    } else {
      navigate('/forgetpassword', { state: { email } })
    }
  };

  return (
    <div className="hero  min-h-screen mt-4">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">

        <div className="card bg-blue-50 w-full max-w-lg shrink-0 shadow-2xl border mb-16">
          <form onSubmit={handleLogin} className="card-body">
            <img className="w-12 h-12 mx-auto" src={user} alt="" />
            <h1 className="text-3xl font-bold text-center text-[#E1713B]">Welcome Back</h1>
            <p className="text-center text-gray-500 font-medium">Please enter your deatils to sign in</p>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                ref={emailRef}
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg font-semibold">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <a
                  onClick={handleForgetPassword}
                  
                  className="label-text-alt link link-hover text-[#E1713B] text-sm font-medium"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-[#E1713B] hover:bg-orange-600 w-full text-white font-semibold"
                disabled={loading} 
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <p className="text-center mt-4 font-medium">
              Don't have an account?
              <Link to="/register" className="text-[#E1713B] underline">
                Register
              </Link>
            </p>
          </form>
          <div className="mb-5 text-center">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-ghost "
              disabled={loading} 
            >
              <div className="flex justify-center items-center space-x-2"> 
                <img className="w-5 h-5" c src={google} alt="" />
              <p className="font-bold">{loading ? "Loading..." : "Sign In with Google"}</p>
              </div>
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Login;
