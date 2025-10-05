import { motion } from 'framer-motion';
import { FaRocket, FaCalendar, FaUsers, FaLock, FaChartLine } from 'react-icons/fa';

const FairLaunches = () => {
  const upcomingLaunches = [
    {
      name: 'CryptoQuest Token',
      symbol: 'CQT',
      date: '2024-04-01',
      time: '15:00 UTC',
      hardcap: '500 ETH',
      softcap: '250 ETH',
      description: 'Revolutionary RPG gaming token with unique reward mechanics.',
      status: 'Upcoming'
    },
    {
      name: 'MetaRacer Token',
      symbol: 'MRT',
      date: '2024-04-05',
      time: '18:00 UTC',
      hardcap: '1000 ETH',
      softcap: '500 ETH',
      description: 'Racing metaverse token with integrated NFT mechanics.',
      status: 'Whitelist Open'
    }
  ];

  const features = [
    {
      icon: <FaLock />,
      title: 'Anti-Bot Protection',
      description: 'Advanced mechanisms to prevent bot manipulation during launch.'
    },
    {
      icon: <FaUsers />,
      title: 'Fair Distribution',
      description: 'Ensure equal opportunity for all participants with our fair launch system.'
    },
    {
      icon: <FaChartLine />,
      title: 'Launch Analytics',
      description: 'Real-time analytics and monitoring during and after launch.'
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
          Fair Token Launches
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Participate in transparent and fair gaming token launches
        </p>
      </motion.div>

      {/* Upcoming Launches */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Upcoming Launches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingLaunches.map((launch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gaming-200/50 rounded-lg p-8 border border-gaming-100/20"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{launch.name}</h3>
                  <span className="text-gaming-100 font-mono">${launch.symbol}</span>
                </div>
                <span className="px-4 py-1 bg-gaming-100/20 text-gaming-100 rounded-full text-sm">
                  {launch.status}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6">{launch.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-400">Hard Cap</p>
                  <p className="text-xl font-bold">{launch.hardcap}</p>
                </div>
                <div>
                  <p className="text-gray-400">Soft Cap</p>
                  <p className="text-xl font-bold">{launch.softcap}</p>
                </div>
              </div>

              <div className="flex items-center text-gray-400 mb-6">
                <FaCalendar className="mr-2" />
                <span>{launch.date} at {launch.time}</span>
              </div>

              <button className="w-full px-6 py-3 bg-gaming-100 text-white rounded-lg hover:bg-gaming-100/90 transition-colors flex items-center justify-center">
                <FaRocket className="mr-2" />
                Join Whitelist
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Launch Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gaming-200/50 rounded-lg p-8 border border-gaming-100/20 text-center"
            >
              <div className="text-4xl text-gaming-100 mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Participate */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gaming-100/10 rounded-2xl p-12"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">How to Participate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gaming-100 mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Join Whitelist</h3>
            <p className="text-gray-400">Register for the whitelist to secure your spot in the launch.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gaming-100 mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">KYC Verification</h3>
            <p className="text-gray-400">Complete the KYC process to participate in the launch.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gaming-100 mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Participate</h3>
            <p className="text-gray-400">Join the fair launch when it goes live and acquire tokens.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FairLaunches;