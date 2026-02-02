const Terms = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 text-center mt-3">
        Please read these terms carefully before using Milan Sangam.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing or using Milan Sangam, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use our
            services.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            2. User Responsibilities
          </h2>
          <p className="mt-2">
            You are responsible for maintaining the confidentiality of your
            account and ensuring that the information you provide is accurate
            and genuine.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            3. Profile Authenticity
          </h2>
          <p className="mt-2">
            Fake, misleading, or fraudulent profiles are strictly prohibited.
            Milan Sangam reserves the right to suspend or terminate such
            accounts.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            4. Limitation of Liability
          </h2>
          <p className="mt-2">
            Milan Sangam is not responsible for any personal, emotional, or
            financial losses arising from interactions between users.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            5. Changes to Terms
          </h2>
          <p className="mt-2">
            We reserve the right to update these terms at any time. Continued
            use of the service implies acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
