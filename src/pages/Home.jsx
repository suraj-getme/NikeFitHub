import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import AppLaunch from '../components/AppLaunch'
import Trainers from '../components/Trainers'

function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Features />
      <Trainers />
      <Testimonials />
      <AppLaunch />
    </div>
  )
}

export default Home

