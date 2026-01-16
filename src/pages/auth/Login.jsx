import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LeftImageSection from "../../components/LeftImageSection";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useAuth } from "../../context/AuthContext";
import { UserLoginService } from "../../services/api.service";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { loggedInUser } from "../../Features/Userslice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await UserLoginService(data);
        console.log(response) 
      if (response?.data?.token) {
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('isAuthenticated',true)
        localStorage.setItem('user',JSON.stringify(response.data.user));
        dispatch(loggedInUser({token:response.data.token,user:response.data.user}))
        toast.success("Login Successful!");
        navigate("/profile");
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Login failed. Please try again."
      );
      console.error("Login error:", error);
      setLoading(false)
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 items-center">
        {/* Left Image Section */}
        <div className="hidden md:block">
          <LeftImageSection />
        </div>

        {/* Right Login Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center text-amber-500 mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative mt-2">
                <span className=" absolute left-3 text-xl top-1/2 -translate-y-1/2">
                  <MdOutlineEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3  focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-2">
                <span className=" absolute left-3 text-xl top-1/2 -translate-y-1/2">
                  <TbLockPassword />
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full shadow-sm   shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 py-3   focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
                  // id="fullName"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center h-11 bg-primary cursor-pointer text-white font-bold py-2 rounded-lg  transition-all"
            >
              {loading ? <Loader /> : "Login"}
            </button>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Signup Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
