// src/app/pricing/page.js
'use client';
import { SecondNavbar } from '@/component/SecondNav';
import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { useState } from 'react';
import { PaymentModal } from '@/component/Payment';
import { paymentplans } from '@/constant/paymentmethod';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  return (
    <>
      <SecondNavbar/>
      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">TRANSPARENT PRICING</h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No hidden fees - our inspections come with clear deliverables
            </p>
          </div>
          
        {/* Planes */}
          <div className="grid md:grid-cols-3 gap-8">
            {paymentplans.map((plan, index) => (
              <div 
                key={index} 
                className={`border-2 rounded-lg overflow-hidden transition-all hover:scale-105 ${
                 plan.popular ? 'border-white bg-white-600' : 'border-gray-700 bg-dark-500'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/inspection</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-white-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-4 font-bold transition-colors ${
                      plan.popular
                        ? 'bg-dark text-white border border-white hover:bg-primary/90'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    BOOK THIS PLAN
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-gray-700 rounded-lg bg-dark-600">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex items-start mr-8 mb-4 md:mb-0">
                <FiAlertTriangle className="text-yellow-400 text-2xl mt-1 mr-3" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Need something custom?</h4>
                  <p className="text-gray-300">
                    We offer fleet discounts, luxury vehicle rates, and commercial inspections.
                  </p>
                </div>
              </div>
              <button className="md:ml-auto px-8 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                REQUEST CUSTOM QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {showPaymentModal && (
        <PaymentModal
          selectedPlan={selectedPlan} 
          onClose={() => setShowPaymentModal(false)} 
        />
      )}
    </>
  );
}