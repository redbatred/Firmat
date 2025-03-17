import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../../assets/image (88).png';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={logoImage} 
        alt="Firm@ Group Logo" 
        className="h-16"
      />
    </motion.div>
  );
};

export default Logo; 