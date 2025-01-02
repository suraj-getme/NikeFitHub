// function Features() {
//   const features = [
//     {
//       icon: "🏋️‍♂️",
//       title: "Personalized Workouts Training",
//       description: "Customized workout plans tailored to your fitness goals and preferences."
//     },
//     {
//       icon: "🥗",
//       title: "Nutrition Guidance or Diet Planning",
//       description: "Customized meal plans and recipes to support your fitness journey."
//     },
//     {
//       icon: "📊",
//       title: "Progress Tracking",
//       description: "Visualize your progress with detailed analytics and insights."
//     },
//     {
//       icon: "👥",
//       title: "Community Support",
//       description: "Connect with like-minded individuals and share your fitness journey."
//     }
//   ]

//   return (
//     <section className="container mx-auto px-4 py-20">
//       <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
//         Empowering Features for Your Fitness Journey
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map((feature, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//             <div className="text-4xl mb-4">{feature.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//             <p className="text-gray-600">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Features

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="h-10 w-10" />,
    title: 'Personalized Workouts',
    description: 'AI-generated workout plans tailored to your fitness goals and preferences.'
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: 'Nutrition Guidance',
    description: 'Customized meal plans and recipes to support your fitness journey.'
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: 'Progress Tracking',
    description: 'Visualize your progress with detailed analytics and insights.'
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Community Support',
    description: 'Connect with like-minded individuals and share your fitness journey.'
  }
];

function Features() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
          Empowering Features for Your Fitness Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 text-secondary-light dark:text-secondary-dark">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;



