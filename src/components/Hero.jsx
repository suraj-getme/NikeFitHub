import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 space-y-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Personalized Fitness Journey Starts Here
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Achieve your fitness goals with customized workout plans, nutrition guidance, and community support.
        </motion.p>
        <motion.button 
          className="px-6 py-3 bg-green-500 text-white rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
      <motion.div 
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img
          src="https://media.istockphoto.com/id/612262390/photo/body-building-workout.jpg?s=612x612&w=0&k=20&c=zsRgRf3tuStA7dN5bdFS_x1ud-XdU-dJC7B6iuq_AZk="
          alt="Fitness Journey"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">Get Started</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="age" className="block mb-1">Age</label>
                  <input type="number" id="age" className="w-full px-3 py-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-1">Address</label>
                  <textarea id="address" className="w-full px-3 py-2 border rounded" rows="3" required></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
  )
}

export default Hero

