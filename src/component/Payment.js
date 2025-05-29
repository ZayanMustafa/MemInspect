'use client';
import { FiX } from 'react-icons/fi';
import { useState, useRef } from 'react';
import { useWindowSize } from 'react-use';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { PaymentSuccess } from './Payment/PaymentSucess';
import { PaymentForm } from './Payment/PaymentForm';


export const PaymentModal = ({ selectedPlan, onClose }) => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const receiptRef = useRef(null);

  const handlePaymentSelect = (methodId) => {
    console.log('Selected payment method:', methodId);
  };

  const handleCompletePayment = () => {
    setPaymentCompleted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const downloadReceipt = async () => {
    if (!receiptRef.current) return;
    
    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`receipt_${selectedPlan.name}_${new Date().toISOString().slice(0,10)}.pdf`);
      
    } catch (error) {
      console.error('Error generating receipt:', error);
      alert('Failed to generate receipt. Please try again.');
    }
  };

  if (paymentCompleted) {
    return (
      <PaymentSuccess
        selectedPlan={selectedPlan}
        onClose={onClose}
        onDownload={downloadReceipt}
        width={width}
        height={height}
        showConfetti={showConfetti}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-dark-900 z-50 flex items-center justify-center p-4">
      <PaymentForm 
        selectedPlan={selectedPlan}
        onPaymentSelect={handlePaymentSelect}
        onCompletePayment={handleCompletePayment}
      />
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-300 hover:text-primary"
      >
        <FiX size={24} />
      </button>
    </div>
  );
};









// 'use client';
// import { FiX, FiCheckCircle, FiDownload } from 'react-icons/fi';
// import { useState, useRef } from 'react';
// import Confetti from 'react-confetti';
// import { useWindowSize } from 'react-use';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
// import { paymentMethods } from '@/constant/paymentmethod';
// import Image from 'next/image';

// export const PaymentModal = ({ selectedPlan, onClose }) => {
//   const [paymentCompleted, setPaymentCompleted] = useState(false);
//   const { width, height } = useWindowSize();
//   const [showConfetti, setShowConfetti] = useState(false);
//   const receiptRef = useRef(null);

//   const handlePaymentSelect = (methodId) => {
//     console.log('Selected payment method:', methodId);
//   };

//   const handleCompletePayment = () => {
//     setPaymentCompleted(true);
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 5000);
//   };

//   const downloadReceipt = async () => {
//     if (!receiptRef.current) return;
    
//     try {
//       const canvas = await html2canvas(receiptRef.current, {
//         scale: 2,
//         logging: false,
//         useCORS: true,
//         allowTaint: true
//       });
      
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const imgWidth = 190;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
//       pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
//       pdf.save(`receipt_${selectedPlan.name}_${new Date().toISOString().slice(0,10)}.pdf`);
      
//     } catch (error) {
//       console.error('Error generating receipt:', error);
//       alert('Failed to generate receipt. Please try again.');
//     }
//   };

//   if (paymentCompleted) {
//     return (
//       <div className="fixed inset-0 bg-dark-900 z-50 flex items-center justify-center p-4">
//         {showConfetti && (
//           <Confetti
//             width={width}
//             height={height}
//             recycle={false}
//             numberOfPieces={500}
//             gravity={0.2}
//           />
//         )}
//         <div className="bg-dark-800 border-2 border-primary rounded-lg max-w-2xl w-full relative p-8 text-center">
//           <div className="mb-6 flex justify-center">
//             <FiCheckCircle className="text-green-400 text-6xl" />
//           </div>
//           <h3 className="text-3xl font-bold text-white mb-4">Payment Successful!</h3>
//           <p className="text-gray-400 mb-8 text-xl">
//             Thank you for your purchase of <span className="text-white font-medium">{selectedPlan.name}</span>
//           </p>
          
//           <div 
//             ref={receiptRef}
//             className="border border-gray-700 p-6 rounded-lg bg-dark-700 mb-8 text-left"
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h4 className="text-xl font-bold text-white">Receipt</h4>
//               <div className="text-gray-400 text-sm">
//                 {new Date().toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric',
//                   hour: '2-digit',
//                   minute: '2-digit'
//                 })}
//               </div>
//             </div>
            
//             <div className="mb-8">
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-gray-400">Transaction ID:</span>
//                 <span className="text-white font-mono">TX-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
//               </div>
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-gray-400">Plan:</span>
//                 <span className="text-white">{selectedPlan.name}</span>
//               </div>
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-gray-400">Amount Paid:</span>
//                 <span className="text-white">{selectedPlan.price}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-400">Payment Method:</span>
//                 <span className="text-white">Credit Card</span>
//               </div>
//             </div>
            
//             <div className="pt-4 border-t border-gray-700">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-400">Total:</span>
//                 <span className="text-xl font-bold text-white">{selectedPlan.price}</span>
//               </div>
//             </div>
            
//             <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-xs">
//               <p>Thank you for your business!</p>
//               <p className="mt-2">This is an official receipt for your records</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <button 
//               onClick={onClose}
//               className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
//             >
//               Close
//             </button>
//             <button 
//               onClick={downloadReceipt}
//               className="w-full flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/10 font-bold py-4 px-6 rounded-lg transition-colors"
//             >
//               <FiDownload />
//               Download Receipt
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-dark-900 z-50 flex items-center justify-center p-4">
//       <div className="bg-dark-800 border-2 border-gray-700 rounded-lg max-w-2xl w-full relative">
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-300 hover:text-primary"
//         >
//           <FiX size={24} />
//         </button>
        
//         <div className="p-8">
//           <h3 className="text-3xl font-bold text-white mb-2">Complete Your Booking</h3>
//           <p className="text-gray-400 mb-6">You&apors;re purchasing: <span className="text-white font-medium">{selectedPlan.name}</span></p>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="text-xl font-bold text-white mb-4">Payment Method</h4>
              
//               <div className="space-y-4">
//                 {paymentMethods.map((method) => (
//                   <button 
//                     key={method.id}
//                     onClick={() => handlePaymentSelect(method.id)}
//                     className="w-full flex items-center justify-center gap-3 border border-gray-700 p-4 text-white hover:bg-dark-700 transition-colors rounded-lg"
//                   >
//                     <Image src={method.icon} alt={method.alt} className="h-6 brightness-0 invert" />
//                     <span>{method.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-xl font-bold text-white mb-4">Order Summary</h4>
              
//               <div className="border border-gray-700 p-6 rounded-lg bg-dark-700">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-gray-400">Plan:</span>
//                   <span className="text-white font-medium">{selectedPlan.name}</span>
//                 </div>
                
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-gray-400">Price:</span>
//                   <span className="text-white font-medium">{selectedPlan.price}</span>
//                 </div>
                
//                 <div className="flex justify-between items-center mb-6">
//                   <span className="text-gray-400">Tax:</span>
//                   <span className="text-white font-medium">Calculated at checkout</span>
//                 </div>
                
//                 <div className="pt-4 border-t border-gray-700">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-400">Total:</span>
//                     <span className="text-2xl font-bold text-white">{selectedPlan.price}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <button 
//                 onClick={handleCompletePayment}
//                 className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
//               >
//                 Complete Payment
//               </button>            
//               <p className="text-gray-500 text-sm mt-4">
//                 Your payment is secure and encrypted. By continuing, you agree to our Terms of Service.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



