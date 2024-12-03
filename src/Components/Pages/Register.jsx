import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import register from "../../../public/register.png";


const Register = () => {
  const { createUser,updateUserProfile} = useContext(AuthContext);
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
    <div className="hero min-h-screen mt-4">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card bg-blue-50 w-full max-w-lg shrink-0 shadow-2xl border mb-16">
          <form onSubmit={handleRegister} className="card-body">
            <img className="w-12 h-12 mx-auto" src={register} alt="" />
            <h1 className="text-3xl font-bold text-center text-[#E1713B] mt-3">
              Create an account
            </h1>
            <p className="text-center text-gray-500 font-medium">
              Please fill in your details to create an account
            </p>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
                required
              />
            </div>
            <div className="form-control relative mt-4">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 bottom-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control mt-4 flex flex-row gap-2 items-center">
              <input
                type="checkbox"
                name="terms"
                className="checkbox"
                required
              />
              <span className="label-text font-semibold">
                Accept Our Terms and Conditions
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#E1713B] hover:bg-orange-600 w-full text-white font-semibold">
                Register
              </button>
            </div>
            <p className="text-center mt-4 font-medium">
              Already have an account?
              <Link to="/login" className="text-[#E1713B] underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
