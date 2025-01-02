// function About() {
//     return (
//       <div className="container mx-auto px-4 py-20">
//         <h1 className="text-4xl font-bold mb-8 text-blue-800">About Us</h1>
//         <p className="text-lg text-gray-700">
//           TrainWithNike is dedicated to helping you achieve your fitness goals through personalized workout plans,
//           nutrition guidance, and a supportive community. Our team of experts is committed to providing you with
//           the tools and resources you need to succeed on your fitness journey.
//         </p>
//       </div>
//     )
//   }
  
//   export default About
  
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>About FitJourney - Your Personal Fitness Companion</title>
        <meta name="description" content="Learn about FitJourney's mission to empower individuals on their fitness journey with personalized workout plans and expert guidance." />
      </Helmet>
      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary-light dark:text-primary-dark"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About FitJourney
      </motion.h1>
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <p className="text-lg mb-4">At FitJourney, we believe that everyone deserves a personalized approach to fitness. Our mission is to empower individuals to achieve their health and wellness goals through tailored workout plans, expert nutrition guidance, and a supportive community.</p>
          <p className="text-lg mb-4">Founded by a team of certified personal trainers and nutritionists, FitJourney combines cutting-edge technology with proven fitness methodologies to deliver a unique and effective fitness experience.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-secondary-light dark:text-secondary-dark">Our Approach</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Personalized workout plans tailored to your goals and preferences</li>
            <li>Nutrition guidance that fits your lifestyle and dietary needs</li>
            <li>Progress tracking and analytics to keep you motivated</li>
            <li>A supportive community to share experiences and stay accountable</li>
          </ul>
        </div>
      </motion.div>
      <motion.p 
        className="text-lg mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Join us on this journey to a healthier, stronger you. Let's transform your fitness journey together!
      </motion.p>
    </div>
  );
}

export default About;

