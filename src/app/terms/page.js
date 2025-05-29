'use client';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';
import { termsData } from '@/constant/terms';

export default function TermsPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">TERMS & CONDITIONS</h1>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Applicable to all inspection plans
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {termsData.sections.map((section, index) => (
            <div key={index} className="border-b border-gray-700 pb-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h2 className="text-2xl font-bold text-primary">
                  {section.title}
                </h2>
                {expandedSections[index] ? (
                  <FiChevronUp className="text-gray-400 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-400 text-xl" />
                )}
              </div>
              
              {expandedSections[index] && (
                <ul className="mt-4 pl-6 space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-dark-700 rounded-lg border border-gray-700">
          <p className="text-center text-gray-300">
            {termsData.footerNote}
          </p>
        </div>
      </div>
    </div>
  );
}