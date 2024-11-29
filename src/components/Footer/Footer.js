import React from 'react';
import logo from "../../assets/logo/BSESA-removebg.png"
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Logo and Company Name Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 mr-3" 
            />
            <span className="text-white text-xl font-semibold">Your Company</span>
          </div>

          {/* Social Media Icons (Optional) */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-lg mb-3">Company</h5>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-3">Support</h5>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-3">Follow Us</h5>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
