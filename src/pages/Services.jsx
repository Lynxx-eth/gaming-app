import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaRocket, FaUsers, FaChartLine, FaCog } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Smart Contract Development',
      description: 'Custom smart contract development for gaming tokens, NFTs, and in-game assets.',
      features: [
        'Solidity Development',
        'Contract Optimization',
        'Security Best Practices',
        'Integration Support'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security Audits',
      description: 'Comprehensive security audits to ensure your gaming contracts are safe and reliable.',
      features: [
        'Code Review',
        'Vulnerability Assessment',
        'Best Practices Analysis',
        'Documentation Review'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'Fair Launch Platform',
      description: 'Launch your gaming token with our transparent and secure launch platform.',
      features: [
        'Anti-Bot Protection',
        'Fair Distribution',
        'Lock Mechanisms',
        'Launch Analytics'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Community Management',
      description: 'Professional community management services for your gaming project.',
      features: [
        'AMA Organization',
        'Community Engagement',
        'Social Media Management',
        'Content Creation'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Marketing Services',
      description: 'Strategic marketing solutions to promote your gaming project.',
      features: [
        'Influencer Partnerships',
        'PR Campaigns',
        'Social Media Marketing',
        'Community Building'
      ]
    },
    {
      icon: <FaCog />,
      title: 'Technical Consulting',
      description: 'Expert technical consulting for your blockchain gaming project.',
      features: [
        'Architecture Design',
        'Technology Stack',
        'Scalability Solutions',
        'Performance Optimization'
      ]
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gaming-100 to-gaming-300">
          Our Services
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive solutions for your blockchain gaming project
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gaming-200/50 rounded-lg p-6 border border-gaming-100/20 hover:border-gaming-100/40 transition-all hover:transform hover:-translate-y-1"
          >
            <div className="text-4xl text-gaming-100 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gaming-100 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-gaming-100/10 rounded-2xl p-12"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Gaming Project?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how we can help bring your blockchain gaming vision to life.
        </p>
        <button className="px-8 py-3 bg-gaming-100 text-white rounded-lg hover:bg-gaming-100/90 transition-colors">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Services;