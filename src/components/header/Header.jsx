import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../Logo/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const hamburgerLineVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  };

  const secondLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const thirdLineVariants = {
    closed: { rotate: 0 },
    open: { rotate: -45 }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 ml-10">
              <a href="#home" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                Home
              </a>
              <a href="#services" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button - explicitly hidden on md and larger screens */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 focus:outline-none md:hidden"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <motion.span
                className="absolute top-0 left-0 w-6 h-0.5 bg-gray-900 rounded-full"
                variants={hamburgerLineVariants}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
                style={{ transformOrigin: "center" }}
              ></motion.span>
              <motion.span
                className="absolute top-[10px] left-0 w-6 h-0.5 bg-gray-900 rounded-full"
                variants={secondLineVariants}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
              ></motion.span>
              <motion.span
                className="absolute top-[20px] left-0 w-6 h-0.5 bg-gray-900 rounded-full"
                variants={thirdLineVariants}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
                style={{ transformOrigin: "center" }}
              ></motion.span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu - solid background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-white"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Logo />
              <button
                onClick={toggleMenu}
                className="rounded-md p-2 text-gray-900 hover:text-primary focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-4 pt-8 pb-6 space-y-8">
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-xl font-medium text-gray-900 hover:text-primary"
                  variants={menuItemVariants}
                  onClick={toggleMenu}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div variants={menuItemVariants} className="pt-6">
                <a href="#contact" className="btn-primary w-full text-center block">
                  Get Started
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 