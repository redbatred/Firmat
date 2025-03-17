import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const decorationVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <motion.svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M 0, 80 C 0, 17.6 17.6, 0 80, 0 S 160, 17.6 160, 80 142.4, 160 80, 160 0, 142.4 0, 80"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="2"
            variants={decorationVariants}
          />
        </motion.svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20">
        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M 0, 80 C 0, 17.6 17.6, 0 80, 0 S 160, 17.6 160, 80 142.4, 160 80, 160 0, 142.4 0, 80"
            fill="none"
            stroke="var(--secondary-color)"
            strokeWidth="2"
            variants={decorationVariants}
          />
        </motion.svg>
      </div>

      <div className="section">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text "
            variants={itemVariants}
          >
            Innovate. Transform. Succeed.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We help businesses transform their digital presence with cutting-edge solutions that drive growth and innovation.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Started
            </motion.a>
            
            <motion.a
              href="#services"
              className="btn-secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Our Services
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Team collaboration" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 