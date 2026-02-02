const Support = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600">
        Support & Help Center
      </h1>
      <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
        Find answers to common questions or get in touch with our support team
        for further assistance.
      </p>

      {/* Support Sections */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {/* FAQs */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h3 className="font-medium">
                How do I create a profile?
              </h3>
              <p className="mt-1 text-gray-600">
                Click on “Create Your Profile” and fill in the required details.
                Make sure all information is accurate for better matches.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Is Milan Sangam free to use?
              </h3>
              <p className="mt-1 text-gray-600">
                Basic registration is free. Premium features may require a
                subscription.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                How can I report a fake profile?
              </h3>
              <p className="mt-1 text-gray-600">
                Use the “Report Profile” option available on the user profile
                page or visit the Report Profile section.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                How do I reset my password?
              </h3>
              <p className="mt-1 text-gray-600">
                Go to the Login page and click on “Forgot Password” to reset
                your password.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Support
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            If you couldn’t find your answer above, feel free to contact us
            directly.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              📧 Email: <span className="font-medium">support@milansangam.com</span>
            </p>
            <p>
              📞 Phone: <span className="font-medium">+91 9XXXX XXXXX</span>
            </p>
            <p>
              🕒 Working Hours: Monday – Saturday (10:00 AM – 6:00 PM)
            </p>
          </div>

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Go to Contact Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
