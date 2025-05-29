'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function AuthForm({ type }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (type === 'signup' && password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    console.log({ email, password, name })
    router.push('/dashboard')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'signup' && (
        <div>
          <label className="block text-sm font-medium mb-2 text-white">FULL NAME</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none text-white" 
            required 
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2 text-white">EMAIL</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none text-white" 
          required 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-white">PASSWORD</label>
        <div className="relative">
          <input 
            type={showPassword ? "text" : "password"} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none text-white pr-10" 
            required 
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        </div>
      </div>

      {type === 'signup' && (
        <div>
          <label className="block text-sm font-medium mb-2 text-white">CONFIRM PASSWORD</label>
          <div className="relative">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none text-white pr-10" 
              required 
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>
      )}

      <button 
        type="submit" 
        className="w-full flex items-center justify-center py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors font-bold text-white"
      >
        {type === 'login' ? 'LOGIN' : 'SIGN UP'}
      </button>
    </form>
  )
}