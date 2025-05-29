'use client'
import { FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const CalendarSection = ({ 
  displayMonth, 
  displayYear, 
  currentMonth, 
  currentYear, 
  currentDay,
  selectedDate,
  handleDateSelect,
  handleMonthChange,
  renderCalendarDays,
  monthNames
}) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl text-white flex items-center">
          <FiCalendar className="mr-3" /> 
          {monthNames[displayMonth]} {displayYear}
        </h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => handleMonthChange('prev')}
            disabled={displayMonth <= currentMonth && displayYear <= currentYear}
            className={`p-2 rounded-full ${
              displayMonth <= currentMonth && displayYear <= currentYear
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-white hover:bg-gray-700'
            }`}
          >
            <FiChevronLeft />
          </button>
          <button 
            onClick={() => handleMonthChange('next')}
            className="p-2 rounded-full text-white hover:bg-gray-700"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
          <div key={i} className="text-center text-gray-400 text-sm">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderCalendarDays()}
      </div>
    </div>
  );
};