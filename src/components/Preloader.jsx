import { motion } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-gaming-200 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-center"
      >
        <FaGamepad className="text-gaming-100 text-6xl mx-auto mb-4" />
        <div className="relative w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-gaming-100 via-gaming-300 to-gaming-100"
          />
        </div>
        <p className="mt-4 text-gray-300 text-lg">Loading awesome gaming experience...</p>
      </motion.div>
    </div>
  );
};

export default Preloader;