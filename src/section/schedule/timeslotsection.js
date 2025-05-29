'use client'
import { FiClock } from 'react-icons/fi';

export const TimeSlotSection = ({ selectedDate, selectedTime, handleTimeSelect }) => {
  return (
    selectedDate && (
      <div>
        <h3 className="text-2xl text-white mb-4 flex items-center">
          <FiClock className="mr-3" /> Available Times
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'].map(time => (
            <button 
              key={time} 
              onClick={() => handleTimeSelect(time)}
              className={`py-3 border ${
                time === selectedTime
                  ? 'bg-white text-black'
                  : 'border-white text-white hover:bg-white hover:text-black'
              } transition-colors`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    )
  );
};