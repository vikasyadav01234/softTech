import { useState } from 'react'
import { ChartBarIcon, ShieldCheckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">SoftSell</span>
            <div className="flex gap-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center max-w-4xl pt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Unused Software into <span className="text-blue-600">Revenue</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 md:px-12">
            SoftSell helps businesses recover value from unused software licenses through our secure and efficient marketplace
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBarIcon className="h-12 w-12 text-blue-600" />,
                title: 'Upload License',
                description: 'Share your unused software license details with us'
              },
              {
                icon: <ClockIcon className="h-12 w-12 text-blue-600" />,
                title: 'Get Valuation',
                description: 'Receive a fair market value assessment within 24 hours'
              },
              {
                icon: <CurrencyDollarIcon className="h-12 w-12 text-blue-600" />,
                title: 'Get Paid',
                description: 'Accept our offer and receive payment within 48 hours'
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />,
                title: 'Best Value',
                description: 'Get the highest market value for your licenses'
              },
              {
                icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
                title: 'Secure Process',
                description: '100% secure and compliant transfer process'
              },
              {
                icon: <ClockIcon className="h-8 w-8 text-blue-600" />,
                title: 'Fast Payment',
                description: 'Get paid within 48 hours of acceptance'
              },
              {
                icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
                title: 'Expert Support',
                description: 'Dedicated support throughout the process'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                role: 'IT Director',
                company: 'TechCorp Inc.',
                text: 'SoftSell made the process of selling our unused licenses incredibly smooth. Their valuation was fair and payment was quick.'
              },
              {
                name: 'Michael Chen',
                role: 'CFO',
                company: 'Innovation Labs',
                text: 'Working with SoftSell helped us recover significant value from our unused software assets. Highly recommended!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get Started
          </h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="licenseType">License Type</label>
                <select
                  id="licenseType"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.licenseType}
                  onChange={(e) => setFormData({...formData, licenseType: e.target.value})}
                >
                  <option value="">Select a license type</option>
                  <option value="enterprise">Enterprise Software</option>
                  <option value="cloud">Cloud Services</option>
                  <option value="desktop">Desktop Applications</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
