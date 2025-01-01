import { motion } from 'framer-motion'

const products = [
  {
    name: "Premium Whey Protein",
    description: "High-quality protein powder for muscle recovery and growth.",
    price: 49.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkPoYL67zeLrMfzjKo39mTGtehXQkVb6Yqw&s"
  },
  {
    name: "BCAAs Supplement",
    description: "Branched-chain amino acids to support muscle recovery and endurance.",
    price: 29.99,
    image: "https://5.imimg.com/data5/EO/IL/ZQ/SELLER-38927964/front-500x500.png"
  },
  {
    name: "Shaker Bottle",
    description: "Convenient shaker bottle for mixing your supplements on-the-go.",
    price: 9.99,
    image: "https://www.theindusvalley.in/cdn/shop/products/gymshaker.png?v=1676632653"
  },
  {
    name: "Resistance Bands Set",
    description: "Versatile resistance bands for strength training and mobility exercises.",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/81CgJrVHnGL._AC_UF894,1000_QL80_.jpg"
  }
]

function Products() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2 text-blue-600">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {/* <p className="text-2xl font-bold mb-4">${product.price}</p> */}
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
              Contact Us 
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Products

