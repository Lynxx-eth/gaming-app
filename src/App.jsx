import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AMAs from './pages/AMAs';
import SmartContracts from './pages/SmartContracts';
import FairLaunches from './pages/FairLaunches';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gaming-200 text-white font-gaming">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/amas" element={<AMAs />} />
            <Route path="/smart-contracts" element={<SmartContracts />} />
            <Route path="/fair-launches" element={<FairLaunches />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;