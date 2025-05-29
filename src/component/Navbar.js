'use client'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiShield, FiFileText, FiHome, FiDollarSign, FiUser } from 'react-icons/fi'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Check auth status
    const user = localStorage.getItem('user')
    setIsLoggedIn(!!user)

    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typically md breakpoint
    }

    // Initial check
    checkIfMobile()
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    window.location.href = '/login'
  }

  const navLinks = [
    { name: 'Home', href: '/', icon: <FiHome /> },
    { name: 'Services', href: '/services', icon: <FiShield /> },
    { name: 'Reports', href: '/reports', icon: <FiFileText /> },
    { name: 'Pricing', href: '/pricing', icon: <FiDollarSign /> },
  ]

  // Always show dark background on mobile, or when scrolled on desktop
  const shouldShowDarkBg = isMobile || scrolled

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${shouldShowDarkBg ? 'bg-black shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-primary">MEM INSPECT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-white hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="flex items-center px-4 py-2 text-lg font-medium text-white hover:text-primary transition-colors"
                >
                  <FiUser className="mr-2" /> Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-lg font-medium text-white hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black text-white shadow-lg rounded-lg mt-2 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="flex items-center text-lg font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                {isLoggedIn ? (
                  <>
                    <Link 
                      href="/dashboard" 
                      className="flex items-center justify-center px-4 py-2 text-lg font-medium text-white hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <FiUser className="mr-2" /> Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout()
                        setIsOpen(false)
                      }}
                      className="w-full px-4 py-2 mt-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login" 
                      className="block w-full text-center px-4 py-2 text-lg font-medium text-white hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      href="/signup" 
                      className="block w-full text-center px-4 py-2 mt-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar