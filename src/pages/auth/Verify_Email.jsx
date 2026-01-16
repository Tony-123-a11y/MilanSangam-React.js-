import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LeftImageSection from "../../components/LeftImageSection";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { UserVerifyEmailService } from "../../services/api.service";
import { useAuth } from "../../context/AuthContext";

const VerifyEmail = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await UserVerifyEmailService(data);
      toast.success("Email verified successfully!");
      // Optionally update auth context if token/user info is returned
      // updateAuthData(response.data);
      navigate("/login"); // Navigate to desired page
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to verify email. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 items-center">
        {/* Left Image Section */}
        <div className="hidden md:block">
          <LeftImageSection />
        </div>

        {/* Right Verify Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center text-amber-500 mb-6">
            Verify Your Email
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* OTP */}
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                OTP
              </label>
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
                {...register("otp", {
                  required: "OTP is required",
                  minLength: {
                    value: 4,
                    message: "OTP must be at least 4 characters",
                  },
                })}
                className="w-full shadow-sm shadow-gray-300 placeholder:text-gray-500 text-gray-700 rounded-xl pl-4 py-3 mt-2 focus:ring-1 focus:ring-amber-500 focus:outline-none transition bg-white/60 max-sm:text-sm"
              />
              {errors.otp && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.otp.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center h-11 bg-primary text-white font-bold py-2 rounded-lg transition-all"
            >
              {loading ? <Loader /> : "Verify Email"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
