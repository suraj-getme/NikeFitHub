// // import { Link } from 'react-router-dom'
// // import { motion } from 'framer-motion'
// // import gymLogo from '../assets/gymLogo.png'

// // function Header() {
// //   return (
// //     <header className="bg-white shadow-sm">
// //       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
// //         {/* <Link to="/">
// //         <img src={gymLogo} alt="Gym Logo"/>
// //         </Link> */}
// //         <Link to="/" className="text-2xl font-bold text-blue-600">
// //           FitJourney
// //         </Link>
// //         <ul className="hidden md:flex space-x-6">
// //           <motion.li whileHover={{ scale: 1.1 }}>
// //             <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
// //           </motion.li>
// //           <motion.li whileHover={{ scale: 1.1 }}>
// //             <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
// //           </motion.li>
// //           <motion.li whileHover={{ scale: 1.1 }}>
// //             <Link to="/programs" className="text-gray-600 hover:text-blue-600">Programs</Link>
// //           </motion.li>
// //           <motion.li whileHover={{ scale: 1.1 }}>
// //             <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
// //           </motion.li>
// //           <motion.li whileHover={{ scale: 1.1 }}>
// //             <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
// //           </motion.li>
// //         </ul>
// //         <div className="flex space-x-4">
// //           <motion.button
// //             className="px-4 py-2 text-blue-600 hover:text-blue-700"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             Log In
// //           </motion.button>
// //           <motion.button
// //             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             Sign Up
// //           </motion.button>
// //         </div>
// //       </nav>
// //     </header>
// //   )
// // }

// // export default Header

// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { Menu, Sun, Moon } from 'lucide-react'

// function Header({ setIsDrawerOpen, isDarkMode, setIsDarkMode }) {
//   return (
//     <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
//           FitJourney
//         </Link>
//         <ul className="hidden md:flex space-x-6">
//           {['Home', 'About', 'Programs', 'Products', 'Contact'].map((item) => (
//             <motion.li key={item} whileHover={{ scale: 1.1 }}>
//               <Link
//                 to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                 className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
//               >
//                 {item}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//         <div className="flex items-center space-x-4">
//           <motion.button
//             className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-200"
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </motion.button>
//           <motion.button
//             className="px-4 py-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hidden md:block"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Log In
//           </motion.button>
//           <motion.button
//             className="px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded hover:bg-primary-700 dark:hover:bg-primary-600 hidden md:block"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Sign Up
//           </motion.button>
//           <button
//             className="md:hidden text-gray-600 dark:text-gray-300"
//             onClick={() => setIsDrawerOpen(true)}
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Header

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import { Menu, X, Moon, Sun } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const menuItems = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/programs', text: 'Programs' },
    { to: '/products', text: 'Products' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="bg-background-light dark:bg-background-dark shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
          FitJourney
        </Link>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <motion.div key={item.to} whileHover={{ scale: 1.1 }}>
              <Link to={item.to} className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark">
                {item.text}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
          </motion.button>
          <div className="md:hidden">
            <motion.button
              onClick={toggleDrawer}
              className="text-text-light dark:text-text-dark"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-light dark:bg-background-dark"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block py-2 px-4 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleDrawer}
              >
                {item.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;





