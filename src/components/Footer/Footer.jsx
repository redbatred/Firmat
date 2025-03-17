import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Privacy Policy', href: '#privacy' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'Instagram', href: 'https://instagram.com' },
        { name: 'Facebook', href: 'https://facebook.com' }
      ]
    }
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

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through innovative digital solutions. We help companies grow and succeed in the digital landscape.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {footerLinks.map((column, columnIndex) => (
            <motion.div 
              key={column.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={columnIndex}
            >
              <motion.h3 
                className="text-lg font-semibold mb-4"
                variants={itemVariants}
              >
                {column.title}
              </motion.h3>
              <motion.ul className="space-y-3" variants={containerVariants}>
                {column.links.map((link, linkIndex) => (
                  <motion.li key={link.name} variants={itemVariants} custom={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>© {currentYear} Firm@ Group. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with <span className="text-red-500">♥</span> by the Firm@ Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 