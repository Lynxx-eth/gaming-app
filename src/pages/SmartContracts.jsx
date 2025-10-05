import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaCheckCircle, FaFileContract, FaRocket, FaUsers } from 'react-icons/fa';

const SmartContracts = () => {
  const contracts = [
    {
      icon: <FaFileContract />,
      title: 'Gaming Token Contracts',
      description: 'Custom ERC-20/BEP-20 token contracts with gaming-specific features.',
      features: [
        'Anti-bot mechanisms',
        'Dynamic tax system',
        'Reward distribution',
        'Token vesting'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'NFT Gaming Contracts',
      description: 'Smart contracts for in-game NFTs and collectibles.',
      features: [
        'ERC-721/ERC-1155 support',
        'Breeding mechanics',
        'Attribute system',
        'Marketplace integration'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'GameFi Contracts',
      description: 'DeFi mechanics integrated with gaming features.',
      features: [
        'Staking systems',
        'Yield farming',
        'Reward pools',
        'LP token management'
      ]
    }
  ];

  const process = [
    {
      icon: <FaCode />,
      title: 'Development',
      description: 'Custom smart contract development following best practices and security standards.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Audit',
      description: 'Comprehensive security audit by our expert team of blockchain developers.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Deployment',
      description: 'Secure deployment to mainnet with proper verification and documentation.'
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
          Smart Contract Solutions
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Secure and efficient smart contracts for your blockchain gaming project
        </p>
      </motion.div>

      {/* Contract Types */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Smart Contract Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contracts.map((contract, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gaming-200/50 rounded-lg p-8 border border-gaming-100/20"
            >
              <div className="text-4xl text-gaming-100 mb-6">{contract.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{contract.title}</h3>
              <p className="text-gray-400 mb-6">{contract.description}</p>
              <ul className="space-y-3">
                {contract.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-gaming-100 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl text-gaming-100 mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gaming-100/10 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Smart Contract?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Get in touch with our team to discuss your project requirements and how we can help bring your vision to life.
        </p>
        <button className="px-8 py-3 bg-gaming-100 text-white rounded-lg hover:bg-gaming-100/90 transition-colors">
          Contact Us
        </button>
      </motion.section>
    </div>
  );
};

export default SmartContracts;