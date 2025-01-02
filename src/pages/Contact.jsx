// function Contact() {
//     return (
//       <div className="container mx-auto px-4 py-20">
//         <h1 className="text-4xl font-bold mb-8 text-blue-800">Contact Us</h1>
//         <p className="text-lg text-gray-700 mb-8">
//           Have questions or need support? We're here to help! Reach out to us using the contact information below.
//         </p>
//         <div className="space-y-4">
//           <p><strong>Email:</strong> nikeshgetme@gmail.com</p>
//           <p><strong>Phone:</strong> 8530471071</p>
//           <p><strong>Address:</strong> Gajanan Nagar, Wardha City, FC 442001</p>
//         </div>
//       </div>
//     )
//   }
  
//   export default Contact
  
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "Our customer support team is available Monday to Friday, 9 AM to 6 PM EST. For inquiries outside these hours, please leave a message and we'll get back to you as soon as possible."
  },
  {
    question: "How long does it take to get a response?",
    answer: "We aim to respond to all inquiries within 24 hours. For urgent matters, please call our support line for immediate assistance."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our digital products. For physical products, please refer to our return policy for specific details."
  },
  {
    question: "Can I change or cancel my subscription?",
    answer: "You can manage your subscription through your account settings. If you need assistance, our support team will be happy to help."
  }
];

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Contact FitJourney - Get in Touch with Our Team</title>
        <meta name="description" content="Have questions or feedback? Reach out to the FitJourney team. We're here to help you on your fitness journey." />
      </Helmet>
      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary-light dark:text-primary-dark"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-secondary-light dark:text-secondary-dark">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-primary-light dark:bg-primary-dark text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-secondary-light dark:text-secondary-dark">Our Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-primary-light dark:text-primary-dark mr-2" />
              <p>123 Fitness Street, Healthy City, FC 12345</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-primary-light dark:text-primary-dark mr-2" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary-light dark:text-primary-dark mr-2" />
              <p>support@fitjourney.com</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-secondary-light dark:text-secondary-dark">Find Us</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-secondary-light dark:text-secondary-dark">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium text-primary-light dark:text-primary-dark">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                )}
              </button>
              {openFaq === index && (
                <motion.p
                  className="mt-2 text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

