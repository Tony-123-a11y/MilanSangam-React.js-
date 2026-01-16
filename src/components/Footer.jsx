import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-10 px-4 max-sm:hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold mb-2">Milan Sangam</h2>
          <p className="text-sm text-white">
            Helping millions find their perfect life partner worldwide.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support Links</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              <Link to="/login">User Login</Link>
            </li>
            <li>
              <Link to="/register">Create Account</Link>
            </li>
            <li>
              <Link to="/profile/search">Find a Match</Link>
            </li>
            <li>
              <Link to="/support">Need Help?</Link>
            </li>
            
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Corporate</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              <Link to="/about">Contact Us</Link>
            </li>
            
            <li>
              <Link to="/blog">Report Fraud or Fake Profile</Link>
            </li>
           
            
            <li>
              <Link to="/about">About Us</Link>
            </li>
            
            <li>
              <Link to="/register">Create Your Profile</Link>
            </li>
           
            <li>
              <Link to="/profile/search">Search your Life Partner</Link>
            </li>
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Your Privacy</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              <Link to="/terms"> User Terms</Link>
            </li>
            <li>
              <Link to="/privacy">User Privacy </Link>
            </li>
            <li>
              <Link to="/reportProfile">Report Profile</Link>
            </li>
          
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white mt-10 pt-6 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Milan Sangam. All rights reserved. <br />
        Designed by{" "}
        <a
          href="https://softverge.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gradient hover:underline"
        >
         Softverge
        </a>
      </div>
    </footer>
  );
};

export default Footer;
