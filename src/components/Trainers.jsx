import { motion } from 'framer-motion'

const trainers = [
  {
    name: "Nikesh Getme",
    experience: "Had:- 5+ years of experience in the field of Fitness and Trainings",
    certifications: ["NASM Certified Personal Trainer", "ACE Certified Nutrition Specialist"],
    image: "https://myindianthings.com/cdn/shop/products/Gym_Yoga_wallpapers-compressed-page-008_800x.jpg?v=1658401561"
  },
  // {
  //   name: "Jane Smith",
  //   experience: "8 years of experience",
  //   certifications: ["ISSA Certified Fitness Trainer", "Precision Nutrition Level 1 Certified"],
  //   image: "/placeholder.svg"
  // }
]

function Trainers() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Expert Trainer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full mr-4" />
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
              </div>
              <p className="text-gray-600 mb-2">{trainer.experience}</p>
              <h4 className="font-semibold mb-2">Certifications:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {trainer.certifications.map((cert, certIndex) => (
                  <li key={certIndex}>{cert}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers

