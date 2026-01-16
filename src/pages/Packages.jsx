// Packages.tsx
import React from "react";

const packages = [
  {
    title: "Mini Package",
    price: "Rs 95 for 2 days",
    features: [
  " 3 Contact Views",
" Send unlimited Interest",
" Duration – 2 Days",
" Send Unlimited Interests",
" Send Unlimited Messages",
    ],
  },
  {
    title: "Basic Package",
    price: "Rs 150 Per Month",
    features: [
      "20 Contact Views",
      "Send unlimited Interest",
      "Duration – 1 Month",
      "Send Unlimited Interests",
      "Send Unlimited Messages",
    ],
  },
  {
    title: "Standard Package",
    price: "Rs 250 Per Month",
    features: [
      "35 Contact Views",
      "Send unlimited Interest",
      "Duration – 1 Month",
      "Send Unlimited Interests",
      "Send Unlimited Messages",
    ],
  },
  {
    title: "Regular Package",
    price: "Rs 350 Per Month",
    features: [
      "45 Contact Views",
      "Send unlimited Interest",
      "Duration – 1 Month",
      "Send Unlimited Interests",
      "Send Unlimited Messages",
    ],
  },
  {
    title: "Premium Package",
    price: "Rs 450 Per Month",
    features: [
      "55 Contact Views",
      "Send unlimited Interest",
      "Duration – 1 Month",
      "Send Unlimited Interests",
      "Send Unlimited Messages",
    ],
  },
];

const Packages = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 font-['montserrat']">
          Our Packages
        </h2>
        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-md p-6 flex flex-col justify-between font-['poppins']"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 font-['montserrat']">
                  {pkg.title}
                </h3>
                <p className="text-amber-600 font-bold mb-4">{pkg.price}</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-xl transition cursor-pointer">
                Pay Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
