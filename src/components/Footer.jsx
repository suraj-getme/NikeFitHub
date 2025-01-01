import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FitJourney</h3>
            <p className="text-blue-200">Your personal fitness companion for a healthier, happier you.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-blue-200 hover:text-white">Our Programs</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-blue-200 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-blue-200 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">Facebook</a>
              {/* <a href="#" className="text-blue-200 hover:text-white">Twitter</a> */}
              <a href="https://www.instagram.com/nikeshgetme/" className="text-blue-200 hover:text-white">Instagram</a>
              <a href="#" className="text-blue-200 hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200">
          &copy; {new Date().getFullYear()} FitJourney. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

