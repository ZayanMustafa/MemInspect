'use client'
import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export const ConsultationForm = ({ 
  fields = [], 
  contactMethods = [], 
  submitText = "REQUEST CONSULTATION" 
}) => {
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowSuccess(false)
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      /* 
       * Backend Integration Example:
       * 
       * 1. Send form data to your API endpoint
       * const response = await fetch('/api/consultations', {
       *   method: 'POST',
       *   headers: {
       *     'Content-Type': 'application/json',
       *   },
       *   body: JSON.stringify({
       *     ...formData,
       *     contactMethod: formData.contactMethod || contactMethods[0],
       *     createdAt: new Date().toISOString()
       *   })
       * })
       * 
       * 2. Handle response
       * if (!response.ok) throw new Error('Submission failed')
       * const data = await response.json()
       * 
       * 3. In your backend (e.g., Next.js API route):
       * - Validate the data
       * - Store in database (MongoDB, PostgreSQL, etc.)
       * - Send confirmation email if needed
       * - Return success response
       */

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setShowSuccess(true)
      // Reset form after successful submission if needed
      // setFormData({})
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="border border-white p-8 relative">
      {showSuccess && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full bg-green-900/90 text-green-300 px-6 py-3 rounded-lg flex items-center animate-fade-in">
          <FiCheckCircle className="mr-2" />
          <span>Your request is submitted! Our team will contact you soon.</span>
        </div>
      )}

      <h2 className="text-3xl font-bold text-white mb-6">REQUEST CONSULTATION</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-white mb-2">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              name={field.name}
              className={`w-full bg-transparent border ${errors[field.name] ? 'border-red-500' : 'border-white'} p-4 text-white placeholder-gray-400`}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
            />
            {errors[field.name] && (
              <p className="mt-1 text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}
        
        <div>
          <label className="block text-white mb-2">Preferred Contact Method</label>
          <div className="flex flex-wrap gap-3">
            {contactMethods.map(method => (
              <label key={method} className="flex items-center">
                <input 
                  type="radio" 
                  name="contactMethod" 
                  className="mr-2" 
                  checked={formData.contactMethod === method}
                  onChange={() => setFormData(prev => ({
                    ...prev,
                    contactMethod: method
                  }))}
                />
                <span className="text-gray-300">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-4 text-xl font-bold transition-colors flex items-center justify-center ${
            isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          {isSubmitting ? (
            <>
              <span className="inline-block h-6 w-6 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></span>
              Processing...
            </>
          ) : (
            submitText
          )}
        </button>
      </form>
    </div>
  )
}