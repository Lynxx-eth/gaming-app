import { motion } from 'framer-motion';
import { FaRocket, FaHandshake, FaLock, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Fair Launches',
      description: 'Participate in transparent and fair token launches with our proven launch platform.'
    },
    {
      icon: <FaHandshake />,
      title: 'AMAs',
      description: 'Connect directly with project teams through our moderated AMA sessions.'
    },
    {
      icon: <FaLock />,
      title: 'Smart Contracts',
      description: 'Secure and audited smart contracts for your gaming projects.'
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description: 'Join our thriving community of gamers, developers, and investors.'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gaming-200">
          <div className="absolute inset-0 bg-gradient-to-r from-gaming-300/20 to-gaming-100/20" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gaming-100 to-gaming-300">
              Next Generation Gaming Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your one-stop destination for gaming services, AMAs, smart contracts, and fair launches.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-3 bg-gaming-100 text-white rounded-lg hover:bg-gaming-100/90 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                to="/fair-launches"
                className="px-8 py-3 border border-gaming-100 text-gaming-100 rounded-lg hover:bg-gaming-100/10 transition-colors"
              >
                View Launches
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the comprehensive suite of services we offer to the gaming community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gaming-200/50 p-6 rounded-lg border border-gaming-100/20 hover:border-gaming-100/40 transition-colors"
            >
              <div className="text-4xl text-gaming-100 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gaming-100/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community and experience the future of gaming services today.
            </p>
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-gaming-100 text-white rounded-lg hover:bg-gaming-100/90 transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;