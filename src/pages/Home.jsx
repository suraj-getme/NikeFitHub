import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import AppLaunch from '../components/AppLaunch'
import Trainers from '../components/Trainers'
import DietServices from '../components/DietServices'

function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Features />
      <DietServices/>
      <Trainers />
      <Testimonials />
      <AppLaunch />
    </div>
  )
}

export default Home

