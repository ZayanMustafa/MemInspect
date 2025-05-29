// Gile : '@/section/schedule/scheduleconfirmation.js'

'use client'
import { FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/component/UI/input'
import Link from 'next/link'
import { toast } from 'react-toastify'

export const ScheduleConfirmation = ({ 
  location, 
  setLocation, 
  vin, 
  setVin, 
  vehicleInfo, 
  setVehicleInfo,
  selectedDate,
  selectedTime,
  displayMonth,
  displayYear,
  monthNames,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({
    location: '',
    vehicleInfo: ''
  })
  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('authToken'))
  }, [])

  const validateFields = () => {
    const errors = {
      location: !location ? 'Location is required' : '',
      vehicleInfo: !vehicleInfo ? 'Vehicle information is required' : ''
    }
    setFieldErrors(errors)
    return !errors.location && !errors.vehicleInfo
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isLoggedIn) {
      toast.error('Please login to book an inspection')
      router.push('/login')
      return
    }

    if (!validateFields()) return

    if (!selectedDate || !selectedTime) {
      toast.error('Please select date and time')
      return
    }

    setIsSubmitting(true)

    try {
      const bookingDate = new Date(displayYear, displayMonth, selectedDate)
      const formattedDate = bookingDate.toISOString().split('T')[0]

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vinLocation: location,
          vinNumber: vin,
          yearOfManufacture: vehicleInfo,
          inspectionDate: formattedDate,
          inspectionTime: selectedTime
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Booking failed')
      }

      toast.success(
        <div>
          <h4 className="font-bold">Booking Confirmed!</h4>
          <p>Date: {monthNames[displayMonth]} {selectedDate}, {displayYear}</p>
          <p>Time: {selectedTime}</p>
          <p>Location: {location}</p>
        </div>,
        { autoClose: 5000 }
      )

      // Reset form
      setLocation('')
      setVin('')
      setVehicleInfo('')

    } catch (error) {
      toast.error(error.message || 'Failed to book inspection')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <div className="border border-white p-8">
      <h2 className="text-3xl font-bold text-white mb-6">INSPECTION DETAILS</h2>
      
      {!isLoggedIn && (
        <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-500 text-yellow-300 flex items-center">
          <FiAlertCircle className="mr-2" />
          <span>Please <Link href='/login' className='underline'>login</Link> to book an inspection</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="block text-white mb-2">Vehicle Location</label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter address or dealership name"
            required
            icon={<FiMapPin className="text-white" />}
            error={fieldErrors.location}
          />
        </div>

        <div className="mb-8">
          <label className="block text-white mb-2">Vehicle Information</label>
          <Input
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="VIN (Optional)"
            className="mb-3"
          />
          <Input
            value={vehicleInfo}
            onChange={(e) => setVehicleInfo(e.target.value)}
            placeholder="Make/Model/Year"
            required
            error={fieldErrors.vehicleInfo}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-white mb-3">Service Selected</h3>
          <div className="border border-white p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">Standard 150-Point Inspection</span>
              <span className="text-white">$199.00</span>
            </div>
            <div className="flex items-center text-green-400">
              <FiCheckCircle className="mr-2" />
              <span>Includes digital report with photos</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl text-white mb-3">Selected Appointment</h3>
          <div className="border border-white p-4">
            {selectedDate && selectedTime ? (
              <>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Date:</span>
                  <span className="text-white">
                    {monthNames[displayMonth]} {selectedDate}, {displayYear}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Time:</span>
                  <span className="text-white">{selectedTime}</span>
                </div>
              </>
            ) : (
              <span className="text-gray-400">Please select a date and time</span>
            )}
          </div>
        </div>

           <button 
          type="submit" 
          disabled={!isLoggedIn || !selectedDate || !selectedTime || !location || !vehicleInfo || isSubmitting}
          className={`w-full py-4 text-xl font-bold transition-colors flex items-center justify-center ${
            !isLoggedIn || !selectedDate || !selectedTime || !location || !vehicleInfo
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          {isSubmitting ? (
            <>
              <span className="inline-block h-6 w-6 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></span>
              Processing...
            </>
          ) : (
            'CONFIRM BOOKING'
          )}
        </button>
      </form>
    </div>
  )
}