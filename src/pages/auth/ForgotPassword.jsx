import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ForgotPasswordService } from "../../services/api.service";
import LeftImageSection from "../../components/LeftImageSection";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // 👈 add this
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await ForgotPasswordService(data);
      toast.success("Password reset link sent!");
      reset();
    } catch (err) {
      console.log(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className=" flex items-center justify-center px-4 py-12 bg-gray-100">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 items-center">
        {/* Left Image Section */}
        <div className="hidden md:block">
          <LeftImageSection />
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center text-amber-500 mb-6">
            Reset Your Password
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full shadow-sm shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-4 py-3 mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center h-11 bg-primary text-white font-bold py-2 rounded-lg transition-all"
            >
              Send Reset Link
            </button>
          </form>
          <div className="text-center mt-6">
            <Link
              to="/login"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Go back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
