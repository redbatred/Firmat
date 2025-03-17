import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const About = () => {
  const features = [
    'Innovative digital solutions',
    'Expert team of professionals',
    'Client-focused approach',
    'Cutting-edge technologies',
    'Proven track record of success',
    'Continuous support and maintenance'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="heading"
              variants={itemVariants}
            >
              About <span className="text-primary">Firm@</span> Group
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              variants={itemVariants}
            >
              We are a forward-thinking digital agency dedicated to helping businesses transform their online presence. With years of experience and a passion for innovation, we deliver solutions that drive growth and success.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              variants={itemVariants}
            >
              Our team of experts combines creativity with technical expertise to create digital experiences that engage, inspire, and convert. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering tailored solutions that exceed expectations.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Our team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-background rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 