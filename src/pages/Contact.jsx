const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
        We are here to help you. Reach out to us for support, queries, or
        feedback anytime.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Milan Sangam
            </h3>
            <p className="text-gray-600 mt-1">
              Bringing hearts together with trust and transparency.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              📧 Email: <span className="font-medium">support@milansangam.com</span>
            </p>
            <p className="text-gray-700 mt-1">
              📞 Phone: <span className="font-medium">+91 9XXXX XXXXX</span>
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              🕒 Support Hours:
            </p>
            <p className="text-gray-600">
              Monday – Saturday (10:00 AM – 6:00 PM)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
