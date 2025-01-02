// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// // import Header from './components/Header'
// // import Footer from './components/Footer'
// // import Home from './pages/Home'
// // import About from './pages/About'
// // import Programs from './pages/Programs'
// // import Products from './pages/Products'
// // import Contact from './pages/Contact'

// // function App() {
// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen">
// //         <Header />
// //         <main className="flex-grow">
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/programs" element={<Programs />} />
// //             <Route path="/products" element={<Products />} />
// //             <Route path="/contact" element={<Contact />} />
// //           </Routes>
// //         </main>
// //         <Footer />
// //       </div>
// //     </Router>
// //   )
// // }

// // export default App


// import { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import About from './pages/About'
// import Programs from './pages/Programs'
// import Products from './pages/Products'
// import Contact from './pages/Contact'
// import DrawerNavigation from './components/DrawerNavigation'

// function App() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false)
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [isDarkMode])

//   return (
//     <Router>
//       <div className={`flex flex-col min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300`}>
//         <Header setIsDrawerOpen={setIsDrawerOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//         <AnimatePresence>
//           {isDrawerOpen && (
//             <DrawerNavigation setIsDrawerOpen={setIsDrawerOpen} isDarkMode={isDarkMode} />
//           )}
//         </AnimatePresence>
//         <motion.main 
//           className="flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/programs" element={<Programs />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </motion.main>
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { ThemeProvider } from '../src/components/contexts/ThemeContext';
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import About from './pages/About'
// import Programs from './pages/Programs'
// import Products from './pages/Products'
// import Contact from './pages/Contact'

// function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">
//           <Header />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/programs" element={<Programs />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </ThemeProvider>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext';
import { Helmet } from 'react-helmet';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">
          <Helmet>
            <title>FitJourney - Your Personal Fitness Companion</title>
            <meta name="description" content="Achieve your fitness goals with personalized workout plans, expert nutrition guidance, and a supportive community at FitJourney." />
            <meta name="keywords" content="fitness, personal trainer, workout plans, nutrition, community" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://www.fitjourney.com" />
          </Helmet>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App


