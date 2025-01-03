import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon as WhatsappIcon } from 'lucide-react';

const DietServices = () => {
  const whatsappNumber = '918530471071'; // Include country code
  const message = encodeURIComponent("Hello, I would like to get a custom diet plan.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-16 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Custom Diet Services
        </motion.h2>
        <motion.p 
          className="text-lg text-center mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get a personalized diet plan tailored to your unique needs and goals. Our expert nutritionists will create a custom meal plan that fits your lifestyle and helps you achieve optimal health and fitness results.
        </motion.p>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            <WhatsappIcon className="mr-2" />
            Contact me via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DietServices;

