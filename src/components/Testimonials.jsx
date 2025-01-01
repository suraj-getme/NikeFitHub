function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      image: "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
      quote: "FitWithNike has completely transformed my approach to fitness. The personalized workouts and meal plans have helped me achieve results I never thought possible!"
    },
    {
      name: "Mike T.",
      image: "https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg",
      quote: "The community support on FitWithNike is incredible. It's so motivating to connect with others on the same journey and share our progress."
    },
    {
      name: "Emily R.",
      image: "https://cdn3.vectorstock.com/i/1000x1000/26/07/girl-icon-woman-avatar-face-cartoon-style-vector-24742607.jpg",
      quote: "I love how easy it is to track my progress with FitWithNike. The visual graphs and analytics keep me motivated and on track with my fitness goals."
    }
  ]

  return (
    <section className="bg-purple-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

