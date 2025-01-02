// import { motion } from 'framer-motion'
// import {useNavigate } from 'react-router-dom'

// const products = [
//   {
//     name: "Premium Whey Protein",
//     description: "High-quality protein powder for muscle recovery and growth.",
//     price: 49.99,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkPoYL67zeLrMfzjKo39mTGtehXQkVb6Yqw&s"
//   },
//   {
//     name: "BCAAs Supplement",
//     description: "Branched-chain amino acids to support muscle recovery and endurance.",
//     price: 29.99,
//     image: "https://5.imimg.com/data5/EO/IL/ZQ/SELLER-38927964/front-500x500.png"
//   },
//   {
//     name: "Shaker Bottle",
//     description: "Convenient shaker bottle for mixing your supplements on-the-go.",
//     price: 9.99,
//     image: "https://www.theindusvalley.in/cdn/shop/products/gymshaker.png?v=1676632653"
//   },
//   {
//     name: "Resistance Bands Set",
//     description: "Versatile resistance bands for strength training and mobility exercises.",
//     price: 24.99,
//     image: "https://m.media-amazon.com/images/I/81CgJrVHnGL._AC_UF894,1000_QL80_.jpg"
//   }
// ]

// function Products() {
//   const navigate = useNavigate()
//   return (
//     <div className="container mx-auto px-4 py-20">
//       <h1 className="text-4xl font-bold mb-8 text-blue-800">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.map((product, index) => (
//           <motion.div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
//             <h2 className="text-xl font-bold mb-2 text-blue-600">{product.name}</h2>
//             <p className="text-gray-600 mb-4">{product.description}</p>
//             {/* <p className="text-2xl font-bold mb-4">${product.price}</p> */}
//             <button onClick={()=> navigate('/contact')} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
//               Contact Us 
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Products

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Whey Protein",
    description: "High-quality protein powder for muscle recovery and growth.",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Supplements"
  },
  {
    id: 2,
    name: "BCAAs Supplement",
    description: "Branched-chain amino acids to support muscle recovery and endurance.",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Supplements"
  },
  {
    id: 3,
    name: "FitJourney Shaker Bottle",
    description: "Convenient shaker bottle for mixing your supplements on-the-go.",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Resistance Bands Set",
    description: "Versatile resistance bands for strength training and mobility exercises.",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Equipment"
  },
  {
    id: 5,
    name: "FitJourney Performance T-Shirt",
    description: "Breathable and comfortable t-shirt for your workouts.",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Apparel"
  },
  {
    id: 6,
    name: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbells for home workouts.",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Equipment"
  }
];

const categories = ["All", ...new Set(products.map(product => product.category))];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [productId, quantity]) => {
    const product = products.find(p => p.id === parseInt(productId));
    return sum + (product.price * quantity);
  }, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>FitJourney Products - High-Quality Fitness Gear and Supplements</title>
        <meta name="description" content="Shop FitJourney's curated selection of premium fitness products, including supplements, equipment, and apparel to support your fitness journey." />
      </Helmet>
      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary-light dark:text-primary-dark"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h1>

      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-primary-light dark:bg-primary-dark text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.button
          className="relative p-2 bg-secondary-light dark:bg-secondary-dark text-white rounded-full"
          onClick={() => setIsCartOpen(!isCartOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary-light dark:bg-primary-dark text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2 text-primary-light dark:text-primary-dark">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-secondary-light dark:text-secondary-dark">${product.price.toFixed(2)}</p>
              <motion.button
                className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
                onClick={() => addToCart(product.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-light dark:text-primary-dark">Your Cart</h2>
            {Object.entries(cart).map(([productId, quantity]) => {
              const product = products.find(p => p.id === parseInt(productId));
              return (
                <div key={productId} className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">${product.price.toFixed(2)} x {quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <motion.button
                      className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                      onClick={() => removeFromCart(product.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Minus size={16} />
                    </motion.button>
                    <span className="mx-2">{quantity}</span>
                    <motion.button
                      className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                      onClick={() => addToCart(product.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus size={16} />
                    </motion.button>
                  </div>
                </div>
              );
            })}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xl font-bold text-primary-light dark:text-primary-dark">Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <motion.button
              className="mt-4 w-full bg-secondary-light dark:bg-secondary-dark text-white py-2 rounded-full hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Checkout
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Products;

