import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from './assets/image (88).png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div 
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div 
              className="w-24 h-24 flex items-center justify-center mx-auto mb-4"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                scale: { repeat: Infinity, duration: 1.5, repeatType: "reverse" }
              }}
            >
              <img src={logoImage} alt="Firm@ Group Logo" className="w-full h-full" />
            </motion.div>
            <motion.p 
              className="text-xl font-medium text-gray-800"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          key="app"
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
