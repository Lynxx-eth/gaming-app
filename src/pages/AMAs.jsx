import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaDiscord } from 'react-icons/fa';

const AMAs = () => {
  const upcomingAMAs = [
    {
      project: 'CryptoQuest',
      date: '2024-03-25',
      time: '15:00 UTC',
      platform: 'Discord',
      description: 'Join us for an AMA with the CryptoQuest team discussing their upcoming RPG launch.',
      tags: ['GameFi', 'RPG', 'P2E']
    },
    {
      project: 'MetaRacer',
      date: '2024-03-27',
      time: '18:00 UTC',
      platform: 'Discord',
      description: 'Exclusive AMA session with MetaRacer developers about their racing metaverse.',
      tags: ['Racing', 'Metaverse', 'NFT']
    },
    {
      project: 'BlockBattle',
      date: '2024-03-30',
      time: '20:00 UTC',
      platform: 'Discord',
      description: 'Learn about the future of blockchain-based battle royale games with BlockBattle team.',
      tags: ['Battle Royale', 'Multiplayer', 'Rewards']
    }
  ];

  const pastAMAs = [
    {
      project: 'CryptoLegends',
      date: '2024-03-20',
      recording: 'https://example.com/recording1',
      summary: 'Discussion about the future of blockchain gaming and NFT integration.'
    },
    {
      project: 'MetaWorld',
      date: '2024-03-18',
      recording: 'https://example.com/recording2',
      summary: 'Deep dive into the MetaWorld ecosystem and upcoming features.'
    },
    {
      project: 'GameChain',
      date: '2024-03-15',
      recording: 'https://example.com/recording3',
      summary: 'Technical overview of GameChain's blockchain gaming infrastructure.'
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
          Ask Me Anything (AMA)
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Connect directly with gaming project teams and get your questions answered
        </p>
      </motion.div>

      {/* Upcoming AMAs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming AMAs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingAMAs.map((ama, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gaming-200/50 rounded-lg p-6 border border-gaming-100/20"
            >
              <h3 className="text-xl font-bold mb-3">{ama.project}</h3>
              <div className="flex items-center text-gray-400 mb-2">
                <FaCalendar className="mr-2" />
                <span>{ama.date}</span>
              </div>
              <div className="flex items-center text-gray-400 mb-4">
                <FaClock className="mr-2" />
                <span>{ama.time}</span>
              </div>
              <p className="text-gray-300 mb-4">{ama.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {ama.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gaming-100/20 text-gaming-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gaming-100 text-white rounded-lg hover:bg-gaming-100/90 transition-colors">
                <FaDiscord className="mr-2" />
                Join AMA
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past AMAs */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Past AMAs</h2>
        <div className="space-y-6">
          {pastAMAs.map((ama, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gaming-200/50 rounded-lg p-6 border border-gaming-100/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{ama.project}</h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <FaCalendar className="mr-2" />
                    <span>{ama.date}</span>
                  </div>
                  <p className="text-gray-300">{ama.summary}</p>
                </div>
                <a
                  href={ama.recording}
                  className="mt-4 md:mt-0 inline-flex items-center text-gaming-100 hover:text-gaming-100/80 transition-colors"
                >
                  Watch Recording
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AMAs;