import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGamepad, FaDiscord, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/amas', label: 'AMAs' },
    { path: '/smart-contracts', label: 'Smart Contracts' },
    { path: '/fair-launches', label: 'Fair Launches' },
  ];

  return (
    <nav className="bg-gaming-200 border-b border-gaming-100/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaGamepad className="text-gaming-100 text-2xl" />
            <span className="text-xl font-bold text-white">GameHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-gaming-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              <a href="#" className="text-gray-300 hover:text-gaming-100">
                <FaDiscord className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gaming-100">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-gaming-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gaming-200"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 text-gray-300 hover:text-gaming-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-gaming-100">
                  <FaDiscord className="text-xl" />
                </a>
                <a href="#" className="text-gray-300 hover:text-gaming-100">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;