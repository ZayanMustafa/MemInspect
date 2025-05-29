'use client'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import { SecondNavbar } from '@/component/SecondNav'
import { services } from '@/constant/service'

export default function ServicesPage() {


  return (
    <>
      <SecondNavbar />
      <section className="bg-dark-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">OUR SERVICES</h1>
          <div className="w-24 h-0.5 bg-white mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl">
            Professional vehicle inspections tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-2 border-gray-700 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-5">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.cta.link}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-primary font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  {service.cta.text} <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 p-8 border=1 border-primary rounded-lg bg-dark-600 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">Need Custom Services?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We specialize in luxury vehicles, classics, and commercial inspections with tailored solutions.
            </p>
            <Link
              href="/contactus"
              className="inline-block px-8 py-4 border-2 border-white bg-white text-black font-bold hover:bg-transparent hover:text-white transition-all duration-300"
            >
              TALK TO OUR SPECIALISTS
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}