import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGraduationCap, FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiGraduationCap} className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Brightwood Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nurturing young minds and building tomorrow's leaders through excellence in education, 
              character development, and innovative learning experiences.
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiFacebook} className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <SafeIcon icon={FiTwitter} className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <SafeIcon icon={FiInstagram} className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Education St, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@brightwoodacademy.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Brightwood Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;