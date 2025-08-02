'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import AuthLayout from '@/component/AuthLayout'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password, rememberMe })
    router.push('/dashboard')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <AuthLayout
      title="LOGIN" 
      subtitle="Access your inspection dashboard"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
              {showPassword ?  <FaEye size={18}/> : <FaEyeSlash size={18} /> }
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-white">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 border-white/20 bg-black text-white focus:ring-white" 
            />
            <span className="text-sm">REMEMBER ME</span>
          </label>
          
          <Link href="/forgotpassword" className="text-sm underline text-white hover:text-gray-300">FORGOT PASSWORD?</Link>
        </div>

        <button 
          type="submit" 
          className="w-full flex items-center justify-center py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors font-bold text-white"
        >
          <FiLogIn className="mr-2" /> LOGIN
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          DON&apos;T HAVE AN ACCOUNT?{' '}
          <Link href="/signup" className="underline hover:text-white">
            SIGN UP
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}


