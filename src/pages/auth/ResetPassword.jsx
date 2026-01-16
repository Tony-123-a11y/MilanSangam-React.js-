import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { ResetPasswordService } from "../../services/api.service";
import LeftImageSection from "../../components/LeftImageSection";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useParams();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await ResetPasswordService({ token, newPassword: data.password });
      toast.success("Password reset successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 items-center">
        {/* Left Image Section */}
        <div className="hidden md:block">
          <LeftImageSection />
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center text-amber-500 mb-6">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full shadow-sm shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 pr-10 py-3 mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
              />
              <span
                className="absolute right-4 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full shadow-sm shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-10 pr-10 py-3 mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
              />
              <span
                className="absolute right-4 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirm((prev) => !prev)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center h-11 bg-primary text-white font-bold py-2 rounded-lg transition-all"
            >
              {loading ? "Processing..." : "Reset Password"}
            </button>

            <div className="text-center mt-4">
              <a
                href="/login"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Go back to Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
