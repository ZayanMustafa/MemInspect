'use client'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

export const ReportSection = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-white last:border-b-0 group hover:bg-gray-900/30 transition-colors">
      <button 
        onClick={onClick}
        className="w-full p-6 text-left flex justify-between items-center"
      >
        <div>
          <h3 className="text-2xl text-white mb-2">{title}</h3>
          <p className="text-gray-300">{content}</p>
        </div>
        {isOpen ? (
          <FiChevronDown className="text-white text-2xl transition-transform" />
        ) : (
          <FiChevronRight className="text-white text-2xl group-hover:translate-x-2 transition-transform" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 bg-gray-900/50">
          <p className="text-gray-300 mb-4">Detailed content for {title.toLowerCase()} </p>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-800 h-40 flex items-center justify-center">
                <p className="text-gray-400">Sample {title.split(' ')[0]} Image {i+1}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};