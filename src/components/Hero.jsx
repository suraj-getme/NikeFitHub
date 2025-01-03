// // import { useState } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'

// // function Hero() {
// //   const [isModalOpen, setIsModalOpen] = useState(false)

// //   return (
// //     <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
// //       <div className="md:w-1/2 space-y-6">
// //         <motion.h1 
// //           className="text-4xl md:text-5xl font-bold text-blue-800"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           Your Personalized Fitness Journey Starts Here
// //         </motion.h1>
// //         <motion.p 
// //           className="text-xl text-gray-600"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.2 }}
// //         >
// //           Achieve your fitness goals with customized workout plans, nutrition guidance, and community support.
// //         </motion.p>
// //         <motion.button 
// //           className="px-6 py-3 bg-green-500 text-white rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
// //           onClick={() => setIsModalOpen(true)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           Get Started
// //         </motion.button>
// //       </div>
// //       <motion.div 
// //         className="md:w-1/2 mt-10 md:mt-0"
// //         initial={{ opacity: 0, x: 20 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.5, delay: 0.4 }}
// //       >
// //         <img
// //           src="https://media.istockphoto.com/id/612262390/photo/body-building-workout.jpg?s=612x612&w=0&k=20&c=zsRgRf3tuStA7dN5bdFS_x1ud-XdU-dJC7B6iuq_AZk="
// //           alt="Fitness Journey"
// //           className="rounded-lg shadow-lg w-full h-auto"
// //         />
// //       </motion.div>

// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div
// //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //           >
// //             <motion.div
// //               className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //             >
// //               <h2 className="text-2xl font-bold mb-4">Get Started</h2>
// //               <form className="space-y-4">
// //                 <div>
// //                   <label htmlFor="name" className="block mb-1">Name</label>
// //                   <input type="text" id="name" className="w-full px-3 py-2 border rounded" required />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="age" className="block mb-1">Age</label>
// //                   <input type="number" id="age" className="w-full px-3 py-2 border rounded" required />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="address" className="block mb-1">Address</label>
// //                   <textarea id="address" className="w-full px-3 py-2 border rounded" rows="3" required></textarea>
// //                 </div>
// //                 <div className="flex justify-end space-x-4">
// //                   <button
// //                     type="button"
// //                     onClick={() => setIsModalOpen(false)}
// //                     className="px-4 py-2 text-gray-600 hover:text-gray-800"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
// //                   >
// //                     Submit
// //                   </button>
// //                 </div>
// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   )
// // }

// // export default Hero


// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import useMeasure from 'react-use-measure'
// import { ArrowRight } from 'lucide-react'

// function Hero() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [ref, { height }] = useMeasure()

//   return (
//     <section className="container mx-auto px-4 py-20">
//       <div className="flex flex-col md:flex-row items-center">
//         <motion.div
//           className="md:w-1/2 space-y-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.h1 
//             className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-primary-200"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Transform Your Body, Transform Your Life
//           </motion.h1>
//           <motion.p 
//             className="text-xl text-gray-600 dark:text-gray-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             Achieve your fitness goals with personalized workout plans, expert nutrition guidance, and unwavering community support.
//           </motion.p>
//           <motion.button 
//             className="group px-6 py-3 bg-secondary-500 text-white rounded-full text-lg font-semibold hover:bg-secondary-600 transition duration-300 flex items-center"
//             onClick={() => setIsModalOpen(true)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Start Your Journey
//             <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
//           </motion.button>
//         </motion.div>
//         <motion.div 
//           className="md:w-1/2 mt-10 md:mt-0"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <img
//             src="/placeholder.svg"
//             alt="Fitness Journey"
//             className="rounded-lg shadow-lg w-full h-auto"
//           />
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsModalOpen(false)}
//           >
//             <motion.div
//               className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Start Your Fitness Journey</h2>
//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{ height }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div ref={ref}>
//                   <form className="space-y-4">
//                     <div>
//                       <label htmlFor="name" className="block mb-1 text-gray-700 dark:text-gray-300">Name</label>
//                       <input type="text" id="name" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-300">Email</label>
//                       <input type="email" id="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
//                     </div>
//                     <div>
//                       <label htmlFor="fitness-goal" className="block mb-1 text-gray-700 dark:text-gray-300">Fitness Goal</label>
//                       <select id="fitness-goal" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
//                         <option value="">Select a goal</option>
//                         <option value="weight-loss">Weight Loss</option>
//                         <option value="muscle-gain">Muscle Gain</option>
//                         <option value="endurance">Endurance</option>
//                         <option value="flexibility">Flexibility</option>
//                       </select>
//                     </div>
//                     <div className="flex justify-end space-x-4">
//                       <button
//                         type="button"
//                         onClick={() => setIsModalOpen(false)}
//                         className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="px-4 py-2 bg-secondary-500 text-white rounded hover:bg-secondary-600 transition duration-300"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

// export default Hero

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white py-20">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'url("/path/to/pattern.svg")',
          backgroundSize: '400px 400px',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-xl">
              Join FitJourney and embark on a personalized fitness adventure tailored just for you.
            </p>
            <motion.button
              className="px-6 py-3 bg-white text-primary-light dark:text-primary-dark rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://media.istockphoto.com/id/612262390/photo/body-building-workout.jpg?s=612x612&w=0&k=20&c=zsRgRf3tuStA7dN5bdFS_x1ud-XdU-dJC7B6iuq_AZk="
              alt="Fitness Journey"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary-light dark:text-primary-dark">Get Started</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-text-light dark:text-text-dark">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <div>
                  <label htmlFor="age" className="block mb-1 text-text-light dark:text-text-dark">Age</label>
                  <input type="number" id="age" className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-1 text-text-light dark:text-text-dark">Address</label>
                  <textarea id="address" className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600" rows="3" required></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded hover:bg-opacity-90 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;

