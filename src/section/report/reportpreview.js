'use client'
import { FiDownload, FiEye } from 'react-icons/fi';

export const ReportPreview = ({ onDownload, onView }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-20">
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">REPORT PREVIEW</h2>
        <p className="text-xl text-gray-300 mb-8">
          Our digital reports include detailed findings, high-resolution photos, and expert recommendations for each vehicle we inspect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onDownload}
            className="flex items-center justify-center px-8 py-4 bg-white text-black font-bold hover:bg-black hover:text-white transition-colors"
          >
            <FiDownload className="mr-3" /> DOWNLOAD SAMPLE
          </button>
          <button 
            onClick={onView}
            className="flex items-center justify-center px-8 py-4 border border-white text-white font-bold hover:bg-white hover:text-black transition-colors"
          >
            <FiEye className="mr-3" /> VIEW ONLINE
          </button>
        </div>
      </div>
      <div className="border-2 border-white bg-gray-900 p-2">
        <div className="border border-white h-full p-6 flex flex-col">
          <div className="border-b border-white pb-4 mb-6">
            <h3 className="text-2xl text-white">MEM INSPECT REPORT</h3>
            <p className="text-gray-400">Sample Report - 2024 Toyota Camry</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <p className="text-gray-400 text-sm">OVERALL RATING</p>
              <p className="text-2xl text-white">Good</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">MILEAGE</p>
              <p className="text-2xl text-white">24,340</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">INSPECTION DATE</p>
              <p className="text-2xl text-white">06/12/2024</p>
            </div>
          </div>
          <div className="flex-grow bg-gray-800 mb-6 flex items-center justify-center">
            <p className="text-gray-400">[Report preview image]</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">MEM-2024-06-12-TOYOTA-CAMRY-24340</p>
          </div>
        </div>
      </div>
    </div>
  );
};