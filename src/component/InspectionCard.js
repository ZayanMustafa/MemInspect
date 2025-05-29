
'use client'

import Image from 'next/image'
import { FaCarSide } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

const InspectionCard = ({ inspection }) => {
  const handleViewReport = () => {
 
    // Open the PDF in a new tab
    window.open('/MemInspect.pdf', '_blank');   
 
  };

  return (
    <div className="bg-primary-500 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white">
      <div className="relative h-48">
        <Image 
          src={inspection.image}
          alt={inspection.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold">{inspection.title}</h3>
          <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
            <CiStar className="text-yellow-500 mr-1" />
            <span className="font-medium">{inspection.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <FiCalendar className="mr-2" />
          <span>{inspection.year} • {inspection.mileage} miles</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <FaCarSide className="mr-2" />
          <span>{inspection.make} {inspection.model}</span>
        </div>
        
        <p className="text-gray-500 mb-6">{inspection.summary}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">${inspection.price}</span>
          <button 
            onClick={handleViewReport}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
          >
            View Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default InspectionCard





