import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  PresentationChartLineIcon, 
  DevicePhoneMobileIcon, 
  CubeIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.',
      icon: <CodeBracketIcon className="h-10 w-10" />,
      color: 'from-primary to-purple-500'
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that increase visibility, drive traffic, and convert leads into customers.',
      icon: <PresentationChartLineIcon className="h-10 w-10" />,
      color: 'from-secondary to-yellow-400'
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.',
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      color: 'from-background to-green-400'
    },
    {
      id: 4,
      title: 'Product Design',
      description: 'User-centered design solutions that combine aesthetics with functionality to create intuitive interfaces.',
      icon: <CubeIcon className="h-10 w-10" />,
      color: 'from-hover to-red-400'
    }
  ];

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.1
      }
    }),
    hover: {
      y: -10,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="heading"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="subheading mx-auto"
            variants={itemVariants}
          >
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className={`mb-6 p-4 rounded-lg bg-gradient-to-br ${service.color} w-fit`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.a
                href="#contact"
                className="inline-block mt-4 text-primary font-medium hover:underline"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 