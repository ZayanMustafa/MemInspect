'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FiUserPlus } from 'react-icons/fi'
import AuthLayout from '@/component/AuthLayout'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      router.push('/dashboard')
    }
  }, [router])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('') 
    
    if (password !== confirmPassword) {
      setError("Passwords don't match!")
      return
    }

    
    const user = {
      name,
      email,
      password, 
      token: 'simulated_jwt_token_' + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString()
    }

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(user))
    
    console.log('User created:', {
      id: 'user_' + Math.random().toString(36).substring(2),
      ...user,
      password: '******' 
    })

    // Redirect to dashboard
    router.push('/dashboard')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <AuthLayout
      title="CREATE ACCOUNT" 
      subtitle="Get started with vehicle inspections"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
              {showPassword ?  <FaEye size={18} /> : <FaEyeSlash size={18} />}
            </button>
          </div>
        </div>

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
              {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm py-2">
            {error}
          </div>
        )}

        <button 
          type="submit" 
          className="w-full flex items-center justify-center py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors font-bold text-white"
        >
          <FiUserPlus className="mr-2" /> SIGN UP
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          ALREADY HAVE AN ACCOUNT?{' '}
          <a href="/login" className="underline hover:text-white">
            LOGIN
          </a>
        </p>
      </div>
    </AuthLayout>
  )
} 