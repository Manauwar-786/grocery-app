import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    // <div className='border-t border-gray-400 mt-16'>
    //   <div className='container text-center text-gray-500 py-4'>
    //     &copy; Copyright @Manauwar Aazam 2025.
    //   </div>
    // </div>
    <footer className="bg-green-800 text-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">GroceryMart</h2>
          <p className="text-sm">
            Fresh groceries delivered to your doorstep. Quality you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for exclusive offers.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l-md text-black"
            />
            <button className="bg-yellow-400 px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaFacebook
              className="cursor-pointer hover:text-yellow-400"
              size={24}
            />
            <FaInstagram
              className="cursor-pointer hover:text-yellow-400"
              size={24}
            />
            <FaTwitter
              className="cursor-pointer hover:text-yellow-400"
              size={24}
            />
            <FaLinkedin
              className="cursor-pointer hover:text-yellow-400"
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm border-t border-white pt-4">
        © {new Date().getFullYear()} GroceryMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
