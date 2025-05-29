'use client'
import { FiAlertCircle } from 'react-icons/fi'

export const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  icon,
  className = '',
  error,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`flex items-center border ${error ? 'border-red-500' : 'border-white'} p-4`}>
        {icon && <div className="mr-3 text-white">{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-transparent text-white placeholder-gray-400 w-full outline-none ${error ? 'text-red-300' : ''}`}
          required={required}
          {...props}
        />
      </div>
      {error && (
        <div className="mt-1 flex items-center text-red-400 text-sm">
          <FiAlertCircle className="mr-1" size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

