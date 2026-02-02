const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-600 text-center mt-3">
        Milan Sangam respects your privacy and is committed to protecting your
        personal information.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            We collect personal details such as name, email, contact number,
            photographs, and profile information provided during registration.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            2. Use of Information
          </h2>
          <p className="mt-2">
            Collected information is used to provide matchmaking services,
            improve platform functionality, process payments, and ensure
            security.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            3. Payment Information
          </h2>
          <p className="mt-2">
            Payment transactions are processed securely through trusted third-
            party payment gateways. Milan Sangam does not store card or UPI
            details on its servers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            4. Data Security
          </h2>
          <p className="mt-2">
            We implement reasonable technical and organizational measures to
            safeguard your data against unauthorized access, misuse, or loss.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            5. Data Sharing
          </h2>
          <p className="mt-2">
            We do not sell personal information to third parties. Data may be
            shared only with trusted service providers or when required by law.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            6. User Control & Consent
          </h2>
          <p className="mt-2">
            Users may update or delete their profile information at any time.
            By using Milan Sangam, you consent to this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-gray-800">
            7. Policy Updates
          </h2>
          <p className="mt-2">
            This Privacy Policy may be updated periodically. Continued use of
            the platform indicates acceptance of the updated policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
