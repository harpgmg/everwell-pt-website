import React, { useState, useEffect } from 'react'
import { Activity, MapPin, Phone, Mail, Calendar, ArrowRight, Instagram, Menu, X, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const currentYear = new Date().getFullYear()
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const calculateExperience = () => {
    const today = new Date()
    const startDate = new Date(2010, 2) // March 2010
    let years = today.getFullYear() - startDate.getFullYear()
    
    if (today.getMonth() < 2) {
      years--
    }
    
    return years
  }

  const experienceYears = calculateExperience()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/logo.png" 
                  alt="Everwell PT" 
                  className="h-12"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-[#B47B84]">About</a>
              <a href="#services" className="text-gray-600 hover:text-[#B47B84]">Services</a>
              <Link to="/faq" className="text-gray-600 hover:text-[#B47B84]">FAQ</Link>
              <a href="#contact" className="text-gray-600 hover:text-[#B47B84]">Contact</a>
              <a 
                href="https://www.instagram.com/everwellpt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B47B84] hover:text-[#9D6B73] transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-[#B47B84] transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-4 flex flex-col items-center">
              <a 
                href="#about" 
                className="block text-gray-600 hover:text-[#B47B84] text-lg font-medium text-center w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="block text-gray-600 hover:text-[#B47B84] text-lg font-medium text-center w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <Link 
                to="/faq" 
                className="block text-gray-600 hover:text-[#B47B84] text-lg font-medium text-center w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <a 
                href="#contact" 
                className="block text-gray-600 hover:text-[#B47B84] text-lg font-medium text-center w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://www.instagram.com/everwellpt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#B47B84] hover:text-[#9D6B73] transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Add top padding to account for fixed nav */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src="/hero.jpg"
              alt="Physical Therapy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B47B84]/60 to-[#D2C1BD]/60"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Your Journey<br />to Wellness & Recovery
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Personalized, compassionate physical therapy services designed to help you move freely, feel confident, and live your best life.
            </p>
            <div className="flex space-x-4">
              <a 
                target="_blank"
                href="https://everwellpt.clientsecure.me/contact-widget" 
                className="bg-white text-[#B47B84] px-8 py-3 rounded-full hover:bg-[#D2C1BD]/20 transition shadow-md"
              >
                Schedule Evaluation
              </a>
              <a href="#services" className="bg-[#B47B84] text-white px-8 py-3 rounded-full hover:bg-[#9D6B73] transition shadow-md">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/headshot.jpg"
                  alt="Physical Therapist"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Welcome to Everwell PT</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Hi, I'm Jen, the owner of Everwell PT. With over {experienceYears} years of experience as a licensed Physical Therapist, I've built this practice around what matters most: compassionate, personalized care that helps you move better, feel stronger, and live with less pain.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    At Everwell, passion meets purpose, and recovery is anything but boring. Whether you're working on mobility, strength, balance, post op care, or simply want to feel your best, I'm here to deliver quality treatment without limits and with just the right amount of fun.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Whether you are coming to me or I am coming to you, I can't wait to help you get back to doing what you love.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed italic font-medium">
                    Let's make healing empowering. Let's make it fun. Let's make it Everwell.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Therapy Services</h2>
            <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">We provide a full range of physical therapy and wellness services designed to support recovery, improve movement, and promote long term health. As a cash pay practice, our care is free from insurance limitations, allowing us to focus entirely on what you need, when you need it. Whether you are healing from injury, working on prevention, or striving to perform at your best, our services are tailored just for you.</p>
            <div className="flex justify-center mb-16">
              <Link to="/cash-pay" className="bg-[#B47B84] text-white px-8 py-3 rounded-full hover:bg-[#9D6B73] transition shadow-md">
                View Pricing & Learn About Cash Pay
              </Link>
            </div>
            
            <div className="space-y-16">
              {/* Core Rehabilitation */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <img
                    src="/core-rehabilitation-service.png"
                    alt="Core Rehabilitation"
                    className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 text-[#B47B84]">
                    <Activity className="h-6 w-6" />
                    <h3 className="text-2xl font-semibold">Core Rehabilitation</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Gentle, progressive recovery from general injuries, post-surgical procedures, and aim to prevent future injuries before they start.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Pain management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Therapeutic Exercise Programs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Manual Therapy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Neuromuscular Re-education
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Post-Surgical Rehabilitation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Injury Prevention
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sports Rehabilitation */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <img
                    src="/sport-rehabilitation-service.jpg"
                    alt="Sports Rehabilitation"
                    className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 text-[#B47B84]">
                    <Activity className="h-6 w-6" />
                    <h3 className="text-2xl font-semibold">Sports Rehabilitation</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Targeted care for athletes of all levels, addressing sports injuries and boosting performance. We combine hands-on therapy with tailored strength and mobility training to help you recover quickly and stay in the game.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Return to your active lifestyle safely
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Prevent future injuries
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Improve performance and strength
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      <Link to="/running-analysis" className="group flex items-center hover:text-[#B47B84] transition-colors">
                        Running Analysis
                        <span className="ml-2 text-sm text-[#B47B84] group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="inline-block h-4 w-4" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Adjunct Modalities */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <img
                    src="/electrical-stim-service.jpg"
                    alt="Adjunct Modalities"
                    className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 text-[#B47B84]">
                    <Activity className="h-6 w-6" />
                    <h3 className="text-2xl font-semibold">Adjunct Modalities</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    These complementary techniques are used alongside core rehabilitation to enhance recovery, reduce pain, and support overall treatment goals.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      <Link to="/dry-needling" className="group flex items-center hover:text-[#B47B84] transition-colors">
                        Dry Needling
                        <span className="ml-2 text-sm text-[#B47B84] group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="inline-block h-4 w-4" />
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      <Link to="/cupping-therapy" className="group flex items-center hover:text-[#B47B84] transition-colors">
                        Cupping Therapy
                        <span className="ml-2 text-sm text-[#B47B84] group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="inline-block h-4 w-4" />
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      <Link to="/electrical-stimulation" className="group flex items-center hover:text-[#B47B84] transition-colors">
                        Electrical Stimulation (E-Stim)
                        <span className="ml-2 text-sm text-[#B47B84] group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="inline-block h-4 w-4" />
                        </span>
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      <Link to="/massage-therapy" className="group flex items-center hover:text-[#B47B84] transition-colors">
                        Massage Therapy
                        <span className="ml-2 text-sm text-[#B47B84] group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="inline-block h-4 w-4" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Flexible Care Delivery Options */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <img
                    src="/flexible-care-service.jpg"
                    alt="Flexible Care Delivery"
                    className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 text-[#B47B84]">
                    <Activity className="h-6 w-6" />
                    <h3 className="text-2xl font-semibold">Flexible Care Delivery Options</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    We provide several convenient ways for you to receive care, including appointments in our home-based clinic, personalized visits in your own space, and virtual sessions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      In-Clinic Sessions (Syracuse, UT)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Home Visits (Throughout the Wasatch Front)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B47B84]"></span>
                      Telehealth Services (Available Anywhere)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-[#D2C1BD]/5">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#B47B84] mb-4">In-Clinic Treatment</h3>
                <p className="text-gray-600">
                  Our home-based clinic is conveniently located in Syracuse, Utah. We offer a comfortable, private setting for your therapy sessions at:
                </p>
                <p className="text-gray-700 font-medium mt-4">
                  1522 W. Barber Ln.<br />
                  Syracuse, UT 84075
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#B47B84] mb-4">Mobile Services</h3>
                <p className="text-gray-600">
                  We provide mobile physical therapy services throughout the Wasatch Front, including:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>• Salt Lake County</li>
                  <li>• Davis County</li>
                  <li>• Weber County</li>
                  <li>• Utah County</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#B47B84] mb-4">Telehealth Services</h3>
                <p className="text-gray-600">
                  Our virtual therapy sessions are available to patients anywhere, making it convenient to receive care from the comfort of your home or office. Perfect for:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>• Follow-up sessions</li>
                  <li>• Exercise guidance</li>
                  <li>• Progress monitoring</li>
                  <li>• Quick consultations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#D2C1BD]/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a 
                    href="https://maps.google.com/?q=1522+W.+Barber+Ln.+Syracuse,+UT+84075"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-[#B47B84] transition-colors"
                  >
                    <MapPin className="h-5 w-5 text-[#B47B84]" />
                    <span className="text-gray-700">1522 W. Barber Ln. Syracuse, UT 84075</span>
                  </a>
                  <a 
                    href="sms:8015109888"
                    className="flex items-center space-x-3 hover:text-[#B47B84] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#B47B84]" />
                    <span className="text-gray-700">(801) 510-9888 (Call or Text)</span>
                  </a>
                  <a 
                    href="mailto:jen@everwellpt.com"
                    className="flex items-center space-x-3 hover:text-[#B47B84] transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#B47B84]" />
                    <span className="text-gray-700">jen@everwellpt.com</span>
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Schedule a Visit</h3>
                <div className="flex items-center space-x-2 text-[#B47B84] mb-6">
                  <Calendar className="h-5 w-5" />
                  <span>Available appointments within 24-48 hours</span>
                </div>
                <a
                  target="_blank"
                  href="https://everwellpt.clientsecure.me/contact-widget"
                  className="block w-full bg-[#B47B84] text-white text-center px-6 py-3.5 rounded-full hover:bg-[#9D6B73] transition shadow-sm"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#D2C1BD]/10 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <img 
                src="/logo-circle.png" 
                alt="Everwell PT" 
                className="h-8"
              />
              <div className="flex items-center gap-6">
                <Link to="/resources" className="text-gray-600 hover:text-[#B47B84] transition-colors">
                  Resources
                </Link>
                <Link to="/faq" className="text-gray-600 hover:text-[#B47B84] transition-colors">
                  FAQ
                </Link>
              </div>
              <p className="text-gray-600">© {currentYear} Everwell PT LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll to Top Button - Only visible on mobile */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="md:hidden fixed bottom-6 right-6 p-3 bg-[#B47B84]/80 text-white rounded-full shadow-lg hover:bg-[#B47B84] transition-all z-50 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default App