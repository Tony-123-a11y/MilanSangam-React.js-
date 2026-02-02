const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-600 text-center mt-3">
        Your privacy is important to us. Learn how we protect your data.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            We collect personal details such as name, email, and profile
            information to provide matchmaking services effectively.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            2. Use of Information
          </h2>
          <p className="mt-2">
            Your information is used to improve matches, enhance user
            experience, and ensure platform security.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            3. Data Protection
          </h2>
          <p className="mt-2">
            We use industry-standard security measures to protect your data
            against unauthorized access or disclosure.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            4. Third-Party Sharing
          </h2>
          <p className="mt-2">
            We do not sell or share your personal data with third parties
            without consent, except when required by law.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            5. Your Consent
          </h2>
          <p className="mt-2">
            By using Milan Sangam, you consent to this Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
