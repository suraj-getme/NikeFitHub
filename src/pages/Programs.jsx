// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'

// const programs = [
//   {
//     title: "Weight Loss Transformation",
//     description: "A 12-week program designed to help you shed unwanted pounds and build lean muscle.",
//     price: 99.99,
//     features: ["Customized meal plans", "High-intensity workouts", "Weekly check-ins"]
//   },
//   {
//     title: "Muscle Building Mastery",
//     description: "Gain muscle mass and strength with this 16-week intensive program.",
//     price: 129.99,
//     features: ["Progressive overload training", "Protein-rich meal plans", "Supplement guidance"]
//   },
//   {
//     title: "Flexibility & Mobility",
//     description: "Improve your flexibility and reduce the risk of injuries with this 8-week program.",
//     price: 79.99,
//     features: ["Yoga and stretching routines", "Mobility exercises", "Posture correction"]
//   },
//   {
//     title: "Senior Fitness",
//     description: "A gentle 12-week program tailored for seniors to improve overall health and mobility.",
//     price: 89.99,
//     features: ["Low-impact exercises", "Balance training", "Nutritional guidance for aging well"]
//   }
// ]

// function Programs() {
//   const navigate = useNavigate()
//   return (
//     <div className="container mx-auto px-4 py-20">
//       <h1 className="text-4xl font-bold mb-8 text-blue-800">Our Programs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {programs.map((program, index) => (
//           <motion.div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <h2 className="text-2xl font-bold mb-2 text-blue-600">{program.title}</h2>
//             <p className="text-gray-600 mb-4">{program.description}</p>
//             {/* <p className="text-2xl font-bold mb-4">${program.price}</p> */}
//             <ul className="list-disc list-inside text-gray-600 mb-4">
//               {program.features.map((feature, featureIndex) => (
//                 <li key={featureIndex}>{feature}</li>
//               ))}
//             </ul>
          
//             <button onClick={()=> navigate('/contact')} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
//               Contact Us
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Programs

import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const programs = [
  {
    title: "Weight Loss Transformation",
    description: "A 12-week program designed to help you shed unwanted pounds and build lean muscle.",
    price: 99.99,
    features: ["Customized meal plans", "High-intensity workouts", "Weekly check-ins"]
  },
  {
    title: "Muscle Building Mastery",
    description: "Gain muscle mass and strength with this 16-week intensive program.",
    price: 129.99,
    features: ["Progressive overload training", "Protein-rich meal plans", "Supplement guidance"]
  },
  {
    title: "Flexibility & Mobility",
    description: "Improve your flexibility and reduce the risk of injuries with this 8-week program.",
    price: 79.99,
    features: ["Yoga and stretching routines", "Mobility exercises", "Posture correction"]
  },
  {
    title: "Senior Fitness",
    description: "A gentle 12-week program tailored for seniors to improve overall health and mobility.",
    price: 89.99,
    features: ["Low-impact exercises", "Balance training", "Nutritional guidance for aging well"]
  }
];

function Programs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>FitJourney Programs - Personalized Fitness Solutions</title>
        <meta name="description" content="Explore FitJourney's range of personalized fitness programs designed to help you achieve your health and wellness goals." />
      </Helmet>
      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary-light dark:text-primary-dark"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Programs
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-secondary-light dark:text-secondary-dark">{program.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
            <p className="text-2xl font-bold mb-4 text-primary-light dark:text-primary-dark">${program.price}</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              {program.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <motion.button 
              className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Programs;

