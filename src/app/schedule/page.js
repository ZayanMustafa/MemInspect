'use client'
import { useState } from 'react';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CalendarSection } from '@/section/schedule/calender';
import { TimeSlotSection } from '@/section/schedule/timeslotsection';
import { ScheduleConfirmation } from '@/section/schedule/scheduleconfirmation';
import { SecondNavbar } from '@/component/SecondNav';

export default function Schedule() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [displayMonth, setDisplayMonth] = useState(currentMonth);
  const [displayYear, setDisplayYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [location, setLocation] = useState('');
  const [vin, setVin] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');

  const handleDateSelect = (date) => {

    if (
      displayMonth === currentMonth && 
      displayYear === currentYear && 
      date < currentDay
    ) {
      toast.error("Cannot select past dates");
      return;
    }
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleMonthChange = (direction) => {
    if (direction === 'prev' && (displayMonth > currentMonth || displayYear > currentYear)) {
      setDisplayMonth(prev => (prev === 0 ? 11 : prev - 1));
      if (displayMonth === 0) setDisplayYear(prev => prev - 1);
    } else if (direction === 'next') {
      setDisplayMonth(prev => (prev === 11 ? 0 : prev + 1));
      if (displayMonth === 11) setDisplayYear(prev => prev + 1);
    }
    setSelectedDate(null);
    setSelectedTime('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !location || !vehicleInfo) {
      toast.error("Please fill all required fields");
      return;
    }

    const bookingDate = new Date(displayYear, displayMonth, selectedDate);
    const formattedDate = bookingDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    toast.success(
      <div>
        <h4 className="font-bold">Booking Confirmed!</h4>
        <p>Date: {formattedDate}</p>
        <p>Time: {selectedTime}</p>
        <p>Location: {location}</p>
      </div>,
      { autoClose: 5000 }
    );

    // Reset form
    setSelectedDate(null);
    setSelectedTime('');
    setLocation('');
    setVin('');
    setVehicleInfo('');
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(displayMonth, displayYear);
    const firstDayOfMonth = getFirstDayOfMonth(displayMonth, displayYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }

    // Cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isPastDate = 
        displayMonth === currentMonth && 
        displayYear === currentYear && 
        day < currentDay;
      
      days.push(
        <button
          key={day}
          onClick={() => !isPastDate && handleDateSelect(day)}
          disabled={isPastDate}
          className={`py-2 rounded-full ${
            day === selectedDate 
              ? 'bg-white text-black' 
              : isPastDate
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-white hover:bg-gray-700'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };


  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <>
      <ToastContainer position="top-right" />
      <SecondNavbar/>
      <section className="bg-dark-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">SCHEDULE YOUR INSPECTION</h1>
          <div className="w-24 h-0.5 bg-white mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl">
            Book your 150-point vehicle inspection with our certified technicians
          </p>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">AVAILABLE TIME SLOTS</h2>
            
            <CalendarSection 
              displayMonth={displayMonth}
              displayYear={displayYear}
              currentMonth={currentMonth}
              currentYear={currentYear}
              currentDay={currentDay}
              selectedDate={selectedDate}
              handleDateSelect={handleDateSelect}
              handleMonthChange={handleMonthChange}
              renderCalendarDays={renderCalendarDays}
              monthNames={monthNames}
            />

            <TimeSlotSection 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              handleTimeSelect={handleTimeSelect}
            />
          </div>

          <ScheduleConfirmation
            location={location}
            setLocation={setLocation}
            vin={vin}
            setVin={setVin}
            vehicleInfo={vehicleInfo}
            setVehicleInfo={setVehicleInfo}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            displayMonth={displayMonth}
            displayYear={displayYear}
            monthNames={monthNames}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </>
  );
}