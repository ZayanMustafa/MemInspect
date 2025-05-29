import Link from 'next/link'
import { FiHome, FiAlertTriangle } from 'react-icons/fi'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-40 h-40 bg-white-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <FiAlertTriangle className="text-dark-500" size={80} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-dark mb-6 leading-tight">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          
          <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The VIN or page you&apos;re searching for doesn&apors;t exist in our database.
          </p>

          <div className="mt-12">
            <Link href="/" className="inline-flex items-center text-xl text-black font-semibold hover:underline">
              <FiHome className="mr-2" size={24} />
              Return to Home Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}




