import { FaDiscord, FaTwitter, FaGithub, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gaming-200 border-t border-gaming-100/20 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-gaming-100 mb-4">GameHub</h3>
            <p className="text-gray-400">
              Your premier destination for gaming services, AMAs, smart contracts, and fair launches.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gaming-100">Services</Link>
              </li>
              <li>
                <Link to="/amas" className="text-gray-400 hover:text-gaming-100">AMAs</Link>
              </li>
              <li>
                <Link to="/smart-contracts" className="text-gray-400 hover:text-gaming-100">Smart Contracts</Link>
              </li>
              <li>
                <Link to="/fair-launches" className="text-gray-400 hover:text-gaming-100">Fair Launches</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gaming-100">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gaming-100">Whitepaper</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gaming-100">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gaming-100">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Join Community</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gaming-100">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-100">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-100">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-100">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gaming-100/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GameHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gaming-100 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gaming-100 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;