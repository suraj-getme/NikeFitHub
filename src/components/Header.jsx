import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gymLogo from '../assets/gymLogo.png'

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
        <img src={gymLogo} alt="Gym Logo"/>
        </Link>
        {/* <Link to="/" className="text-2xl font-bold text-blue-600">
          FitJourney
        </Link> */}
        <ul className="hidden md:flex space-x-6">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/programs" className="text-gray-600 hover:text-blue-600">Programs</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </motion.li>
        </ul>
        <div className="flex space-x-4">
          <motion.button
            className="px-4 py-2 text-blue-600 hover:text-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </div>
      </nav>
    </header>
  )
}

export default Header

