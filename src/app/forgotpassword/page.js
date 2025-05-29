'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthLayout from '@/component/AuthLayout'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {

      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would call your backend here
      console.log('Password reset requested for:', email)
      
      setMessage('If an account exists with this email, you will receive a password reset link.')
      setEmail('')
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout
      title="FORGOT PASSWORD"
      subtitle="Enter your email to reset your password"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-white">EMAIL</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-white/20 p-3 pl-10 focus:border-white focus:outline-none text-white" 
              placeholder="your@email.com"
              required 
            />
          </div>
        </div>

        {message && (
          <div className={`p-3 text-sm rounded ${message.includes('error') ? 'bg-red-900/50 text-red-300' : 'bg-green-900/50 text-green-300'}`}>
            {message}
          </div>
        )}

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full flex items-center justify-center py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'SENDING...' : 'SEND RESET LINK'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          REMEMBER YOUR PASSWORD?{' '}
          <Link 
            href="/login" 
            className="underline hover:text-white transition-colors"
          >
            LOGIN
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}