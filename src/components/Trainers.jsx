// import { motion } from 'framer-motion'

// const trainers = [
//   {
//     name: "Nikesh Getme",
//     experience: "Had:- 5+ years of experience in the field of Fitness and Trainings",
//     certifications: ["NASM Certified Personal Trainer", "ACE Certified Nutrition Specialist"],
//     image: "https://myindianthings.com/cdn/shop/products/Gym_Yoga_wallpapers-compressed-page-008_800x.jpg?v=1658401561"
//   },
//   // {
//   //   name: "Jane Smith",
//   //   experience: "8 years of experience",
//   //   certifications: ["ISSA Certified Fitness Trainer", "Precision Nutrition Level 1 Certified"],
//   //   image: "/placeholder.svg"
//   // }
// ]

// function Trainers() {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Expert Trainer</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {trainers.map((trainer, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="flex items-center mb-4">
//                 <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full mr-4" />
//                 <h3 className="text-xl font-semibold">{trainer.name}</h3>
//               </div>
//               <p className="text-gray-600 mb-2">{trainer.experience}</p>
//               <h4 className="font-semibold mb-2">Certifications:</h4>
//               <ul className="list-disc list-inside text-gray-600">
//                 {trainer.certifications.map((cert, certIndex) => (
//                   <li key={certIndex}>{cert}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Trainers

import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  {
    name: "John Doe",
    experience: "10+ years of experience",
    certifications: ["NASM Certified Personal Trainer", "ACE Certified Nutrition Specialist"],
    image: "/path/to/john-doe.jpg"
  },
  {
    name: "Jane Smith",
    experience: "8 years of experience",
    certifications: ["ISSA Certified Fitness Trainer", "Precision Nutrition Level 1 Certified"],
    image: "/path/to/jane-smith.jpg"
  },
  {
    name: "Mike Johnson",
    experience: "12 years of experience",
    certifications: ["NSCA Certified Strength and Conditioning Specialist", "CrossFit Level 2 Trainer"],
    image: "/path/to/mike-johnson.jpg"
  }
];

function Trainers() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
          Meet Our Expert Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={trainer.image} alt={trainer.name} className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{trainer.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{trainer.experience}</p>
              <h4 className="font-semibold mb-2 text-secondary-light dark:text-secondary-dark">Certifications:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {trainer.certifications.map((cert, certIndex) => (
                  <li key={certIndex}>{cert}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;

