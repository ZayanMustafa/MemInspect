


'use client';
import Image from 'next/image';

export const PaymentMethodButton = ({ method, onClick }) => (
  <button 
    onClick={() => onClick(method.id)}
    className="w-full flex items-center justify-center gap-3 border border-gray-700 p-4 text-white hover:bg-dark-700 transition-colors rounded-lg"
  >
    <Image 
      src={method.icon} 
      alt={method.alt} 
      width={24}
      height={24}
      className="brightness-0 invert" 
    />
    <span>{method.name}</span>
  </button>
);

