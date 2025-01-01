function Features() {
  const features = [
    {
      icon: "🏋️‍♂️",
      title: "Personalized Workouts Training",
      description: "Customized workout plans tailored to your fitness goals and preferences."
    },
    {
      icon: "🥗",
      title: "Nutrition Guidance or Diet Planning",
      description: "Customized meal plans and recipes to support your fitness journey."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Visualize your progress with detailed analytics and insights."
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Connect with like-minded individuals and share your fitness journey."
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
        Empowering Features for Your Fitness Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

