

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Link from 'next/link'
import { footerLinks } from '@/constant/footer'

const Footer = () => {
 

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div>
            <h3 className="text-3xl font-bold mb-4">MEM INSPECT</h3>
            <p className="text-gray-400 mb-6">
              Professional vehicle inspection services you can trust. Our certified inspectors provide detailed reports to help you make informed decisions.
            </p>
            <div className="flex space-x-4">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                <Link key={index} href="/instgram" target='blank' className="text-gray-400 hover:text-white transition-colors">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary" />
                <span className="text-gray-400">support@meminspect.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary" />
                <span className="text-gray-400">(+92) 311 2512821</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary" />
                <span className="text-gray-400">Korangi , Karachi Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MEM INSPECT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer