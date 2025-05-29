



'use client';
import { FiCheckCircle, FiDownload } from 'react-icons/fi';
import Confetti from 'react-confetti';
import { PaymentReceipt } from './PaymentReceipt';

export const PaymentSuccess = ({ 
  selectedPlan, 
  onClose, 
  onDownload,
  width,
  height,
  showConfetti 
}) => (
  <div className="fixed inset-0 bg-dark-900 z-50 flex items-center justify-center p-4">
    {showConfetti && (
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.2}
      />
    )}
    <div className="bg-black border-2 border-primary rounded-lg max-w-2xl w-full relative p-8 text-center">
      <div className="mb-6 flex justify-center">
        <FiCheckCircle className="text-green-400 text-6xl" />
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">Payment Successful!</h3>
      <p className="text-gray-400 mb-8 text-xl">
        Thank you for your purchase of <span className="text-white font-medium">{selectedPlan.name}</span>
      </p>
      
      <PaymentReceipt selectedPlan={selectedPlan} />
      
      <div className="space-y-4">
        <button 
          onClick={onClose}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
        >
          Close
        </button>
        <button 
          onClick={onDownload}
          className="w-full flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/10 font-bold py-4 px-6 rounded-lg transition-colors"
        >
          <FiDownload />
          Download Receipt
        </button>
      </div>
    </div>
  </div>
);