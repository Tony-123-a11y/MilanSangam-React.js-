import { HiUserGroup, HiShieldCheck, HiLockClosed } from "react-icons/hi";

const TrustedByMillions = () => {
  return (
    <section className="bg-white py-15 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl text-amber-500  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
          Why People Trust Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 max-sm:mt-6 max-sm:gap-4">
         
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-tr from-purple-500 to-indigo-600 text-white text-3xl md:text-4xl p-4 rounded-full shadow-md">
                        <HiUserGroup className="text-3xl" />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                      Best Matches
                      </h3>
                      <p className="text-sm md:text-base text-gray-500">
                      We use advanced algorithms to help you find your perfect partner.
                      </p>
                    </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-tr from-green-500 to-indigo-600 text-white text-3xl md:text-4xl p-4 rounded-full shadow-md">
                        <HiLockClosed className="text-3xl" />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                      100% Privacy
                      </h3>
                      <p className="text-sm md:text-base text-gray-500">
                      Your information is completely secure and never shared.
                      </p>
                    </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-tr from-yellow-500 to-orange-600 text-white text-3xl md:text-4xl p-4 rounded-full shadow-md">
                        <HiShieldCheck className="text-3xl" />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                      Verified Profiles
                      </h3>
                      <p className="text-sm md:text-base text-gray-500">
                      Each profile goes through a verification process to ensure safety.
                      </p>
                    </div>

        

        
        </div>
      </div>
    </section>
  );
};

export default TrustedByMillions;
