'use client';
import { forwardRef, useRef } from 'react';
import html2canvas from 'html2canvas';

export const PaymentReceipt = forwardRef(({ selectedPlan }, ref) => (
  <div 
    ref={ref}
    className="border border-gray-700 p-6 rounded-lg bg-dark-700 mb-8 text-left"
  >
    <div className="flex justify-between items-center mb-6">
      <h4 className="text-xl font-bold text-white">Receipt</h4>
      <div className="text-gray-400 text-sm">
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>
    
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Transaction ID:</span>
        <span className="text-white font-mono">TX-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Plan:</span>
        <span className="text-white">{selectedPlan.name}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Amount Paid:</span>
        <span className="text-white">{selectedPlan.price}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Payment Method:</span>
        <span className="text-white">Credit Card</span>
      </div>
    </div>
    
    <div className="pt-4 border-t border-gray-700">
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Total:</span>
        <span className="text-xl font-bold text-white">{selectedPlan.price}</span>
      </div>
    </div>
    
    <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-xs">
      <p>Thank you for your business!</p>
      <p className="mt-2">This is an official receipt for your records</p>
    </div>
  </div>
));

PaymentReceipt.displayName = 'PaymentReceipt';

export const DownloadablePaymentReceipt = ({ selectedPlan }) => {
  const receiptRef = useRef(null);

  const downloadReceipt = async () => {
    if (!receiptRef.current) return;
    
    try {
      const canvas = await html2canvas(receiptRef.current, {
        backgroundColor: null,
        scale: 2 // Higher quality
      });
      
      const link = document.createElement('a');
      link.download = `payment_receipt_${new Date().toISOString().slice(0, 10)}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating receipt:', error);
    }
  };

  return (
    <div>
      <PaymentReceipt ref={receiptRef} selectedPlan={selectedPlan} />
      <button
        onClick={downloadReceipt}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Receipt
      </button>
    </div>
  );
};