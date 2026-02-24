import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useGetAllPackagesQuery,
  useCreateOrderMutation,
  useVerifyPaymentMutation,
} from "../Redux/apiSlice";

const Packages = () => {
  const { data, isLoading, error } = useGetAllPackagesQuery();
  const [createOrder] = useCreateOrderMutation();
  const [verifyPayment] = useVerifyPaymentMutation();
  const [activePackage, setActivePackage] = useState(null);

  const handlePayment = async (packageId) => {
    try {
      if (!window.Razorpay) {
        toast.error("Razorpay SDK not loaded");
        return;
      }

      setActivePackage(packageId);

      const res = await createOrder(packageId).unwrap();

      if (!res?.order?.id) {
        toast.error("Order creation failed");
        setActivePackage(null);
        return;
      }

      const options = {
        key: res.key,
        amount: res.order.amount,
        currency: res.order.currency,
        name: "Matrimonial Membership",
        description: "Secure Package Payment",
        order_id: res.order.id,

        handler: async function (response) {
          try {
            await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }).unwrap();

            toast.success("Payment successful 🎉");
             window.location.reload();
          } catch (err) {
            toast.error(err?.data?.message || "Verification failed");
          } finally {
            setActivePackage(null);
          }
        },

        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled");
            setActivePackage(null);
          },
        },

        theme: {
          color: "#f59e0b",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        toast.error(response?.error?.description || "Payment failed");
        setActivePackage(null);
      });

      rzp.open();
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
      setActivePackage(null);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading packages...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-red-500 text-lg">
          Failed to load packages
        </p>
      </div>
    );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Membership
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.packages?.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between transition hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  {pkg.name}
                </h3>

                <p className="text-3xl font-bold text-amber-600 mb-6">
                  ₹{pkg.price}
                  <span className="text-base text-gray-500 ml-2">
                    / {pkg.durationDays === 30
                      ? "Month"
                      : `${pkg.durationDays} Days`}
                  </span>
                </p>

                <ul className="space-y-3 text-gray-600 text-sm mb-8">
                  {pkg.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                disabled={activePackage === pkg._id}
                onClick={() => handlePayment(pkg._id)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-medium transition disabled:opacity-60"
              >
                {activePackage === pkg._id
                  ? "Processing..."
                  : `Pay ₹${pkg.price}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;