import { useState } from 'react'

function AppLaunch() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement email submission logic
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="bg-green-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-800">
          Our Fitness App is Coming Soon!
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Be the first to know when we launch. Sign up for early access and exclusive updates!
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 rounded-l-full border-2 border-green-300 focus:outline-none focus:border-green-500"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-r-full">
            Get Early Access
          </button>
        </form>
      </div>
    </section>
  )
}

export default AppLaunch

