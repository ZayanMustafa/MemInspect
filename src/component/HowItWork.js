


import Link from 'next/link'
import { steps } from '@/constant/stepsofwork'
import { FiArrowRight } from 'react-icons/fi';

const HowItWorks = () => {
 

  return (
    <section className="py-20 bg-dark-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            HOW IT WORKS
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined inspection process in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="border border-white p-10 transition-all duration-300 h-full flex flex-col hover:bg-gray-900/30"
            >
              <div className="w-20 h-20 mx-auto mb-8 border border-white rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-xl text-gray-300 mb-8 flex-grow">{step.description}</p>
              
              <Link href={step.path} 
                 className="mt-auto flex items-center justify-center text-white font-bold text-lg w-full py-3 border border-white hover:bg-white hover:text-black transition-colors">
                  {step.action} <FiArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/schedule" 
             className="inline-block px-10 py-5 bg-white text-black text-xl font-bold hover:bg-black hover:text-white transition-colors border-2 border-white">
              START YOUR INSPECTION
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks