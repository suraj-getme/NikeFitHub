import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const DrawerNavigation = ({ setIsDrawerOpen, isDarkMode }) => {
  const drawerVariants = {
    closed: { x: '-100%', transition: { duration: 0.3 } },
    open: { x: 0, transition: { duration: 0.3 } },
  }

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsDrawerOpen(false)}
    >
      <motion.div
        className={`fixed top-0 left-0 bottom-0 w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        variants={drawerVariants}
        initial="closed"
        animate="open"
        exit="closed"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-primary-400' : 'text-primary-600'}`}>FitJourney</h2>
          <motion.button
            onClick={() => setIsDrawerOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          </motion.button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            {['Home', 'About', 'Programs', 'Products', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                variants={linkVariants}
                initial="closed"
                animate="open"
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`block px-4 py-2 text-lg ${isDarkMode ? 'text-gray-300 hover:bg-primary-800 hover:text-primary-400' : 'text-gray-800 hover:bg-primary-100 hover:text-primary-600'} transition-colors duration-200`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  )
}

export default DrawerNavigation

