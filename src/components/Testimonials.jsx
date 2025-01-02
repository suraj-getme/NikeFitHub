// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Sarah L.",
//       image: "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
//       quote: "FitWithNike has completely transformed my approach to fitness. The personalized workouts and meal plans have helped me achieve results I never thought possible!"
//     },
//     {
//       name: "Mike T.",
//       image: "https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg",
//       quote: "The community support on FitWithNike is incredible. It's so motivating to connect with others on the same journey and share our progress."
//     },
//     {
//       name: "Emily R.",
//       image: "https://cdn3.vectorstock.com/i/1000x1000/26/07/girl-icon-woman-avatar-face-cartoon-style-vector-24742607.jpg",
//       quote: "I love how easy it is to track my progress with FitWithNike. The visual graphs and analytics keep me motivated and on track with my fitness goals."
//     }
//   ]

//   return (
//     <section className="bg-purple-100 py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
//           What Our Users Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <h3 className="font-semibold">{testimonial.name}</h3>
//               </div>
//               <p className="text-gray-600 italic">"{testimonial.quote}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: "Sarah L.",
//     image: "/placeholder.svg?height=100&width=100",
//     quote: "FitJourney has completely transformed my approach to fitness. The personalized workouts and meal plans have helped me achieve results I never thought possible!",
//     rating: 5
//   },
//   {
//     name: "Mike T.",
//     image: "/placeholder.svg?height=100&width=100",
//     quote: "The community support on FitJourney is incredible. It's so motivating to connect with others on the same journey and share our progress.",
//     rating: 4
//   },
//   {
//     name: "Emily R.",
//     image: "/placeholder.svg?height=100&width=100",
//     quote: "I love how easy it is to track my progress with FitJourney. The visual graphs and analytics keep me motivated and on track with my fitness goals.",
//     rating: 5
//   },
//   {
//     name: "David K.",
//     image: "/placeholder.svg?height=100&width=100",
//     quote: "As a busy professional, FitJourney's flexible workout plans fit perfectly into my schedule. I've seen remarkable improvements in my strength and endurance.",
//     rating: 5
//   }
// ];

// function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
//         <div className="relative max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
//             >
//               <div className="flex flex-col md:flex-row items-center mb-6">
//                 <img
//                   src={testimonials[currentIndex].image}
//                   alt={testimonials[currentIndex].name}
//                   className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
//                 />
//                 <div>
//                   <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark">{testimonials[currentIndex].name}</h3>
//                   <div className="flex mt-2">
//                     {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 text-lg italic">"{testimonials[currentIndex].quote}"</p>
//             </motion.div>
//           </AnimatePresence>
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-primary-light dark:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-primary-light dark:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//         <div className="flex justify-center mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full mx-1 ${
//                 index === currentIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah L.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "FitJourney has completely transformed my approach to fitness. The personalized workouts and meal plans have helped me achieve results I never thought possible!",
    rating: 5
  },
  {
    name: "Mike T.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The community support on FitJourney is incredible. It's so motivating to connect with others on the same journey and share our progress.",
    rating: 4
  },
  {
    name: "Emily R.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "I love how easy it is to track my progress with FitJourney. The visual graphs and analytics keep me motivated and on track with my fitness goals.",
    rating: 5
  },
  {
    name: "David K.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "As a busy professional, FitJourney's flexible workout plans fit perfectly into my schedule. I've seen remarkable improvements in my strength and endurance.",
    rating: 5
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col sm:flex-row items-center mb-4 md:mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-light dark:text-primary-dark">{testimonials[currentIndex].name}</h3>
                  <div className="flex mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg italic">"{testimonials[currentIndex].quote}"</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-full mt-4 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-primary-light dark:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-full mt-4 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-primary-light dark:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-16 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

